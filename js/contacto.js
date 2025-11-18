/* ========================================
   CONTACTO.JS - MUTUAL ANGACO
   JavaScript para la página de contacto
   ======================================== */

// ========================================
// VALIDACIÓN DEL FORMULARIO
// ========================================
class ContactFormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.init();
    }

    init() {
        if (!this.form) return;

        // Validación en tiempo real
        this.form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('input', () => this.clearError(field.id));
        });

        // Envío del formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Contador de caracteres
        this.initCharCounter();
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Limpiar error previo
        this.clearError(field.id);

        // Validaciones específicas
        switch(fieldName) {
            case 'nombre':
                if (!value) {
                    errorMessage = 'El nombre es obligatorio';
                    isValid = false;
                } else if (value.length < 3) {
                    errorMessage = 'El nombre debe tener al menos 3 caracteres';
                    isValid = false;
                } else if (!/^[a-záéíóúñ\s]+$/i.test(value)) {
                    errorMessage = 'El nombre solo puede contener letras';
                    isValid = false;
                }
                break;

            case 'telefono':
                if (!value) {
                    errorMessage = 'El teléfono es obligatorio';
                    isValid = false;
                } else if (!/^[0-9\s\-\+\(\)]+$/.test(value)) {
                    errorMessage = 'Formato de teléfono inválido';
                    isValid = false;
                }
                break;

            case 'email':
                if (!value) {
                    errorMessage = 'El email es obligatorio';
                    isValid = false;
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    errorMessage = 'Formato de email inválido';
                    isValid = false;
                }
                break;

            case 'asunto':
                if (!value) {
                    errorMessage = 'Debes seleccionar un asunto';
                    isValid = false;
                }
                break;

            case 'mensaje':
                if (!value) {
                    errorMessage = 'El mensaje es obligatorio';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showError(field.id, errorMessage);
        }

        return isValid;
    }

    validateForm() {
        let isValid = true;
        
        // Validar todos los campos requeridos
        this.form.querySelectorAll('[required]').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        // Validar checkbox de términos
        const terminos = document.getElementById('aceptaTerminos');
        if (!terminos.checked) {
            this.showError('terminos', 'Debes aceptar la política de privacidad');
            isValid = false;
        }

        return isValid;
    }

    showError(fieldId, message) {
        const errorElement = document.getElementById(`error-${fieldId}`);
        const field = document.getElementById(fieldId);
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        if (field) {
            field.style.borderColor = '#e74c3c';
        }
    }

    clearError(fieldId) {
        const errorElement = document.getElementById(`error-${fieldId}`);
        const field = document.getElementById(fieldId);
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        
        if (field) {
            field.style.borderColor = '#e0e0e0';
        }
    }

    initCharCounter() {
        const mensaje = document.getElementById('mensaje');
        const charCount = document.getElementById('charCount');
        
        if (mensaje && charCount) {
            mensaje.addEventListener('input', () => {
                const count = mensaje.value.length;
                charCount.textContent = count;
                
                if (count > 900) {
                    charCount.style.color = '#e74c3c';
                } else {
                    charCount.style.color = '#999';
                }
            });
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Validar formulario
        if (!this.validateForm()) {
            this.showFormMessage('Por favor corregí los errores del formulario', 'error');
            return;
        }

        // Deshabilitar botón de envío
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // Preparar datos
        const formData = new FormData(this.form);

        try {
            // Enviar formulario
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                this.showFormMessage(result.message || '¡Tu consulta fue enviada con éxito! Te responderemos a la brevedad.', 'success');
                this.form.reset();
                document.getElementById('charCount').textContent = '0';
                
                // Scroll al mensaje
                document.getElementById('formMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                this.showFormMessage(result.message || 'Hubo un error al enviar tu consulta. Por favor intentá nuevamente.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            this.showFormMessage('Error de conexión. Por favor verificá tu internet e intentá nuevamente.', 'error');
        } finally {
            // Rehabilitar botón
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Consulta';
        }
    }

    showFormMessage(message, type) {
        const messageElement = document.getElementById('formMessage');
        
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.className = `form-message ${type}`;
            messageElement.style.display = 'flex';

            // Ocultar mensaje después de 10 segundos
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 10000);
        }
    }
}

// ========================================
// ANIMACIONES DE ENTRADA
// ========================================
function animateOnScroll() {
    const cards = document.querySelectorAll('.info-card, .medio-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// ========================================
// VALIDACIÓN DE TELÉFONO EN TIEMPO REAL
// ========================================
function formatPhoneNumber() {
    const phoneInput = document.getElementById('telefono');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            // Formato: XXX XXX-XXXX
            if (value.length > 3 && value.length <= 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3);
            } else if (value.length > 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
            
            e.target.value = value;
        });
    }
}

// ========================================
// SMOOTH SCROLL PARA ENLACES
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando página de Contacto');
    
    // Inicializar validador del formulario
    new ContactFormValidator('contactForm');
    
    // Inicializar otras funcionalidades
    animateOnScroll();
    formatPhoneNumber();
    initSmoothScroll();
    
    console.log('✅ Página de Contacto cargada correctamente');
});

// ========================================
// EXPORTAR FUNCIONES ÚTILES
// ========================================
window.contactUtils = {
    validator: ContactFormValidator,
    formatPhoneNumber
};