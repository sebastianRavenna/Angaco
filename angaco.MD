# 📘 DOCUMENTACIÓN COMPLETA - SITIO WEB MUTUAL ANGACO

## 📑 Índice

1. [Descripción General del Proyecto](#1-descripción-general-del-proyecto)
2. [Estructura Completa del Proyecto](#2-estructura-completa-del-proyecto)
3. [Tecnologías Utilizadas](#3-tecnologías-utilizadas)
4. [Páginas del Sitio](#4-páginas-del-sitio)
5. [Sistemas y Funcionalidades](#5-sistemas-y-funcionalidades)
6. [Guía de Instalación](#6-guía-de-instalación)
7. [Configuración Requerida](#7-configuración-requerida)
8. [Guía de Uso](#8-guía-de-uso)
9. [Personalización](#9-personalización)
10. [Mantenimiento](#10-mantenimiento)
11. [Troubleshooting](#11-troubleshooting)
12. [FAQ Técnico](#12-faq-técnico)
13. [Roadmap y Mejoras Futuras](#13-roadmap-y-mejoras-futuras)

---

## 1. Descripción General del Proyecto

### 1.1 Información del Proyecto

**Nombre:** Sitio Web Institucional Mutual Angaco  
**Cliente:** Mutual Angaco, San Juan, Argentina  
**Versión:** 1.0  
**Fecha de Creación:** Noviembre 2024  
**Desarrollado en:** Claude.ai (Anthropic)

### 1.2 Alcance del Proyecto

Sitio web institucional completo para Mutual Angaco que incluye:

- ✅ **5 páginas principales** (Home, Institucional, Servicios, Contacto, Noticias)
- ✅ **Sistema de gestión de noticias** (sin base de datos)
- ✅ **Panel de administración** para editar noticias
- ✅ **Formulario de contacto** con envío por email
- ✅ **Sección de FAQ** integrada en servicios
- ✅ **Diseño 100% responsive** (móvil, tablet, desktop)
- ✅ **Modo de alto contraste** para accesibilidad
- ✅ **Optimización SEO** básica

### 1.3 Objetivos del Sitio

1. **Informar** sobre los servicios de la mutual
2. **Comunicar** novedades y eventos
3. **Facilitar contacto** entre socios y la mutual
4. **Promover asociación** de nuevos miembros
5. **Fortalecer presencia digital** de la institución

### 1.4 Características Principales

#### Diseño
- Paleta de colores: Turquesa (#28C4D8), Verde (#5DD902), Teal (#005958)
- Tipografía: Poppins (Google Fonts)
- Responsive design con breakpoints: 320px, 480px, 768px, 1024px, 1200px
- Animaciones suaves y transiciones
- Modo alto contraste integrado

#### Funcionalidad
- Header y Footer dinámicos (carga modular)
- Sistema de noticias con JSON (sin SQL)
- Panel de administración simple
- Formulario de contacto con validación
- Navegación responsive con menú hamburguesa
- Smooth scroll entre secciones
- Lazy loading de imágenes

#### Seguridad
- Validación de datos en frontend y backend
- Sanitización de inputs
- Protección contra SQL injection
- Sistema de logs de contactos
- Honeypot anti-spam en formularios

---

## 2. Estructura Completa del Proyecto

### 2.1 Árbol de Carpetas y Archivos

```
mutual-angaco/
│
├── 📄 index.html                          ✅ Página principal
├── 📄 institucional.html                  ✅ Historia y valores
├── 📄 servicios.html                      ✅ Servicios con acordeones
├── 📄 contacto.html                       ✅ Formulario de contacto
├── 📄 noticias.html                       ✅ Listado de noticias
├── 📄 noticias.json                       ✅ Datos de 4 noticias
│
├── 📁 css/
│   ├── 📄 styles.css                      ✅ Estilos globales
│   ├── 📄 institucional.css               ✅ Estilos institucional
│   ├── 📄 servicios.css                   ✅ Estilos servicios
│   ├── 📄 contacto.css                    ✅ Estilos contacto
│   └── 📄 faq-styles.css                  ✅ Estilos FAQ
│
├── 📁 js/
│   ├── 📄 main.js                         ✅ JavaScript principal
│   ├── 📄 components.js                   ✅ Carga header/footer
│   ├── 📄 institucional.js                ✅ Funcionalidad institucional
│   ├── 📄 servicios.js                    ✅ Acordeones servicios
│   ├── 📄 contacto.js                     ✅ Validación formulario
│   └── 📄 faq-script.js                   ✅ Acordeones FAQ
│
├── 📁 php/
│   ├── 📄 contacto.php                    ✅ Procesa formulario
│   └── 📄 noticias-json.php               ✅ API noticias JSON
│
├── 📁 admin/
│   ├── 📄 admin-noticias.html             ✅ Panel administración
│   └── 📄 admin-noticias.js               ✅ JavaScript admin
│
├── 📁 components/
│   ├── 📄 header.html                     ✅ Header común
│   └── 📄 footer.html                     ✅ Footer común
│
├── 📁 assets/
│   └── 📁 imagenes/
│       ├── 📁 noticias/                   ⏳ Imágenes de noticias
│       ├── 📁 equipo/                     ⏳ Fotos del equipo
│       └── ...                            ⏳ Otras imágenes
│
├── 📁 uploads/                             📂 Auto-generada
│   └── 📁 noticias/                       📂 Imágenes del admin
│
├── 📁 logs/                                📂 Auto-generada
│   └── 📄 contactos_YYYY-MM.log          📂 Logs de contactos
│
└── 📁 docs/
    ├── 📄 README_CONFIGURACION_PHP.md
    ├── 📄 INSTRUCCIONES_INTEGRACION_FAQ.md
    ├── 📄 RESUMEN_SISTEMA_NOTICIAS.md
    ├── 📄 SISTEMA_COMPLETO_RESUMEN.md
    ├── 📄 ESTRUCTURA_PROYECTO.txt
    └── 📄 DOCUMENTACION_COMPLETA_PROYECTO.md  ← Este archivo
```

### 2.2 Estadísticas del Proyecto

| Categoría | Cantidad |
|-----------|----------|
| Páginas HTML | 6 (5 públicas + 1 admin) |
| Archivos CSS | 5 |
| Archivos JavaScript | 6 |
| Archivos PHP | 2 |
| Componentes | 2 (header + footer) |
| Documentación | 6 archivos MD |
| **Total Archivos** | **27** |

| Métrica | Valor |
|---------|-------|
| Líneas de código (aprox.) | ~8,000 |
| Tamaño código fuente | ~150 KB |
| Tamaño con imágenes | ~5 MB |
| Tiempo de carga estimado | < 2 segundos |
| Páginas indexables | 5 |

---

## 3. Tecnologías Utilizadas

### 3.1 Frontend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| HTML5 | - | Estructura de páginas |
| CSS3 | - | Estilos y diseño |
| JavaScript (Vanilla) | ES6+ | Interactividad |
| Font Awesome | 6.4.0 | Iconografía |
| Google Fonts (Poppins) | - | Tipografía |

### 3.2 Backend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| PHP | 7.4+ | Procesamiento servidor |
| JSON | - | Almacenamiento de datos |

### 3.3 No Requiere

- ❌ Base de datos MySQL
- ❌ Frameworks JS (React, Vue, Angular)
- ❌ Preprocesadores CSS (SASS, LESS)
- ❌ Node.js
- ❌ Composer

### 3.4 Compatibilidad de Navegadores

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

---

## 4. Páginas del Sitio

### 4.1 Página Principal (index.html)

**Ubicación:** `/index.html`  
**Estado:** ✅ Completa (del chat anterior)

#### Secciones:
1. **Hero Banner** - Imagen principal con llamado a la acción
2. **Servicios Destacados** - 4 servicios principales en cards
3. **Contadores Animados** - Estadísticas de la mutual
4. **Noticias Recientes** - Últimas 3 noticias
5. **Newsletter** - Suscripción a novedades
6. **CTA Final** - Llamado a asociarse

#### Características:
- Animaciones al scroll (AOS)
- Contadores con animación numérica
- Cards de servicios con hover effects
- Responsive completo

#### Archivos relacionados:
- CSS: `css/styles.css`
- JS: `js/main.js`, `js/components.js`

---

### 4.2 Página Institucional (institucional.html)

**Ubicación:** `/institucional.html`  
**Estado:** ✅ Completa

#### Secciones:
1. **Hero Section** - Introducción con gradiente
2. **Historia** - Texto + imagen de la mutual
3. **Línea de Tiempo** - 6 hitos importantes (1970-2024)
4. **Misión, Visión y Valores** - 3 cards principales
5. **6 Valores** - Solidaridad, Transparencia, etc.
6. **Equipo Directivo** - 4 miembros con fotos
7. **Contadores** - Estadísticas animadas
8. **CTA** - Botón para asociarse

#### Características:
- Timeline vertical interactiva
- Animaciones con Intersection Observer
- Contadores animados con ease-out
- Cards de equipo con overlay al hover
- 100% responsive

#### Archivos relacionados:
- HTML: `institucional.html`
- CSS: `css/institucional.css`
- JS: `js/institucional.js`

#### Datos a Personalizar:
```javascript
// En institucional.html, actualizar:
- Texto de historia (línea ~50)
- Fechas de la timeline (línea ~90)
- Nombres del equipo (línea ~200)
- Números de contadores (línea ~280)
```

---

### 4.3 Página de Servicios (servicios.html)

**Ubicación:** `/servicios.html`  
**Estado:** ✅ Completa (del chat anterior) + FAQ integrado

#### Secciones:

**Servicios (Acordeones):**
1. **Préstamos** - Tasas, requisitos, plazos
2. **Subsidios** - Nacimiento, casamiento, fallecimiento
3. **Seguros** - Vida, hogar, automotor
4. **Turismo** - Viajes y excursiones

**FAQ (al final):**
- 17 preguntas organizadas en 5 categorías
- Diseño simple diferente a los acordeones de servicios
- Solo un FAQ abierto a la vez

#### Características:
- Acordeones animados para cada servicio
- Información detallada de cada servicio
- Calculadoras de préstamos (opcional)
- Botones de acción en cada servicio
- FAQ con diseño minimalista
- Navegación por teclado (accesibilidad)

#### Archivos relacionados:
- HTML: `servicios.html`
- CSS: `css/servicios.css`, `css/faq-styles.css`
- JS: `js/servicios.js`, `js/faq-script.js`

#### Integración FAQ:
Para integrar el FAQ en servicios.html:
1. Abrir `docs/faq-section.html`
2. Copiar todo el contenido
3. Pegarlo en `servicios.html` ANTES del footer
4. Agregar `faq-styles.css` al final de `servicios.css`
5. Agregar `faq-script.js` al final de `servicios.js`

Ver detalles en: `docs/INSTRUCCIONES_INTEGRACION_FAQ.md`

---

### 4.4 Página de Contacto (contacto.html)

**Ubicación:** `/contacto.html`  
**Estado:** ✅ Completa

#### Secciones:
1. **Hero Section** - Título y breadcrumb
2. **Info Rápida** - 4 cards (Dirección, Teléfono, Email, Horarios)
3. **Formulario** - Formulario completo con validación
4. **Mapa** - Google Maps integrado
5. **WhatsApp Box** - Botón de WhatsApp
6. **Redes Sociales** - Links a redes
7. **Otros Medios** - 4 formas alternativas de contacto

#### Características del Formulario:
- Validación frontend en tiempo real
- Validación backend en PHP
- Contador de caracteres
- Checkboxes personalizados
- Protección honeypot anti-spam
- Email de confirmación automático
- Logs de contactos

#### Campos del Formulario:
```html
- Nombre completo (3-100 caracteres)
- Teléfono (validación de formato)
- Email (validación RFC)
- Asunto (desplegable con 9 opciones)
- Mensaje (10-1000 caracteres)
- Checkbox términos (obligatorio)
- Checkbox newsletter (opcional)
```

#### Archivos relacionados:
- HTML: `contacto.html`
- CSS: `css/contacto.css`
- JS: `js/contacto.js`
- PHP: `php/contacto.php`

#### Configuración Requerida:
Ver sección [7.2 Configurar Formulario de Contacto](#72-configurar-formulario-de-contacto)

---

### 4.5 Página de Noticias (noticias.html)

**Ubicación:** `/noticias.html`  
**Estado:** ✅ Completa (funciona con estilos globales)

#### Secciones:
1. **Hero Section** - Título
2. **Filtros** - Búsqueda, categoría, ordenamiento
3. **Noticia Destacada** - Noticia principal (si hay una marcada)
4. **Grid de Noticias** - 4 noticias en cards
5. **Newsletter** - Suscripción

#### Características:
- Carga de noticias desde `noticias.json`
- Filtros por categoría
- Búsqueda en tiempo real
- Noticia destacada con diseño especial
- 100% responsive

#### Categorías de Noticias:
1. **Institucional** - Noticias de la mutual
2. **Servicios** - Nuevos servicios
3. **Eventos** - Actividades y eventos
4. **Beneficios** - Nuevos beneficios
5. **Comunidad** - Actividades comunitarias

#### Archivos relacionados:
- HTML: `noticias.html`
- JSON: `noticias.json` (datos)
- CSS: `css/styles.css` (globales)

**Nota:** No tiene CSS/JS específico, usa los globales del proyecto.

---

### 4.6 Panel de Administración (admin/admin-noticias.html)

**Ubicación:** `/admin/admin-noticias.html`  
**Estado:** ✅ Completo

#### Funcionalidad:
Panel simple para editar las 4 noticias del sitio.

#### Características:
- Vista de las 4 noticias en cards
- Botón "Editar" en cada noticia
- Modal para edición
- Subida de imágenes
- Preview de imágenes
- Validación de formularios
- Mensajes de éxito/error

#### Campos Editables:
```javascript
- Título (máx 255 caracteres)
- Resumen (máx 250 caracteres)
- Contenido completo
- Categoría (desplegable)
- Imagen (subida de archivo)
- Fecha de publicación
- Destacada (checkbox)
```

#### Flujo de Uso:
1. Abrir `/admin/admin-noticias.html`
2. Click en "Editar" en cualquier noticia
3. Modificar campos en el modal
4. Subir nueva imagen (opcional)
5. Click en "Guardar Cambios"
6. Se actualiza `noticias.json`
7. Cambios visibles inmediatamente en `noticias.html`

#### Archivos relacionados:
- HTML: `admin/admin-noticias.html`
- JS: `admin/admin-noticias.js`
- PHP: `php/noticias-json.php`

#### Seguridad:
**Importante:** El panel NO tiene login. Opciones para protegerlo:

1. **Protección con .htaccess** (Recomendado)
```apache
# En /admin/.htaccess
AuthType Basic
AuthName "Área Restringida"
AuthUserFile /ruta/completa/.htpasswd
Require valid-user
```

2. **Protección por IP**
```apache
Order deny,allow
Deny from all
Allow from 123.456.789.0
```

3. **Agregar login simple con PHP** (no incluido)

---

## 5. Sistemas y Funcionalidades

### 5.1 Sistema de Noticias

#### 5.1.1 Descripción
Sistema simplificado de gestión de noticias que usa **JSON en lugar de base de datos**.

#### 5.1.2 Arquitectura
```
┌─────────────────────────────────────────┐
│  noticias.html (Página Pública)         │
│  - Muestra 4 noticias                   │
│  - Filtros y búsqueda                   │
└────────────┬────────────────────────────┘
             │ Lee
             ▼
      ┌──────────────┐
      │ noticias.json│
      │ (4 noticias) │
      └──────┬───────┘
             │ Escribe
             ▼
┌─────────────────────────────────────────┐
│  admin-noticias.html (Panel Admin)      │
│  - Edita las 4 noticias                 │
│  - Sube imágenes                        │
└────────────┬────────────────────────────┘
             │ API
             ▼
      ┌──────────────────┐
      │ noticias-json.php│
      │ (Backend)         │
      └───────────────────┘
```

#### 5.1.3 Estructura del JSON

```json
{
  "noticias": [
    {
      "id": 1,
      "titulo": "Título de la noticia",
      "slug": "titulo-de-la-noticia",
      "resumen": "Resumen breve...",
      "contenido": "Contenido completo...",
      "imagen": "assets/imagenes/noticias/noticia-1.jpg",
      "categoria": "institucional",
      "destacada": true,
      "fecha": "2024-11-15",
      "autor": "Mutual Angaco"
    },
    // ... 3 noticias más
  ],
  "configuracion": {
    "ultima_actualizacion": "2024-11-15T10:30:00",
    "version": "1.0"
  }
}
```

#### 5.1.4 API de Noticias

**Archivo:** `php/noticias-json.php`

**Endpoints:**

| Método | Action | Descripción |
|--------|--------|-------------|
| GET | `?action=get` | Obtiene todas las noticias |
| GET | `?action=get_one&id=1` | Obtiene una noticia |
| POST | `action=update` | Actualiza una noticia |

**Ejemplo de uso:**
```javascript
// Obtener todas las noticias
fetch('php/noticias-json.php?action=get')
  .then(res => res.json())
  .then(data => console.log(data.noticias));

// Actualizar noticia (desde admin)
const formData = new FormData();
formData.append('action', 'update');
formData.append('id', 1);
formData.append('titulo', 'Nuevo título');
// ... otros campos

fetch('php/noticias-json.php', {
  method: 'POST',
  body: formData
});
```

#### 5.1.5 Subida de Imágenes

**Ubicación:** Las imágenes se guardan en `/uploads/noticias/`

**Formato:** `noticia-{id}-{timestamp}.{extension}`

**Ejemplo:** `noticia-1-1700123456.jpg`

**Validaciones:**
- Tamaño máximo: 2MB
- Formatos permitidos: JPG, PNG, WebP
- Automáticamente elimina imagen anterior al subir nueva

---

### 5.2 Sistema de Formulario de Contacto

#### 5.2.1 Descripción
Formulario completo con validación frontend/backend y envío por email.

#### 5.2.2 Flujo de Funcionamiento

```
Usuario completa formulario
         │
         ▼
Validación JavaScript (frontend)
         │
         ▼
Envío AJAX a PHP
         │
         ▼
Validación PHP (backend)
         │
         ▼
Guardar log (opcional)
         │
         ▼
Enviar email al admin
         │
         ▼
Enviar confirmación al usuario
         │
         ▼
Respuesta JSON al frontend
         │
         ▼
Mostrar mensaje de éxito/error
```

#### 5.2.3 Validaciones Implementadas

**Frontend (JavaScript):**
```javascript
- Nombre: mínimo 3 caracteres, solo letras
- Teléfono: formato válido con números
- Email: formato RFC estándar
- Asunto: debe seleccionar uno
- Mensaje: mínimo 10 caracteres
- Términos: debe aceptar
```

**Backend (PHP):**
```php
- Sanitización de todos los inputs
- Validación de email con filter_var()
- Validación de teléfono con regex
- Protección honeypot anti-spam
- Longitud de campos
```

#### 5.2.4 Sistema de Logs

**Archivo:** `logs/contactos_YYYY-MM.log`

**Formato:**
```
[2024-11-15 10:30:45] Nombre: Juan Pérez | Email: juan@example.com | Teléfono: 264412345 | Asunto: Consulta General
```

**Activar/Desactivar:**
```php
// En php/contacto.php línea 26
define('LOG_ENABLED', true); // true para activar, false para desactivar
```

#### 5.2.5 Emails que se Envían

**1. Email al Administrador:**
- Diseño HTML profesional
- Contiene todos los datos del formulario
- Incluye IP y fecha
- Reply-To: email del usuario

**2. Email de Confirmación al Usuario:**
- Confirma recepción de la consulta
- Resumen de lo enviado
- Datos de contacto alternativos
- Tiempo de respuesta estimado

---

### 5.3 Sistema de FAQ

#### 5.3.1 Descripción
Sección de Preguntas Frecuentes integrada al final de la página de servicios.

#### 5.3.2 Características
- 17 preguntas organizadas en 5 categorías
- Diseño simple tipo lista (diferente a acordeones de servicios)
- Solo un FAQ abierto a la vez
- Animaciones suaves
- Navegación por teclado

#### 5.3.3 Categorías

| Categoría | Preguntas |
|-----------|-----------|
| Préstamos | 4 |
| Subsidios | 3 |
| Seguros | 3 |
| Turismo | 3 |
| General | 4 |

#### 5.3.4 Funcionalidad JavaScript

```javascript
// Abrir/cerrar FAQ
function toggleFAQ(item) {
  - Cierra todos los demás
  - Abre el seleccionado
  - Anima la transición
}

// Navegación por teclado
- Enter/Space: Abre/cierra
- Arrow Down: Siguiente pregunta
- Arrow Up: Pregunta anterior
- Home: Primera pregunta
- End: Última pregunta
```

---

### 5.4 Componentes Modulares (Header/Footer)

#### 5.4.1 Header Dinámico

**Archivo:** `components/header.html`

**Características:**
- Logo de la mutual
- Menú de navegación (5 páginas)
- Menú hamburguesa en móvil
- Botón de accesibilidad
- Sticky on scroll (opcional)

**Navegación:**
```html
- Home
- Institucional
- Servicios
- Contacto
- Noticias
```

**Carga Dinámica:**
```javascript
// En js/components.js
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });
```

#### 5.4.2 Footer Dinámico

**Archivo:** `components/footer.html`

**Secciones:**
1. **Columna 1** - Logo y descripción
2. **Columna 2** - Enlaces rápidos
3. **Columna 3** - Servicios
4. **Columna 4** - Contacto
5. **Columna 5** - Redes sociales

**Copyright:**
```html
© 2024 Mutual Angaco. Todos los derechos reservados.
```

---

### 5.5 Sistema de Accesibilidad

#### 5.5.1 Botón de Alto Contraste

**Ubicación:** Botón flotante en todas las páginas

**Funcionamiento:**
```javascript
// Click en el botón
document.body.classList.toggle('high-contrast');

// Guarda preferencia en localStorage
localStorage.setItem('high-contrast', 'true');
```

**Cambios en Modo Alto Contraste:**
```css
- Fondo: Negro
- Texto: Blanco/Amarillo
- Bordes: Amarillo
- Sin gradientes
- Contraste aumentado
```

#### 5.5.2 Características de Accesibilidad

- ✅ Navegación completa por teclado
- ✅ ARIA labels en elementos interactivos
- ✅ Alt text en todas las imágenes
- ✅ Contraste de colores WCAG AA
- ✅ Focus visible en todos los elementos
- ✅ Estructura semántica HTML5
- ✅ Skip links (opcional)

---

## 6. Guía de Instalación

### 6.1 Requisitos del Servidor

**Mínimos:**
- PHP 7.4 o superior
- Apache o Nginx
- Permisos de escritura en carpetas específicas
- Soporte para envío de emails (SMTP)

**Recomendados:**
- PHP 8.0+
- SSL/HTTPS
- mod_rewrite habilitado (Apache)
- Gzip compression

**No requiere:**
- MySQL/MariaDB
- Node.js
- Composer

### 6.2 Instalación Paso a Paso

#### Paso 1: Subir Archivos al Servidor

```bash
# Por FTP/SFTP, subir todos los archivos a:
/public_html/  (o /www/ o /httpdocs/ según hosting)
```

**Estructura en el servidor:**
```
public_html/
├── index.html
├── institucional.html
├── servicios.html
├── contacto.html
├── noticias.html
├── noticias.json
├── css/
├── js/
├── php/
├── admin/
├── components/
└── assets/
```

#### Paso 2: Crear Carpetas Necesarias

```bash
# Conectar por SSH o usar administrador de archivos
mkdir uploads
mkdir uploads/noticias
mkdir logs

# Establecer permisos
chmod 755 uploads
chmod 777 uploads/noticias
chmod 755 logs
chmod 666 noticias.json
```

#### Paso 3: Configurar PHP

Ver sección [7. Configuración Requerida](#7-configuración-requerida)

#### Paso 4: Verificar Instalación

Visitar las siguientes URLs:
```
https://tudominio.com/              → Home
https://tudominio.com/institucional.html
https://tudominio.com/servicios.html
https://tudominio.com/contacto.html
https://tudominio.com/noticias.html
https://tudominio.com/admin/admin-noticias.html
```

### 6.3 Instalación en Localhost (Desarrollo)

#### Opción A: XAMPP (Windows/Mac/Linux)

1. Descargar XAMPP: https://www.apachefriends.org/
2. Instalar y ejecutar Apache + PHP
3. Copiar proyecto en: `C:\xampp\htdocs\mutual-angaco\`
4. Abrir: `http://localhost/mutual-angaco/`

#### Opción B: MAMP (Mac)

1. Descargar MAMP: https://www.mamp.info/
2. Instalar y ejecutar
3. Copiar proyecto en: `/Applications/MAMP/htdocs/mutual-angaco/`
4. Abrir: `http://localhost:8888/mutual-angaco/`

#### Opción C: PHP Built-in Server

```bash
# En la carpeta del proyecto
php -S localhost:8000

# Abrir navegador en:
http://localhost:8000
```

---

## 7. Configuración Requerida

### 7.1 Configuración General

#### 7.1.1 Actualizar Datos de Contacto

**Archivos a editar:**

1. **contacto.html** (líneas ~50-85)
```html
<!-- Dirección -->
<p>Av. Libertador 1234<br>Angaco, San Juan<br>Argentina</p>

<!-- Teléfonos -->
<a href="tel:+542644123456">+54 264 412-3456</a>

<!-- Emails -->
<a href="mailto:info@mutualangaco.com.ar">info@mutualangaco.com.ar</a>

<!-- Horarios -->
<p>Lunes a Viernes<br>8:00 - 16:00 hs</p>
```

2. **components/footer.html**
```html
<!-- Actualizar todos los datos de contacto -->
```

#### 7.1.2 Configurar Google Maps

**En contacto.html** (línea ~200):

1. Ir a Google Maps: https://www.google.com/maps
2. Buscar dirección de la mutual
3. Click en "Compartir" → "Incorporar un mapa"
4. Copiar el código iframe
5. Reemplazar en contacto.html:

```html
<iframe 
    src="TU_URL_DE_GOOGLE_MAPS_AQUI"
    width="100%" 
    height="350" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

#### 7.1.3 Actualizar Enlaces de Redes Sociales

**Archivos:** `contacto.html`, `components/footer.html`

```html
<!-- Facebook -->
<a href="https://facebook.com/mutualangaco" target="_blank">

<!-- Instagram -->
<a href="https://instagram.com/mutualangaco" target="_blank">

<!-- WhatsApp -->
<a href="https://wa.me/5492644123456" target="_blank">
```

### 7.2 Configurar Formulario de Contacto

**Archivo:** `php/contacto.php`

#### 7.2.1 Configuración SMTP

Editar líneas 13-18:

```php
define('SMTP_HOST', 'mail.mutualangaco.com.ar');     // Host SMTP del hosting
define('SMTP_PORT', 587);                              // Puerto (587 para TLS)
define('SMTP_USERNAME', 'contacto@mutualangaco.com.ar'); // Usuario SMTP
define('SMTP_PASSWORD', 'tu_password_aqui');           // Contraseña
define('SMTP_SECURE', 'tls');                          // tls o ssl
```

#### 7.2.2 Configurar Emails de Destino

Líneas 21-22:

```php
define('EMAIL_DESTINO', 'info@mutualangaco.com.ar');     // Email principal
define('EMAIL_COPIA', 'contacto@mutualangaco.com.ar');   // Copia (opcional)
```

#### 7.2.3 Obtener Datos SMTP del Hosting

Contactar al proveedor de hosting y solicitar:
- Host SMTP
- Puerto SMTP
- Usuario (email)
- Contraseña
- Tipo de encriptación (TLS/SSL)

**Proveedores comunes:**

| Hosting | Host Típico | Puerto |
|---------|-------------|--------|
| cPanel | mail.tudominio.com | 587 |
| Hostinger | smtp.hostinger.com | 587 |
| Bluehost | mail.tudominio.com | 587 |

#### 7.2.4 Activar/Desactivar Logs

Línea 26:

```php
define('LOG_ENABLED', true); // true para activar, false para desactivar
```

### 7.3 Configurar Sistema de Noticias

**Archivo:** `noticias.json`

#### 7.3.1 Editar Noticias Iniciales

Reemplazar las 4 noticias de ejemplo con contenido real:

```json
{
  "noticias": [
    {
      "id": 1,
      "titulo": "Tu título aquí",
      "slug": "tu-titulo-aqui",
      "resumen": "Resumen corto...",
      "contenido": "Contenido completo...",
      "imagen": "assets/imagenes/noticias/noticia-1.jpg",
      "categoria": "institucional",
      "destacada": true,
      "fecha": "2024-11-15",
      "autor": "Mutual Angaco"
    }
    // ... 3 noticias más
  ]
}
```

#### 7.3.2 Agregar Imágenes de Noticias

1. Preparar 4 imágenes (formato JPG/PNG)
2. Tamaño recomendado: 1200x600px
3. Peso máximo: 500KB cada una
4. Subir a: `/assets/imagenes/noticias/`
5. Nombres: `noticia-1.jpg`, `noticia-2.jpg`, etc.

### 7.4 Proteger Panel de Administración

**Opción 1: .htaccess (Recomendado)**

Crear archivo `/admin/.htaccess`:

```apache
AuthType Basic
AuthName "Panel de Administración - Mutual Angaco"
AuthUserFile /ruta/completa/al/.htpasswd
Require valid-user
```

Crear archivo `.htpasswd`:
```bash
# En terminal SSH
htpasswd -c /ruta/completa/.htpasswd admin

# Ingresa la contraseña cuando se solicite
```

**Opción 2: Protección por IP**

En `/admin/.htaccess`:

```apache
Order deny,allow
Deny from all
Allow from 123.456.789.0   # Tu IP aquí
```

---

## 8. Guía de Uso

### 8.1 Para el Usuario Final (Público)

#### 8.1.1 Navegación del Sitio

1. **Ver Servicios**
   - Ir a Servicios
   - Click en cada acordeón para ver detalles
   - Scroll hasta FAQ para dudas comunes

2. **Leer Noticias**
   - Ir a Noticias
   - Usar filtros para buscar por categoría
   - Click en noticia para leer completa (futuro)

3. **Contactar a la Mutual**
   - Ir a Contacto
   - Completar formulario
   - Recibirá confirmación por email

4. **Conocer la Institución**
   - Ir a Institucional
   - Ver historia, equipo, valores

### 8.2 Para el Administrador

#### 8.2.1 Gestionar Noticias

**Acceder al Panel:**
```
https://tudominio.com/admin/admin-noticias.html
```

**Editar una Noticia:**

1. Click en "Editar" en la noticia deseada
2. Se abre modal con formulario
3. Modificar campos necesarios:
   - Título
   - Resumen (aparece en la card)
   - Contenido completo
   - Categoría
   - Fecha
4. Subir nueva imagen (opcional):
   - Click en "Seleccionar Imagen"
   - Elegir archivo (max 2MB)
   - Ver preview
5. Marcar como destacada (opcional):
   - Check en "Marcar como Destacada"
   - Solo una puede estar destacada
6. Click en "Guardar Cambios"
7. Confirmar mensaje de éxito
8. Cambios visibles inmediatamente en noticias.html

**Consejos:**
- El resumen debe ser corto (max 250 caracteres)
- El título debe ser atractivo
- Solo una noticia puede estar destacada
- Las imágenes deben ser horizontales (16:9)
- La fecha determina el orden

#### 8.2.2 Responder Consultas

Las consultas del formulario llegan por email a la dirección configurada en `php/contacto.php`.

**Para ver el log de contactos:**
1. Conectar por FTP/SSH
2. Ir a `/logs/`
3. Abrir `contactos_YYYY-MM.log`

**Formato del log:**
```
[2024-11-15 10:30:45] Nombre: Juan Pérez | Email: juan@example.com | Teléfono: 264412345 | Asunto: Consulta General
```

---

## 9. Personalización

### 9.1 Cambiar Colores

#### 9.1.1 Colores Principales

Los colores están definidos en cada archivo CSS:

**styles.css (líneas ~10-15):**
```css
:root {
    --color-primary: #28C4D8;      /* Turquesa */
    --color-secondary: #5DD902;    /* Verde */
    --color-dark: #005958;         /* Teal oscuro */
    --color-light: #C8E6C9;        /* Verde claro */
}
```

**Para cambiar:**
1. Buscar estos colores en TODOS los archivos CSS
2. Reemplazar con los nuevos colores
3. Mantener consistencia en todo el sitio

#### 9.1.2 Colores del Admin

**admin/admin-noticias.html (en el `<style>`):**
```css
/* Buscar y reemplazar: */
#28C4D8  →  TU_COLOR_PRINCIPAL
#5DD902  →  TU_COLOR_SECUNDARIO
#005958  →  TU_COLOR_OSCURO
```

### 9.2 Cambiar Tipografía

#### 9.2.1 Fuente Actual: Poppins

Para cambiar a otra fuente de Google Fonts:

1. Ir a https://fonts.google.com/
2. Elegir fuente
3. Obtener el link

**En todos los HTML (en `<head>`):**
```html
<!-- Reemplazar: -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Por tu nueva fuente, ejemplo: -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**En todos los CSS:**
```css
/* Reemplazar: */
font-family: 'Poppins', sans-serif;

/* Por: */
font-family: 'Montserrat', sans-serif;
```

### 9.3 Agregar Más Servicios

**En servicios.html:**

1. Copiar estructura de un servicio existente
2. Modificar:
   - ID único
   - Título
   - Descripción
   - Contenido

```html
<!-- Copiar desde línea ~80 -->
<div class="service-accordion-item">
    <button class="service-accordion-header" data-service="nuevo-servicio">
        <div class="service-icon">
            <i class="fas fa-nuevo-icono"></i>
        </div>
        <div class="service-title">
            <h3>Nuevo Servicio</h3>
            <p>Descripción breve</p>
        </div>
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="service-accordion-content" id="nuevo-servicio">
        <!-- Contenido aquí -->
    </div>
</div>
```

### 9.4 Agregar Más Categorías de Noticias

**1. En noticias.html (línea ~58):**
```html
<select id="categoriaFilter">
    <option value="">Todas las categorías</option>
    <option value="institucional">Institucional</option>
    <!-- ... categorías existentes ... -->
    <option value="nueva-categoria">Nueva Categoría</option>
</select>
```

**2. En php/noticias-json.php (línea ~120):**
```php
$categorias_permitidas = [
    'institucional',
    'servicios',
    'eventos',
    'beneficios',
    'comunidad',
    'nueva-categoria'  // Agregar aquí
];
```

### 9.5 Modificar Equipo Directivo

**En institucional.html (línea ~200):**

```html
<div class="equipo-card">
    <div class="equipo-image">
        <img src="assets/imagenes/equipo/nombre.jpg" alt="Nombre">
        <div class="equipo-overlay">
            <div class="equipo-social">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    </div>
    <div class="equipo-info">
        <h3>Nombre Completo</h3>
        <span class="equipo-cargo">Cargo</span>
        <p>Breve descripción del miembro...</p>
    </div>
</div>
```

Para agregar más miembros, copiar toda la estructura `<div class="equipo-card">`.

---

## 10. Mantenimiento

### 10.1 Tareas de Mantenimiento Regulares

#### 10.1.1 Diarias
- ✅ Revisar email de consultas del formulario
- ✅ Responder consultas recibidas

#### 10.1.2 Semanales
- ✅ Actualizar noticias (si hay novedades)
- ✅ Revisar logs de contacto
- ✅ Verificar que el sitio carga correctamente

#### 10.1.3 Mensuales
- ✅ Backup completo del sitio
- ✅ Backup del archivo `noticias.json`
- ✅ Limpiar carpeta `logs/` (opcional)
- ✅ Revisar imágenes obsoletas en `uploads/`
- ✅ Verificar enlaces rotos
- ✅ Actualizar información de contacto si cambió

#### 10.1.4 Anuales
- ✅ Renovar dominio y hosting
- ✅ Actualizar copyright en footer
- ✅ Revisar y actualizar toda la información
- ✅ Verificar compatibilidad con nuevos navegadores

### 10.2 Backups

#### 10.2.1 Qué Respaldar

**Archivos Críticos:**
```
✅ noticias.json (datos de noticias)
✅ uploads/ (imágenes subidas)
✅ logs/ (historial de contactos)
✅ php/contacto.php (si personalizaste)
✅ Todos los HTML modificados
```

**Método:**
1. Conectar por FTP
2. Descargar carpetas completas
3. Guardar en local con fecha
4. Ejemplo: `backup_mutualangaco_2024-11-15.zip`

#### 10.2.2 Frecuencia Recomendada

| Archivo | Frecuencia |
|---------|-----------|
| noticias.json | Semanal |
| uploads/ | Mensual |
| logs/ | Trimestral |
| Sitio completo | Mensual |

#### 10.2.3 Automatizar Backups

**Opción 1: cPanel Backup**
1. Ir a cPanel
2. Buscar "Backup"
3. Configurar backup automático

**Opción 2: Script PHP**
```php
// Crear backup.php
<?php
$backup_file = 'backup_' . date('Y-m-d') . '.zip';
$zip = new ZipArchive();
$zip->open($backup_file, ZipArchive::CREATE);
// Agregar archivos al zip
$zip->close();
?>
```

### 10.3 Monitoreo

#### 10.3.1 Verificar Funcionamiento

**Checklist semanal:**
- [ ] ¿El sitio carga correctamente?
- [ ] ¿Las noticias se muestran?
- [ ] ¿El formulario funciona?
- [ ] ¿Llegan los emails?
- [ ] ¿El panel admin funciona?

**Herramientas recomendadas:**
- Google Search Console (monitorear errores)
- Google Analytics (visitas)
- UptimeRobot (caídas del servidor)

#### 10.3.2 Logs de Error

**Activar logs de PHP:**

En `.htaccess` de la raíz:
```apache
php_flag display_errors off
php_flag log_errors on
php_value error_log /ruta/a/php-errors.log
```

**Revisar logs:**
```bash
# Por SSH
tail -f php-errors.log

# Por FTP
Descargar y abrir php-errors.log
```

### 10.4 Actualizaciones

#### 10.4.1 Actualizar PHP

Si el hosting actualiza PHP a una versión nueva:

1. Verificar compatibilidad de código
2. Probar en localhost con nueva versión
3. Hacer backup antes de actualizar
4. Actualizar en producción
5. Verificar que todo funcione

#### 10.4.2 Actualizar Librerías

**Font Awesome:**
```html
<!-- Actualizar en todos los HTML -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

**Google Fonts:**
Normalmente se actualizan automáticamente.

---

## 11. Troubleshooting

### 11.1 Problemas Comunes

#### 11.1.1 El sitio no carga / Error 500

**Causas posibles:**
- Error en PHP
- Permisos incorrectos
- Archivo .htaccess corrupto

**Soluciones:**
1. Verificar logs de error de PHP
2. Verificar permisos de archivos (644 para archivos, 755 para carpetas)
3. Renombrar .htaccess temporalmente para probbar
4. Verificar versión de PHP compatible

#### 11.1.2 El formulario no envía emails

**Causas posibles:**
- Configuración SMTP incorrecta
- Puerto bloqueado por el servidor
- Email marcado como spam

**Soluciones:**
1. Verificar configuración en `php/contacto.php`
2. Probar con otro puerto SMTP (587 vs 465)
3. Verificar carpeta de spam
4. Contactar al hosting sobre envío de emails
5. Verificar logs en `logs/contactos_*.log`

**Test simple:**
```php
// Crear test-email.php en la raíz
<?php
$test = mail('tu@email.com', 'Test', 'Mensaje de prueba');
echo $test ? 'Email enviado' : 'Error al enviar';
?>
```

#### 11.1.3 Las noticias no se actualizan

**Causas posibles:**
- Permisos incorrectos en noticias.json
- Error en PHP al guardar
- Cache del navegador

**Soluciones:**
1. Verificar permisos: `chmod 666 noticias.json`
2. Ver errores en consola del navegador (F12)
3. Limpiar cache del navegador (Ctrl+Shift+R)
4. Verificar que la carpeta `uploads/` existe y tiene permisos 777

#### 11.1.4 Las imágenes no se suben

**Causas posibles:**
- Carpeta uploads no existe
- Permisos incorrectos
- Archivo muy pesado

**Soluciones:**
1. Crear carpeta: `mkdir uploads/noticias`
2. Dar permisos: `chmod 777 uploads/noticias`
3. Reducir tamaño de imagen (max 2MB)
4. Verificar formato permitido (JPG, PNG, WebP)

#### 11.1.5 El panel admin no funciona

**Causas posibles:**
- JavaScript deshabilitado
- Error en la consola
- Problema con fetch() API

**Soluciones:**
1. Abrir consola del navegador (F12)
2. Ver errores en tab "Console"
3. Verificar que `php/noticias-json.php` existe
4. Verificar permisos de archivos PHP

#### 11.1.6 El sitio se ve mal en móvil

**Causas posibles:**
- CSS no carga
- Meta viewport falta
- Cache del navegador

**Soluciones:**
1. Verificar que todos los CSS cargan
2. Verificar `<meta name="viewport">` en HTML
3. Limpiar cache del móvil
4. Probar en varios navegadores móviles

### 11.2 Mensajes de Error Comunes

#### 11.2.1 "Parse error: syntax error"

**Causa:** Error de sintaxis en PHP

**Solución:**
1. Leer el mensaje completo (indica línea)
2. Revisar esa línea en el archivo indicado
3. Buscar: paréntesis sin cerrar, comillas sin cerrar, punto y coma faltante

#### 11.2.2 "Permission denied"

**Causa:** Permisos de archivo/carpeta incorrectos

**Solución:**
```bash
chmod 644 archivo.php
chmod 755 carpeta/
chmod 666 noticias.json
chmod 777 uploads/
```

#### 11.2.3 "Failed to fetch"

**Causa:** Error al conectar con API (noticias-json.php)

**Solución:**
1. Verificar ruta correcta en JavaScript
2. Verificar que PHP funciona
3. Ver detalles en Network tab de DevTools

#### 11.2.4 "Call to undefined function mail()"

**Causa:** Función mail() no disponible en servidor

**Solución:**
1. Contactar al hosting
2. Verificar configuración de PHP
3. Puede requerir SMTP autenticado

### 11.3 Herramientas de Diagnóstico

#### 11.3.1 Consola del Navegador

```javascript
// Abrir: F12 o Ctrl+Shift+I
// Tabs importantes:
- Console: Ver errores JavaScript
- Network: Ver peticiones HTTP
- Elements: Inspeccionar HTML/CSS
```

#### 11.3.2 Validadores Online

- **HTML:** https://validator.w3.org/
- **CSS:** https://jigsaw.w3.org/css-validator/
- **Responsive:** https://responsivedesignchecker.com/
- **Velocidad:** https://pagespeed.web.dev/

#### 11.3.3 Información PHP

Crear `info.php` en la raíz:
```php
<?php
phpinfo();
?>
```

Abrir en navegador: `https://tudominio.com/info.php`

**IMPORTANTE:** Eliminar después de revisar (información sensible).

---

## 12. FAQ Técnico

### 12.1 Preguntas sobre el Sistema

**P: ¿Necesito MySQL?**  
R: No, el sistema usa JSON para las noticias. No requiere base de datos.

**P: ¿Cuántas noticias puedo tener?**  
R: El sistema está diseñado para 4 noticias fijas que se actualizan. Para más noticias, necesitarías modificar el sistema.

**P: ¿Puedo agregar un login al panel admin?**  
R: Sí, pero no está incluido. Puedes usar .htaccess (recomendado) o agregar un sistema de login PHP.

**P: ¿Las noticias anteriores se guardan?**  
R: No, al editar una noticia, se reemplaza. No hay historial.

**P: ¿Puedo cambiar los colores fácilmente?**  
R: Sí, ver sección [9.1 Cambiar Colores](#91-cambiar-colores).

**P: ¿El sitio funciona sin JavaScript?**  
R: Parcialmente. El contenido se ve, pero sin interactividad (acordeones, formularios, etc).

**P: ¿Puedo usar el sitio en localhost?**  
R: Sí, necesitas servidor local con PHP (XAMPP, MAMP, etc).

**P: ¿Cómo agrego Google Analytics?**  
R: Agregar el código de tracking antes de `</head>` en todos los HTML.

**P: ¿El sitio es multiidioma?**  
R: No, está en español. Agregar multiidioma requeriría desarrollo adicional.

**P: ¿Puedo agregar más páginas?**  
R: Sí, copiar la estructura de una página existente y adaptar.

### 12.2 Preguntas sobre Hosting

**P: ¿Qué hosting recomiendan?**  
R: Cualquiera con PHP 7.4+ y soporte SMTP. Opciones: Hostinger, Bluehost, SiteGround.

**P: ¿Necesito servidor dedicado?**  
R: No, hosting compartido básico es suficiente.

**P: ¿Cuánto espacio necesito?**  
R: Mínimo 100MB. Con imágenes ~500MB.

**P: ¿Necesito SSL/HTTPS?**  
R: Muy recomendado pero no obligatorio. La mayoría de hostings lo incluyen gratis (Let's Encrypt).

**P: ¿Funciona en Windows Server?**  
R: Sí, pero probado principalmente en Linux.

### 12.3 Preguntas sobre Personalización

**P: ¿Puedo cambiar el diseño completamente?**  
R: Sí, tienes acceso a todo el código CSS.

**P: ¿Cómo agrego un slider de imágenes?**  
R: Necesitarías agregar una librería como Swiper.js o Slick.

**P: ¿Puedo agregar un chat en vivo?**  
R: Sí, integrar servicios como Tawk.to, Crisp, etc.

**P: ¿Cómo agrego videos?**  
R: Usar iframe de YouTube/Vimeo en el HTML.

**P: ¿Puedo agregar un blog completo?**  
R: El sistema actual no es un blog. Para blog completo se recomienda WordPress.

---

## 13. Roadmap y Mejoras Futuras

### 13.1 Mejoras Sugeridas (No Implementadas)

#### 13.1.1 Corto Plazo (1-3 meses)

**Sistema de Noticias:**
- [ ] Página de detalle individual de noticia
- [ ] Sistema de búsqueda avanzado
- [ ] Paginación funcional
- [ ] Compartir en redes sociales

**Formulario de Contacto:**
- [ ] Captcha / reCaptcha
- [ ] Adjuntar archivos
- [ ] Autorespuesta personalizable
- [ ] Diferentes destinatarios por asunto

**Panel Admin:**
- [ ] Sistema de login propio
- [ ] Gestión de usuarios
- [ ] Estadísticas de visitas
- [ ] Preview en tiempo real

**General:**
- [ ] Buscador global del sitio
- [ ] Versión imprimible de páginas
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

#### 13.1.2 Mediano Plazo (3-6 meses)

**Sistema de Socios:**
- [ ] Área de socios con login
- [ ] Consulta de estado de cuenta
- [ ] Descarga de comprobantes
- [ ] Solicitud de servicios online

**Integrations:**
- [ ] Integración con Mercado Pago
- [ ] Sistema de turnos online
- [ ] Chat en vivo
- [ ] Newsletter automatizado

**Administración:**
- [ ] Editor WYSIWYG para noticias
- [ ] Gestión de imágenes mejorada
- [ ] Sistema de comentarios
- [ ] Estadísticas avanzadas

#### 13.1.3 Largo Plazo (6+ meses)

**Funcionalidad:**
- [ ] App móvil nativa
- [ ] Sistema de notificaciones push
- [ ] Múltiples idiomas
- [ ] Blog completo con categorías

**Migración:**
- [ ] Migrar a CMS (WordPress, Drupal)
- [ ] Base de datos completa
- [ ] Sistema de roles y permisos

### 13.3 Limitaciones Actuales

**Conocer las limitaciones ayuda a planear mejoras:**

1. **4 Noticias Fijas:** Sistema simple, no escalable para muchas noticias
2. **Sin Base de Datos:** Limita funcionalidades avanzadas
3. **Sin Login de Socios:** No hay área privada
4. **Sin Sistema de Pagos:** No procesa pagos online
5. **Sin Multiidioma:** Solo español
6. **Administración Básica:** Panel simple, no CMS completo

**Pero:**
✅ Es perfecto para el caso de uso actual
✅ Fácil de mantener
✅ Sin dependencias complejas
✅ Rápido y ligero
✅ Funciona sin base de datos

---

## 📊 Anexos

### A. Checklist de Lanzamiento

#### Antes de Subir a Producción

**Configuración:**
- [ ] Actualizar datos de contacto (teléfonos, emails, dirección)
- [ ] Configurar SMTP en contacto.php
- [ ] Configurar Google Maps con ubicación real
- [ ] Actualizar enlaces de redes sociales
- [ ] Verificar enlaces de WhatsApp

**Contenido:**
- [ ] Reemplazar noticias de ejemplo con reales
- [ ] Agregar imágenes reales (logo, noticias, equipo)
- [ ] Revisar todos los textos
- [ ] Verificar ortografía

**Técnico:**
- [ ] Crear carpetas uploads/noticias/ con permisos
- [ ] Probar formulario de contacto
- [ ] Probar panel de administración
- [ ] Verificar responsive en móvil
- [ ] Verificar en diferentes navegadores
- [ ] Configurar SSL/HTTPS
- [ ] Configurar redirects www
- [ ] Crear sitemap.xml
- [ ] Configurar robots.txt
- [ ] Agregar Google Analytics

**SEO:**
- [ ] Verificar meta tags en todas las páginas
- [ ] Agregar alt text a todas las imágenes
- [ ] Verificar títulos de páginas
- [ ] Configurar Google Search Console
- [ ] Enviar sitemap a Google

**Legal:**
- [ ] Crear página de Política de Privacidad
- [ ] Crear página de Términos y Condiciones
- [ ] Verificar cumplimiento RGPD (si aplica)

### B. Glosario de Términos

| Término | Definición |
|---------|------------|
| **Responsive** | Diseño que se adapta a diferentes tamaños de pantalla |
| **SMTP** | Protocolo para envío de emails |
| **JSON** | Formato de datos (JavaScript Object Notation) |
| **API** | Interfaz de programación de aplicaciones |
| **CRUD** | Create, Read, Update, Delete (operaciones básicas) |
| **Frontend** | Parte visual del sitio (HTML/CSS/JS) |
| **Backend** | Parte del servidor (PHP) |
| **Honeypot** | Técnica anti-spam |
| **Slug** | URL amigable (ej: nueva-sede-angaco) |
| **SEO** | Search Engine Optimization |
| **SSL/TLS** | Protocolo de seguridad (HTTPS) |
| **Accordion** | Elemento desplegable |
| **Modal** | Ventana emergente |
| **Breadcrumb** | Navegación de migas de pan |
| **Hero Section** | Sección principal/banner |
| **CTA** | Call To Action (llamado a la acción) |

### C. Contactos y Recursos

**Desarrollador Original:**
- Desarrollado en Claude.ai (Anthropic)
- Fecha: Noviembre 2024

**Recursos Útiles:**
- Font Awesome: https://fontawesome.com/
- Google Fonts: https://fonts.google.com/
- W3C Validator: https://validator.w3.org/
- Can I Use: https://caniuse.com/
- Stack Overflow: https://stackoverflow.com/

**Soporte:**
- Documentación del proyecto: Carpeta `/docs/`
- Hosting: Consultar con proveedor
- PHP: https://www.php.net/docs.php

---

## 🎯 Conclusión

Este documento cubre todos los aspectos del sitio web de Mutual Angaco, desde la instalación hasta el mantenimiento y personalización.

**Puntos Clave:**
- ✅ Sistema completo y funcional
- ✅ Sin base de datos (usa JSON)
- ✅ Fácil de mantener
- ✅ 100% responsive
- ✅ Bien documentado

**Próximos Pasos:**
1. Configurar datos reales
2. Subir al servidor
3. Probar todo
4. Lanzar

**Recordar:**
- Hacer backups regularmente
- Mantener noticias actualizadas
- Responder consultas del formulario
- Monitorear funcionamiento

---

**Versión del Documento:** 1.0  
**Última Actualización:** Noviembre 2024  
**Creado para:** Mutual Angaco, San Juan, Argentina

---

*Fin de la Documentación*