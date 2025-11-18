<?php
/**
 * CONTACTO.PHP - MUTUAL ANGACO
 * Script para procesar el formulario de contacto
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 1. Reemplazar los datos de SMTP con los del hosting
 * 2. Actualizar el email de destino
 * 3. Verificar permisos de escritura en logs/
 */

// ========================================
// CONFIGURACIÓN
// ========================================

// **IMPORTANTE**: Reemplazar con los datos reales del hosting
define('SMTP_HOST', 'mail.tudominio.com');           // Host SMTP del hosting
define('SMTP_PORT', 587);                             // Puerto (587 para TLS, 465 para SSL)
define('SMTP_USERNAME', 'contacto@mutualangaco.com.ar'); // Usuario SMTP
define('SMTP_PASSWORD', 'TU_PASSWORD_AQUI');          // Contraseña SMTP
define('SMTP_SECURE', 'tls');                         // 'tls' o 'ssl'

// Email de destino
define('EMAIL_DESTINO', 'info@mutualangaco.com.ar');
define('EMAIL_COPIA', 'contacto@mutualangaco.com.ar'); // Opcional: email con copia

// Configuración general
define('NOMBRE_EMPRESA', 'Mutual Angaco');
define('LOG_ENABLED', true); // true para guardar logs de contactos

// ========================================
// HEADERS
// ========================================
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Sanitizar entrada de datos
 */
function sanitize($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Validar email
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Validar teléfono
 */
function validatePhone($phone) {
    return preg_match('/^[0-9\s\-\+\(\)]+$/', $phone);
}

/**
 * Guardar log de contacto
 */
function saveLog($data) {
    if (!LOG_ENABLED) return;
    
    $logDir = __DIR__ . '/../logs/';
    if (!file_exists($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $logFile = $logDir . 'contactos_' . date('Y-m') . '.log';
    $logEntry = sprintf(
        "[%s] Nombre: %s | Email: %s | Teléfono: %s | Asunto: %s\n",
        date('Y-m-d H:i:s'),
        $data['nombre'],
        $data['email'],
        $data['telefono'],
        $data['asunto']
    );
    
    file_put_contents($logFile, $logEntry, FILE_APPEND);
}

/**
 * Enviar email usando mail() nativo de PHP
 * Esta función será reemplazada por el hosting con SMTP autenticado
 */
function sendEmail($data) {
    $to = EMAIL_DESTINO;
    $subject = '[Contacto Web] ' . NOMBRE_EMPRESA . ' - ' . ucfirst($data['asunto']);
    
    // Construir mensaje HTML
    $message = "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #28C4D8, #5DD902); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #28C4D8; }
            .field-label { font-weight: bold; color: #005958; margin-bottom: 5px; }
            .field-value { color: #666; }
            .footer { background: #005958; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Nueva Consulta desde el Sitio Web</h1>
                <p>" . NOMBRE_EMPRESA . "</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='field-label'>Nombre:</div>
                    <div class='field-value'>" . $data['nombre'] . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Email:</div>
                    <div class='field-value'>" . $data['email'] . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Teléfono:</div>
                    <div class='field-value'>" . $data['telefono'] . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Asunto:</div>
                    <div class='field-value'>" . ucfirst(str_replace('-', ' ', $data['asunto'])) . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Mensaje:</div>
                    <div class='field-value'>" . nl2br($data['mensaje']) . "</div>
                </div>
                " . (isset($data['newsletter']) && $data['newsletter'] ? "
                <div class='field'>
                    <div class='field-label'>Newsletter:</div>
                    <div class='field-value'>✓ Desea recibir novedades</div>
                </div>
                " : "") . "
                <div class='field'>
                    <div class='field-label'>Fecha:</div>
                    <div class='field-value'>" . date('d/m/Y H:i:s') . "</div>
                </div>
                <div class='field'>
                    <div class='field-label'>IP:</div>
                    <div class='field-value'>" . $_SERVER['REMOTE_ADDR'] . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>Este mensaje fue enviado desde el formulario de contacto de " . NOMBRE_EMPRESA . "</p>
                <p>No responder a este email. Contactar directamente al usuario.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Headers
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ' . NOMBRE_EMPRESA . ' <' . SMTP_USERNAME . '>';
    $headers[] = 'Reply-To: ' . $data['nombre'] . ' <' . $data['email'] . '>';
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    // Agregar copia si está definida
    if (defined('EMAIL_COPIA') && EMAIL_COPIA != '') {
        $headers[] = 'Cc: ' . EMAIL_COPIA;
    }
    
    // Enviar email
    // NOTA: El hosting configurará SMTP autenticado automáticamente
    $sent = mail($to, $subject, $message, implode("\r\n", $headers));
    
    return $sent;
}

/**
 * Enviar email de confirmación al usuario
 */
function sendConfirmationEmail($data) {
    $to = $data['email'];
    $subject = 'Recibimos tu consulta - ' . NOMBRE_EMPRESA;
    
    $message = "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #28C4D8, #5DD902); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .footer { background: #005958; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; padding: 12px 30px; background: #28C4D8; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class='content'>
                <p>Hola <strong>" . $data['nombre'] . "</strong>,</p>
                <p>Hemos recibido tu consulta y nuestro equipo la revisará a la brevedad.</p>
                <p><strong>Resumen de tu consulta:</strong></p>
                <ul>
                    <li><strong>Asunto:</strong> " . ucfirst(str_replace('-', ' ', $data['asunto'])) . "</li>
                    <li><strong>Fecha:</strong> " . date('d/m/Y H:i') . "</li>
                </ul>
                <p>Te responderemos a la brevedad en el email proporcionado.</p>
                <p>Si tu consulta es urgente, podés contactarnos directamente:</p>
                <ul>
                    <li><strong>Teléfono:</strong> +54 264 412-3456</li>
                    <li><strong>WhatsApp:</strong> +54 9 264 412-3456</li>
                    <li><strong>Email:</strong> info@mutualangaco.com.ar</li>
                </ul>
            </div>
            <div class='footer'>
                <p><strong>" . NOMBRE_EMPRESA . "</strong></p>
                <p>Av. Libertador 1234, Angaco, San Juan</p>
                <p>Este es un email automático, por favor no responder.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ' . NOMBRE_EMPRESA . ' <' . SMTP_USERNAME . '>';
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

/**
 * Verificar honeypot (protección contra spam)
 */
function checkHoneypot($data) {
    return !empty($data['website']); // Si el campo honeypot tiene valor, es spam
}

// ========================================
// PROCESAMIENTO DEL FORMULARIO
// ========================================

try {
    // Verificar método POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Método no permitido');
    }
    
    // Verificar honeypot
    if (checkHoneypot($_POST)) {
        // Spam detectado - simular éxito pero no enviar
        echo json_encode([
            'success' => true,
            'message' => 'Mensaje enviado correctamente'
        ]);
        exit;
    }
    
    // Recoger y sanitizar datos
    $data = [
        'nombre' => sanitize($_POST['nombre'] ?? ''),
        'telefono' => sanitize($_POST['telefono'] ?? ''),
        'email' => sanitize($_POST['email'] ?? ''),
        'asunto' => sanitize($_POST['asunto'] ?? ''),
        'mensaje' => sanitize($_POST['mensaje'] ?? ''),
        'newsletter' => isset($_POST['newsletter'])
    ];
    
    // Validaciones
    $errors = [];
    
    if (empty($data['nombre']) || strlen($data['nombre']) < 3) {
        $errors[] = 'Nombre inválido';
    }
    
    if (empty($data['telefono']) || !validatePhone($data['telefono'])) {
        $errors[] = 'Teléfono inválido';
    }
    
    if (empty($data['email']) || !validateEmail($data['email'])) {
        $errors[] = 'Email inválido';
    }
    
    if (empty($data['asunto'])) {
        $errors[] = 'Debe seleccionar un asunto';
    }
    
    if (empty($data['mensaje']) || strlen($data['mensaje']) < 10) {
        $errors[] = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    if (!empty($errors)) {
        throw new Exception('Datos incompletos o inválidos: ' . implode(', ', $errors));
    }
    
    // Guardar log
    saveLog($data);
    
    // Enviar emails
    $emailSent = sendEmail($data);
    
    if (!$emailSent) {
        throw new Exception('Error al enviar el email. Por favor intentá nuevamente.');
    }
    
    // Enviar confirmación al usuario
    sendConfirmationEmail($data);
    
    // Respuesta exitosa
    echo json_encode([
        'success' => true,
        'message' => '¡Tu consulta fue enviada con éxito! Te responderemos a la brevedad.'
    ]);
    
} catch (Exception $e) {
    // Respuesta de error
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>