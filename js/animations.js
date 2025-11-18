// ========================================
// ANIMACIONES - MUTUAL ANGACO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeCounters();
    initializeParallax();
    initializeScrollEffects();
});

// ========================================
// CONTADORES ANIMADOS
// ========================================
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    // Configuración del Observador:
    // threshold: 0.5 significa "ejecutar cuando el 50% del elemento sea visible"
    const options = {
        threshold: 0.5 
    };

    // Esta función se ejecuta automáticamente cuando el elemento entra en pantalla
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (es visible) y no se ha iniciado
            if (entry.isIntersecting && !entry.target.classList.contains('iniciado')) {
                
                const counter = entry.target;
                counter.classList.add('iniciado'); // Marcar como iniciado para que no se repita
                startCounting(counter);
                
                // Dejar de observar este elemento (ahorra recursos)
                observer.unobserve(counter); 
            }
        });
    }, options);

    // Le decimos al observador que vigile cada contador
    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Función de conteo (Lógica matemática)
    function startCounting(counter) {
        const target = +counter.getAttribute('data-target'); // El + convierte a número rápido
        const duration = 2000; // Duración en milisegundos
        const frameDuration = 1000 / 60; // 60 FPS
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString('es-AR');
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString('es-AR');
                
                // Tu efecto visual final
                counter.style.transform = 'scale(1.2)';
                counter.style.transition = 'transform 0.2s ease';
                setTimeout(() => counter.style.transform = 'scale(1)', 200);
            }
        };
        
        updateCounter();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeCounters);

// ========================================
// EFECTO PARALLAX
// ========================================
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ========================================
// EFECTOS AL SCROLL
// ========================================
function initializeScrollEffects() {
    // Navbar cambio de estilo al scroll
    const navbar = document.querySelector('.main-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navbar) {
            // Añadir sombra cuando se hace scroll
            if (scrollTop > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
            
            // Ocultar/mostrar navbar según dirección del scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                // Scroll hacia abajo
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll hacia arriba
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Revelar elementos al hacer scroll
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Verificar al cargar
    
    // Animación de noticias al aparecer
    const observeNewsCards = () => {
        const newsCards = document.querySelectorAll('.news-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        newsCards.forEach(card => {
            observer.observe(card);
        });
    };
    
    // Esperar a que se carguen las noticias
    setTimeout(observeNewsCards, 1000);
}

// ========================================
// EFECTOS DE HOVER AVANZADOS
// ========================================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            card.style.transform = `
                perspective(1000px)
                rotateY(${deltaX * 5}deg)
                rotateX(${-deltaY * 5}deg)
                translateZ(10px)
            `;
        }
    });
});

// Resetear transformación cuando el mouse sale
document.addEventListener('mouseleave', (e) => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.style.transform = '';
    });
});

// ========================================
// ANIMACIÓN DE TEXTO TIPO MÁQUINA DE ESCRIBIR
// ========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto a elementos con clase .typewriter
const typewriterElements = document.querySelectorAll('.typewriter');
typewriterElements.forEach(element => {
    const text = element.textContent;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(element, text);
                observer.unobserve(element);
            }
        });
    });
    observer.observe(element);
});

// ========================================
// ANIMACIÓN DE ONDAS EN BOTONES
// ========================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ========================================
// ANIMACIÓN DE CARGA PARA IMÁGENES
// ========================================
function addImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Crear placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.style.width = img.width + 'px';
        placeholder.style.height = img.height + 'px';
        
        // Insertar placeholder antes de la imagen
        img.parentNode.insertBefore(placeholder, img);
        img.style.opacity = '0';
        
        // Cuando la imagen se carga
        img.addEventListener('load', function() {
            setTimeout(() => {
                placeholder.remove();
                img.style.opacity = '1';
                img.style.transition = 'opacity 0.5s ease';
            }, 100);
        });
        
        // Si la imagen ya estaba cargada
        if (img.complete) {
            placeholder.remove();
            img.style.opacity = '1';
        }
    });
}

// ========================================
// ANIMACIÓN SUAVE DE SCROLL PARA ANCLAS
// ========================================
function smoothScrollToAnchor() {
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo procesar si es un ancla interna
            if (href.startsWith('#') || href.includes('#')) {
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Añadir efecto de resaltado
                    targetElement.style.animation = 'pulse 1s ease';
                    setTimeout(() => {
                        targetElement.style.animation = '';
                    }, 1000);
                }
            }
        });
    });
}

// Inicializar animación de scroll suave
smoothScrollToAnchor();

// ========================================
// DETECCIÓN DE INACTIVIDAD
// ========================================
let inactivityTimer;
const inactivityTime = 60000; // 1 minuto

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    
    inactivityTimer = setTimeout(() => {
        // Mostrar mensaje o realizar alguna acción
        console.log('Usuario inactivo por 1 minuto');
    }, inactivityTime);
}

// Eventos que resetean el timer
['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer, true);
});

// Iniciar timer
resetInactivityTimer();

// ========================================
// PRECARGA DE IMÁGENES CRÍTICAS
// ========================================
function preloadImages() {
    const imagesToPreload = [
        'images/banner-home.jpg',
        'images/logo-angaco.png',
        'images/logo-angaco-white.png'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Precargar imágenes importantes
preloadImages();

// ========================================
// ANIMACIÓN DE PROGRESO AL CARGAR PÁGINA
// ========================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 500);
    }
});