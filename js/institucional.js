/* ========================================
   INSTITUCIONAL.JS - MUTUAL ANGACO
   JavaScript para la página institucional
   ======================================== */

// ========================================
// ANIMACIÓN DE CONTADORES
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.numero');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60 fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('es-AR');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('es-AR');
            }
        };
        
        // Observador para iniciar la animación cuando sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// ========================================
// ANIMACIÓN DE TIMELINE
// ======================================== 
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// ========================================
// ANIMACIÓN DE TARJETAS DE EQUIPO
// ========================================
function animateTeamCards() {
    const cards = document.querySelectorAll('.equipo-card');
    
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
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// ========================================
// ANIMACIÓN DE TARJETAS MVV
// ========================================
function animateMVVCards() {
    const cards = document.querySelectorAll('.mvv-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
}

// ========================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
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
// PARALLAX EFFECT EN HERO
// ========================================
function initParallax() {
    const hero = document.querySelector('.institucional-hero');
    
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
}

// ========================================
// LAZY LOADING DE IMÁGENES
// ========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// ANIMACIÓN DE VALORES
// ========================================
function animateValores() {
    const valores = document.querySelectorAll('.valor-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg)';
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    valores.forEach(valor => {
        valor.style.opacity = '0';
        valor.style.transform = 'translateY(20px) rotate(-5deg)';
        valor.style.transition = 'all 0.5s ease-out';
        observer.observe(valor);
    });
}

// ========================================
// EFECTO HOVER EN IMÁGENES
// ========================================
function initImageEffects() {
    const images = document.querySelectorAll('.historia-image, .equipo-image');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ========================================
// STATS COUNTER CON ANIMACIÓN MEJORADA
// ========================================
function enhancedCounterAnimation() {
    const counters = document.querySelectorAll('.numero');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2500;
                    const start = performance.now();
                    
                    function animate(currentTime) {
                        const elapsed = currentTime - start;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out cubic
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);
                        
                        counter.textContent = current.toLocaleString('es-AR');
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            counter.textContent = target.toLocaleString('es-AR');
                        }
                    }
                    
                    requestAnimationFrame(animate);
                });
            }
        });
    }, { threshold: 0.3 });
    
    const numerosSection = document.querySelector('.numeros-section');
    if (numerosSection) {
        observer.observe(numerosSection);
    }
}

// ========================================
// TIMELINE PROGRESS INDICATOR
// ========================================
function initTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (!timeline || timelineItems.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
            const scrollProgress = (windowHeight - timelineRect.top) / (timelineRect.height + windowHeight);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Actualizar línea de progreso si existe
            const progressLine = timeline.querySelector('.timeline-progress');
            if (progressLine) {
                progressLine.style.height = `${clampedProgress * 100}%`;
            }
        }
    });
}

// ========================================
// PRINT STYLES
// ========================================
function preparePrint() {
    window.addEventListener('beforeprint', () => {
        // Expandir todos los elementos colapsados si los hay
        document.querySelectorAll('.collapsed').forEach(el => {
            el.classList.remove('collapsed');
        });
    });
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================
function enhanceAccessibility() {
    // Agregar indicadores de foco visibles
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '3px solid #28C4D8';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Navegación por teclado mejorada
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
function optimizePerformance() {
    // Detectar dispositivos con capacidad reducida
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Deshabilitar animaciones complejas
        document.body.classList.add('reduce-motion');
        
        const style = document.createElement('style');
        style.textContent = `
            .reduce-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando página Institucional');
    
    // Inicializar todas las funcionalidades
    animateCounters();
    enhancedCounterAnimation();
    animateTimeline();
    animateTeamCards();
    animateMVVCards();
    animateValores();
    initSmoothScroll();
    initParallax();
    initLazyLoading();
    initImageEffects();
    initTimelineProgress();
    preparePrint();
    enhanceAccessibility();
    optimizePerformance();
    
    console.log('✅ Página Institucional cargada correctamente');
});

// ========================================
// EXPORTAR FUNCIONES ÚTILES
// ========================================
window.institucionalUtils = {
    animateCounters,
    animateTimeline,
    animateTeamCards
};