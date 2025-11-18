// ========================================
// JAVASCRIPT - PÁGINA DE SERVICIOS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAccordion();
    handleServiceNavigation();
    initializeServiceAnimations();
});

// ========================================
// SISTEMA DE ACORDEÓN
// ========================================
function initializeAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetCollapse = document.querySelector(targetId);
            const allCollapses = document.querySelectorAll('.accordion-collapse');
            const allButtons = document.querySelectorAll('.accordion-button');
            
            // Cerrar todos los otros acordeones
            allCollapses.forEach(collapse => {
                if (collapse !== targetCollapse && collapse.classList.contains('show')) {
                    collapse.classList.remove('show');
                }
            });
            
            // Actualizar estado de todos los botones
            allButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.add('collapsed');
                }
            });
            
            // Toggle del acordeón actual
            if (targetCollapse.classList.contains('show')) {
                targetCollapse.classList.remove('show');
                this.classList.add('collapsed');
            } else {
                targetCollapse.classList.add('show');
                this.classList.remove('collapsed');
                
                // Smooth scroll al acordeón abierto
                setTimeout(() => {
                    const accordionItem = this.closest('.accordion-item');
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const scrollPosition = accordionItem.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
            
            // Animar el ícono
            animateAccordionIcon(this);
        });
    });
}

// ========================================
// NAVEGACIÓN DESDE OTRAS PÁGINAS
// ========================================
function handleServiceNavigation() {
    // Verificar si hay un hash en la URL
    const hash = window.location.hash;
    
    if (hash) {
        const targetService = document.querySelector(hash);
        
        if (targetService) {
            // Esperar a que la página se cargue completamente
            setTimeout(() => {
                const button = targetService.querySelector('.accordion-button');
                const collapse = document.querySelector(button.getAttribute('data-target'));
                
                // Cerrar todos los acordeones
                document.querySelectorAll('.accordion-collapse').forEach(c => {
                    c.classList.remove('show');
                });
                
                document.querySelectorAll('.accordion-button').forEach(b => {
                    b.classList.add('collapsed');
                });
                
                // Abrir el acordeón específico
                collapse.classList.add('show');
                button.classList.remove('collapsed');
                
                // Scroll al servicio
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const scrollPosition = targetService.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
                
                // Resaltar el servicio
                highlightService(targetService.closest('.accordion-item'));
            }, 500);
        }
    }
}

// ========================================
// ANIMACIONES DE SERVICIOS
// ========================================
function initializeServiceAnimations() {
    // Animar cards al hacer hover
    const serviceCards = document.querySelectorAll('.type-card, .subsidy-card, .insurance-card, .destination-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animación de números/precios
    animatePrices();
}

// ========================================
// ANIMACIÓN DE ÍCONO DEL ACORDEÓN
// ========================================
function animateAccordionIcon(button) {
    const icon = button.querySelector('.accordion-icon');
    
    if (icon) {
        icon.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            icon.style.animation = '';
        }, 500);
    }
}

// ========================================
// RESALTAR SERVICIO
// ========================================
function highlightService(serviceItem) {
    serviceItem.style.border = '2px solid var(--color-primary)';
    serviceItem.style.boxShadow = '0 0 20px rgba(40, 196, 216, 0.3)';
    
    setTimeout(() => {
        serviceItem.style.transition = 'all 0.3s ease';
        serviceItem.style.border = '';
        serviceItem.style.boxShadow = '';
    }, 2000);
}

// ========================================
// ANIMACIÓN DE PRECIOS
// ========================================
function animatePrices() {
    const prices = document.querySelectorAll('.price, .destination-price');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const priceElement = entry.target;
                const finalPrice = priceElement.textContent;
                
                // Extraer el número del precio
                const priceMatch = finalPrice.match(/[\d,]+/);
                if (priceMatch) {
                    const priceNumber = parseInt(priceMatch[0].replace(/,/g, ''));
                    
                    // Animar desde 0 hasta el precio final
                    animateValue(priceElement, 0, priceNumber, 1500);
                }
                
                observer.unobserve(priceElement);
            }
        });
    }, {
        threshold: 0.5
    });
    
    prices.forEach(price => {
        observer.observe(price);
    });
}

// ========================================
// ANIMAR VALOR NUMÉRICO
// ========================================
function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    const prefix = element.textContent.match(/[^\d,]+/)[0] || '';
    const suffix = element.textContent.match(/\/mes/)?.[0] || '';
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Función de easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const current = Math.floor(easeOutQuart * range + start);
        element.textContent = prefix + current.toLocaleString('es-AR') + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = prefix + end.toLocaleString('es-AR') + suffix;
            
            // Efecto de brillo al terminar
            element.style.color = 'var(--color-secondary)';
            setTimeout(() => {
                element.style.color = '';
            }, 300);
        }
    }
    
    requestAnimationFrame(updateValue);
}

// ========================================
// FORMULARIO DE SOLICITUD RÁPIDA
// ========================================
function initializeQuickForm() {
    // Esta función se puede expandir para manejar formularios
    // modales de solicitud rápida para cada servicio
    const serviceButtons = document.querySelectorAll('.service-cta .btn-primary');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const serviceType = this.closest('.accordion-item').querySelector('.accordion-title span').textContent;
            
            // Guardar el tipo de servicio en localStorage para pre-llenar el formulario
            localStorage.setItem('selectedService', serviceType);
        });
    });
}

// ========================================
// CALCULADORA DE PRÉSTAMOS (PLACEHOLDER)
// ========================================
function loanCalculator(amount, months, rate) {
    // Cálculo simple de cuota
    const monthlyRate = rate / 100 / 12;
    const cuota = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                  (Math.pow(1 + monthlyRate, months) - 1);
    
    return {
        cuota: cuota.toFixed(2),
        total: (cuota * months).toFixed(2),
        interes: ((cuota * months) - amount).toFixed(2)
    };
}

// ========================================
// VALIDACIÓN DE DOCUMENTACIÓN
// ========================================
function checkRequiredDocuments(serviceType) {
    const documents = {
        prestamos: ['DNI', 'Recibo de sueldo', 'Servicio', 'CBU'],
        subsidios: ['DNI', 'Documentación específica del subsidio'],
        seguros: ['DNI', 'Formulario de adhesión'],
        turismo: ['DNI', 'Seña del 30%']
    };
    
    return documents[serviceType] || [];
}

// ========================================
// TOOLTIPS INFORMATIVOS
// ========================================
function initializeTooltips() {
    const infoIcons = document.querySelectorAll('.fa-info-circle');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = 'Información importante';
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 30) + 'px';
            
            setTimeout(() => {
                tooltip.classList.add('show');
            }, 10);
        });
        
        icon.addEventListener('mouseleave', function() {
            const tooltips = document.querySelectorAll('.custom-tooltip');
            tooltips.forEach(tooltip => tooltip.remove());
        });
    });
}

// ========================================
// INICIALIZACIÓN
// ========================================
initializeQuickForm();
initializeTooltips();

// ========================================
// EXPORTAR FUNCIONES ÚTILES
// ========================================
window.serviceUtils = {
    loanCalculator,
    checkRequiredDocuments,
    highlightService
};