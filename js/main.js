// ========================================
// JAVASCRIPT PRINCIPAL - MUTUAL ANGACO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Cargar header y footer
    loadComponent('header-container', 'components/header.html');
    loadComponent('footer-container', 'components/footer.html');
    
    // Inicializar funcionalidades después de cargar componentes
    setTimeout(() => {
        initializeNavigation();
        initializeSearch();
        initializeAccessibility();
        initializeNewsSection();
        setActiveNavLink();
    }, 500);
});

// ========================================
// CARGA DE COMPONENTES
// ========================================
function loadComponent(containerId, componentPath) {
    const container = document.getElementById(containerId);
    if (container) {
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading component:', error);
                container.innerHTML = '<p>Error al cargar el componente</p>';
            });
    }
}

// ========================================
// NAVEGACIÓN
// ========================================
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Cerrar menú móvil al hacer click en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// Establecer enlace activo en navegación
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SISTEMA DE BÚSQUEDA
// ========================================
function initializeSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.getElementById('close-search');
    const resultsContainer = document.getElementById('results-container');
    
    // Datos de búsqueda simulados
    const searchData = [
        {
            title: 'Préstamos Personales',
            description: 'Accedé a préstamos con las mejores tasas del mercado',
            url: 'servicios.html#prestamos',
            type: 'Servicio'
        },
        {
            title: 'Subsidios por Nacimiento',
            description: 'Apoyo económico para los momentos más importantes',
            url: 'servicios.html#subsidios',
            type: 'Servicio'
        },
        {
            title: 'Seguros de Vida',
            description: 'Protegé a tu familia con nuestros seguros',
            url: 'servicios.html#seguros',
            type: 'Servicio'
        },
        {
            title: 'Turismo Nacional',
            description: 'Viajes y excursiones para asociados',
            url: 'servicios.html#turismo',
            type: 'Servicio'
        },
        {
            title: 'Requisitos para Asociarse',
            description: 'Conocé los requisitos para ser parte de la mutual',
            url: 'contacto.html',
            type: 'Información'
        },
        {
            title: 'Horarios de Atención',
            description: 'Lunes a Viernes de 8:00 a 14:00',
            url: 'contacto.html',
            type: 'Información'
        },
        {
            title: 'Nueva Sucursal en Pocito',
            description: 'Inauguramos nueva sucursal para estar más cerca',
            url: 'noticias.html',
            type: 'Noticia'
        },
        {
            title: 'Beneficios Especiales 2024',
            description: 'Nuevos beneficios para nuestros asociados',
            url: 'noticias.html',
            type: 'Noticia'
        }
    ];
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (closeSearch && searchResults) {
        closeSearch.addEventListener('click', () => {
            searchResults.classList.remove('active');
            if (searchInput) searchInput.value = '';
        });
    }
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            alert('Por favor, ingrese al menos 2 caracteres para buscar');
            return;
        }
        
        const results = searchData.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.description.toLowerCase().includes(query);
        });
        
        displayResults(results, query);
    }
    
    function displayResults(results, query) {
        if (!resultsContainer || !searchResults) return;
        
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No se encontraron resultados para "<strong>${query}</strong>"</p>
                    <p>Intente con otros términos de búsqueda</p>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <p class="results-count">Se encontraron ${results.length} resultado(s) para "<strong>${query}</strong>"</p>
            `;
            
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <span class="result-type">${result.type}</span>
                    <h4>${highlightText(result.title, query)}</h4>
                    <p>${highlightText(result.description, query)}</p>
                    <a href="${result.url}">Ver más →</a>
                `;
                resultsContainer.appendChild(resultItem);
            });
        }
        
        searchResults.classList.add('active');
    }
    
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
}

// ========================================
// ACCESIBILIDAD
// ========================================
function initializeAccessibility() {
    const contrastToggle = document.getElementById('contrast-toggle');
    
    // Recuperar preferencias guardadas
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    if (contrastToggle) {
        contrastToggle.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            const isHighContrast = document.body.classList.contains('high-contrast');
            localStorage.setItem('highContrast', isHighContrast);
            
            // Feedback visual
            contrastToggle.style.animation = 'rotate 0.5s ease';
            setTimeout(() => {
                contrastToggle.style.animation = '';
            }, 500);
        });
    }
}

// ========================================
// SECCIÓN DE NOTICIAS
// ========================================
function initializeNewsSection() {
    loadLatestNews();
}

async function loadLatestNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    
    try {
        // Simular carga de noticias desde un archivo JSON
        const newsData = [
            {
                id: 1,
                title: 'Nueva Línea de Préstamos Especiales',
                date: '15 de Marzo, 2024',
                excerpt: 'Lanzamos una nueva línea de préstamos con tasas preferenciales para jubilados y pensionados.',
                image: 'images/news-1.jpg',
                url: 'noticia-detalle.html?id=1'
            },
            {
                id: 2,
                title: 'Apertura de Sucursal en Pocito',
                date: '10 de Marzo, 2024',
                excerpt: 'Inauguramos nuestra tercera sucursal en el departamento de Pocito para estar más cerca de vos.',
                image: 'images/news-2.jpg',
                url: 'noticia-detalle.html?id=2'
            },
            {
                id: 3,
                title: 'Convenio con Centros Turísticos',
                date: '5 de Marzo, 2024',
                excerpt: 'Firmamos convenios con importantes centros turísticos para ofrecer descuentos exclusivos.',
                image: 'images/news-3.jpg',
                url: 'noticia-detalle.html?id=3'
            }
        ];
        
        // Mostrar solo las primeras 3 noticias en el home
        const newsToShow = newsData.slice(0, 3);
        
        newsToShow.forEach((news, index) => {
            const newsCard = createNewsCard(news);
            newsCard.setAttribute('data-aos', 'fade-up');
            newsCard.setAttribute('data-aos-delay', (index * 100).toString());
            newsContainer.appendChild(newsCard);
        });
        
    } catch (error) {
        console.error('Error loading news:', error);
        newsContainer.innerHTML = '<p>Error al cargar las noticias</p>';
    }
}

function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <img src="${news.image}" alt="${news.title}" class="news-image" onerror="this.src='images/placeholder.jpg'">
        <div class="news-content">
            <span class="news-date">${news.date}</span>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-excerpt">${news.excerpt}</p>
            <a href="${news.url}" class="news-link">
                Leer más <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    return card;
}

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// ========================================
// UTILIDADES
// ========================================

// Función para formatear fechas
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
}

// Función para validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// LAZY LOADING DE IMÁGENES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}