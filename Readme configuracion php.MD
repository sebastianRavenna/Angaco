# Configuración del Formulario de Contacto - Mutual Angaco

## 📧 Instrucciones de Configuración del PHP

### 1. Datos que Necesitas del Hosting

Antes de configurar, solicitá al proveedor de hosting:

- **Host SMTP**: Ejemplo: `mail.mutualangaco.com.ar`
- **Puerto SMTP**: Usualmente `587` (TLS) o `465` (SSL)
- **Usuario SMTP**: Tu email, ejemplo: `contacto@mutualangaco.com.ar`
- **Contraseña SMTP**: La contraseña del email
- **Tipo de encriptación**: `tls` o `ssl`

### 2. Configurar el Archivo PHP

Abrí el archivo `php/contacto.php` y modificá las siguientes líneas (líneas 13-18):

```php
define('SMTP_HOST', 'mail.tudominio.com');           // ← Reemplazar
define('SMTP_PORT', 587);                             // ← Verificar
define('SMTP_USERNAME', 'contacto@mutualangaco.com.ar'); // ← Reemplazar
define('SMTP_PASSWORD', 'TU_PASSWORD_AQUI');          // ← Reemplazar
define('SMTP_SECURE', 'tls');                         // ← Verificar (tls o ssl)
```

**Ejemplo con datos reales:**
```php
define('SMTP_HOST', 'mail.mutualangaco.com.ar');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'contacto@mutualangaco.com.ar');
define('SMTP_PASSWORD', 'MiPassword123!');
define('SMTP_SECURE', 'tls');
```

### 3. Configurar Emails de Destino

En las líneas 21-22, configurá los emails donde querés recibir las consultas:

```php
define('EMAIL_DESTINO', 'info@mutualangaco.com.ar');     // Email principal
define('EMAIL_COPIA', 'contacto@mutualangaco.com.ar');   // Email copia (opcional)
```

### 4. Permisos de Archivos

Asegurate que el servidor tenga permisos de escritura en la carpeta `logs/`:

```bash
chmod 755 logs/
```

Si la carpeta no existe, el script la creará automáticamente.

### 5. Probar el Formulario

1. Subí todos los archivos al servidor
2. Abrí la página de contacto en tu navegador
3. Completá el formulario con datos de prueba
4. Verificá que llegue el email a la casilla configurada

### 6. Verificar Logs

Los contactos se guardan automáticamente en:
```
logs/contactos_YYYY-MM.log
```

Ejemplo: `logs/contactos_2024-11.log`

Para desactivar los logs, cambiá en la línea 26:
```php
define('LOG_ENABLED', false);
```

## 🔒 Seguridad

El formulario incluye:

- ✅ Validación de datos en frontend y backend
- ✅ Sanitización de inputs
- ✅ Protección honeypot contra spam
- ✅ Verificación de método POST
- ✅ Headers de seguridad
- ✅ Logs de contactos
- ✅ Email de confirmación automático al usuario

## 📧 Emails que se Envían

### 1. Email al Administrador (Mutual)
- Contiene todos los datos del formulario
- Incluye IP y fecha
- Diseño HTML profesional

### 2. Email al Usuario (Automático)
- Confirmación de recepción
- Resumen de su consulta
- Datos de contacto alternativos

## ❓ Problemas Comunes

### "Email no llega"
- Verificá que los datos SMTP sean correctos
- Revisá la carpeta de SPAM
- Consultá con el hosting si el servidor puede enviar emails

### "Error 500"
- Verificá los permisos de archivos
- Revisá los logs de error de PHP del hosting
- Asegurate que PHP 7.4+ esté instalado

### "Formulario se envía pero no llega email"
- Verificá que el hosting tenga configurado el envío de emails
- Puede que necesites configurar SPF y DKIM en tu dominio
- Consultá con el soporte del hosting

## 📞 Datos de Contacto a Actualizar

No olvides actualizar los siguientes datos en `contacto.html`:

- Dirección física
- Teléfonos
- Emails
- Horarios
- Coordenadas del mapa de Google Maps
- Enlaces a redes sociales
- Número de WhatsApp

## 🗺️ Configurar Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Buscá la ubicación de la mutual
3. Clic en "Compartir" → "Incorporar un mapa"
4. Copiá el código iframe
5. Reemplazá el iframe en `contacto.html` (línea ~200)

---

**¿Necesitás ayuda?** Guardá este documento junto con los archivos del sitio.