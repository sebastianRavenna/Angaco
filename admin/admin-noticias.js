/* ========================================
   ADMIN-NOTICIAS.JS - MUTUAL ANGACO
   JavaScript para el panel de administración
   ======================================== */

let noticias = [];

// ========================================
// CARGAR NOTICIAS
// ========================================
async function cargarNoticias() {
    try {
        const response = await fetch('../php/noticias-json.php?action=get');
        const data = await response.json();
        
        if (data.success) {
            noticias = data.noticias;
            mostrarNoticias();
        } else {
            mostrarAlerta('Error al cargar noticias: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarAlerta('Error de conexión al cargar noticias', 'error');
    } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('noticiasGrid').style.display = 'grid';
    }
}

// ========================================
// MOSTRAR NOTICIAS EN EL GRID
// ========================================
function mostrarNoticias() {
    const grid = document.getElementById('noticiasGrid');
    
    grid.innerHTML = noticias.map(noticia => `
        <div class="noticia-card">
            <div class="noticia-imagen ${!noticia.imagen ? 'sin-imagen' : ''}">
                ${noticia.imagen ? 
                    `<img src="../${noticia.imagen}" alt="${noticia.titulo}">` :
                    '<i class="fas fa-image"></i>'
                }
                ${noticia.destacada ? 
                    '<div class="badge-destacada"><i class="fas fa-star"></i> Destacada</div>' : 
                    ''
                }
            </div>
            <div class="noticia-content">
                <div class="noticia-header">
                    <div class="noticia-numero">${noticia.id}</div>
                    <div class="noticia-categoria">${noticia.categoria}</div>
                </div>
                
                <h3 class="noticia-titulo">${noticia.titulo}</h3>
                <p class="noticia-resumen">${noticia.resumen}</p>
                
                <div class="noticia-meta">
                    <span><i class="fas fa-calendar"></i> ${formatearFecha(noticia.fecha)}</span>
                    <span><i class="fas fa-user"></i> ${noticia.autor}</span>
                </div>
                
                <div class="noticia-actions">
                    <button class="btn btn-small btn-editar" onclick="editarNoticia(${noticia.id})">
                        <i class="fas fa-edit"></i>
                        Editar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// EDITAR NOTICIA
// ========================================
function editarNoticia(id) {
    const noticia = noticias.find(n => n.id === id);
    
    if (!noticia) return;
    
    // Llenar el formulario
    document.getElementById('noticiaId').value = noticia.id;
    document.getElementById('titulo').value = noticia.titulo;
    document.getElementById('resumen').value = noticia.resumen;
    document.getElementById('contenido').value = noticia.contenido;
    document.getElementById('categoria').value = noticia.categoria;
    document.getElementById('fecha').value = noticia.fecha;
    document.getElementById('destacada').checked = noticia.destacada;
    
    // Actualizar contadores
    actualizarContador('titulo');
    actualizarContador('resumen');
    actualizarContador('contenido');
    
    // Mostrar preview de imagen si existe
    if (noticia.imagen) {
        document.getElementById('imagenPreview').innerHTML = 
            `<img src="../${noticia.imagen}" alt="Preview">`;
    } else {
        document.getElementById('imagenPreview').innerHTML = '';
    }
    
    // Abrir modal
    document.getElementById('editModal').classList.add('active');
}

// ========================================
// CERRAR MODAL
// ========================================
function cerrarModal() {
    document.getElementById('editModal').classList.remove('active');
    document.getElementById('editForm').reset();
    document.getElementById('imagenPreview').innerHTML = '';
}

// ========================================
// GUARDAR NOTICIA
// ========================================
document.getElementById('editForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('action', 'update');
    formData.append('id', document.getElementById('noticiaId').value);
    formData.append('titulo', document.getElementById('titulo').value);
    formData.append('resumen', document.getElementById('resumen').value);
    formData.append('contenido', document.getElementById('contenido').value);
    formData.append('categoria', document.getElementById('categoria').value);
    formData.append('fecha', document.getElementById('fecha').value);
    formData.append('destacada', document.getElementById('destacada').checked ? '1' : '0');
    
    // Agregar imagen si se seleccionó una nueva
    const imagenInput = document.getElementById('imagen');
    if (imagenInput.files.length > 0) {
        formData.append('imagen', imagenInput.files[0]);
    }
    
    try {
        const response = await fetch('../php/noticias-json.php', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            mostrarAlerta('Noticia actualizada correctamente', 'success');
            cerrarModal();
            await cargarNoticias();
        } else {
            mostrarAlerta('Error al guardar: ' + data.message, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        mostrarAlerta('Error de conexión al guardar', 'error');
    }
});

// ========================================
// PREVISUALIZAR IMAGEN
// ========================================
function previsualizarImagen(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Validar tamaño (máximo 2MB)
        if (file.size > 2 * 1024 * 1024) {
            mostrarAlerta('La imagen no puede pesar más de 2MB', 'error');
            event.target.value = '';
            return;
        }
        
        // Validar tipo
        if (!file.type.match('image.*')) {
            mostrarAlerta('Solo se permiten archivos de imagen', 'error');
            event.target.value = '';
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('imagenPreview').innerHTML = 
                `<img src="${e.target.result}" alt="Preview">`;
        };
        
        reader.readAsDataURL(file);
    }
}

// ========================================
// MOSTRAR ALERTAS
// ========================================
function mostrarAlerta(mensaje, tipo = 'success') {
    const container = document.getElementById('alertContainer');
    const icon = tipo === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${tipo}`;
    alert.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${mensaje}</span>
    `;
    
    container.innerHTML = '';
    container.appendChild(alert);
    
    // Scroll al alert
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// ========================================
// FORMATEAR FECHA
// ========================================
function formatearFecha(fecha) {
    const date = new Date(fecha + 'T00:00:00');
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-AR', opciones);
}

// ========================================
// CONTADORES DE CARACTERES
// ========================================
function actualizarContador(campo) {
    const input = document.getElementById(campo);
    const counter = document.getElementById(campo + 'Count');
    
    if (input && counter) {
        counter.textContent = input.value.length;
        
        // Cambiar color si está cerca del límite
        const maxLength = input.maxLength;
        if (maxLength > 0 && input.value.length > maxLength * 0.9) {
            counter.style.color = '#e74c3c';
        } else {
            counter.style.color = '#999';
        }
    }
}

// Agregar listeners a los campos con contador
document.getElementById('titulo').addEventListener('input', () => actualizarContador('titulo'));
document.getElementById('resumen').addEventListener('input', () => actualizarContador('resumen'));
document.getElementById('contenido').addEventListener('input', () => actualizarContador('contenido'));

// ========================================
// CERRAR MODAL AL HACER CLICK FUERA
// ========================================
document.getElementById('editModal').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});

// ========================================
// CERRAR MODAL CON ESC
// ========================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando panel de administración');
    cargarNoticias();
});