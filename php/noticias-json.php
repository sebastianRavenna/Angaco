<?php
/**
 * NOTICIAS-JSON.PHP - MUTUAL ANGACO
 * Backend para gestionar noticias en archivo JSON (sin base de datos)
 * Solo 4 noticias fijas que se actualizan
 */

// ========================================
// CONFIGURACIÓN
// ========================================
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

define('JSON_FILE', __DIR__ . '/../noticias.json');
define('UPLOAD_DIR', __DIR__ . '/../assets/imagenes/noticias/');
define('MAX_FILE_SIZE', 2 * 1024 * 1024); // 2MB

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Leer noticias del JSON
 */
function leerNoticias() {
    if (!file_exists(JSON_FILE)) {
        return ['success' => false, 'message' => 'Archivo de noticias no encontrado'];
    }
    
    $contenido = file_get_contents(JSON_FILE);
    $data = json_decode($contenido, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return ['success' => false, 'message' => 'Error al leer archivo JSON'];
    }
    
    return [
        'success' => true,
        'noticias' => $data['noticias'] ?? [],
        'configuracion' => $data['configuracion'] ?? []
    ];
}

/**
 * Guardar noticias en el JSON
 */
function guardarNoticias($noticias) {
    $data = [
        'noticias' => $noticias,
        'configuracion' => [
            'ultima_actualizacion' => date('Y-m-d\TH:i:s'),
            'version' => '1.0'
        ]
    ];
    
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return ['success' => false, 'message' => 'Error al generar JSON'];
    }
    
    if (file_put_contents(JSON_FILE, $json) === false) {
        return ['success' => false, 'message' => 'Error al guardar archivo'];
    }
    
    return ['success' => true, 'message' => 'Noticias guardadas correctamente'];
}

/**
 * Sanitizar texto
 */
function sanitize($text) {
    return htmlspecialchars(trim($text), ENT_QUOTES, 'UTF-8');
}

/**
 * Generar slug desde el título
 */
function generarSlug($titulo) {
    $slug = strtolower($titulo);
    $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
    $slug = preg_replace('/[\s-]+/', '-', $slug);
    $slug = trim($slug, '-');
    return $slug;
}

/**
 * Subir imagen
 */
function subirImagen($file, $noticiaId) {
    // Verificar errores
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['success' => false, 'message' => 'Error al subir la imagen'];
    }
    
    // Verificar tamaño
    if ($file['size'] > MAX_FILE_SIZE) {
        return ['success' => false, 'message' => 'La imagen no puede pesar más de 2MB'];
    }
    
    // Verificar tipo
    $tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $tiposPermitidos)) {
        return ['success' => false, 'message' => 'Solo se permiten imágenes JPG, PNG o WebP'];
    }
    
    // Crear directorio si no existe
    if (!file_exists(UPLOAD_DIR)) {
        mkdir(UPLOAD_DIR, 0755, true);
    }
    
    // Generar nombre único
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $nombreArchivo = 'noticia-' . $noticiaId . '-' . time() . '.' . $extension;
    $rutaDestino = UPLOAD_DIR . $nombreArchivo;
    
    // Mover archivo
    if (!move_uploaded_file($file['tmp_name'], $rutaDestino)) {
        return ['success' => false, 'message' => 'Error al guardar la imagen'];
    }
    
    // Retornar ruta relativa
    return [
        'success' => true,
        'ruta' => 'assets/imagenes/noticias/' . $nombreArchivo
    ];
}

/**
 * Eliminar imagen antigua
 */
function eliminarImagenAntigua($rutaImagen) {
    if (empty($rutaImagen)) return;
    
    $rutaCompleta = __DIR__ . '/../' . $rutaImagen;
    
    if (file_exists($rutaCompleta) && is_file($rutaCompleta)) {
        unlink($rutaCompleta);
    }
}

// ========================================
// PROCESAR SOLICITUD
// ========================================

try {
    $action = $_GET['action'] ?? $_POST['action'] ?? '';
    
    switch ($action) {
        
        // ========================================
        // GET: Obtener todas las noticias
        // ========================================
        case 'get':
            $resultado = leerNoticias();
            echo json_encode($resultado);
            break;
        
        // ========================================
        // GET: Obtener noticia por ID
        // ========================================
        case 'get_one':
            $id = intval($_GET['id'] ?? 0);
            
            if ($id <= 0) {
                throw new Exception('ID inválido');
            }
            
            $resultado = leerNoticias();
            
            if (!$resultado['success']) {
                throw new Exception($resultado['message']);
            }
            
            $noticia = null;
            foreach ($resultado['noticias'] as $n) {
                if ($n['id'] == $id) {
                    $noticia = $n;
                    break;
                }
            }
            
            if (!$noticia) {
                throw new Exception('Noticia no encontrada');
            }
            
            echo json_encode([
                'success' => true,
                'noticia' => $noticia
            ]);
            break;
        
        // ========================================
        // POST: Actualizar noticia
        // ========================================
        case 'update':
            $id = intval($_POST['id'] ?? 0);
            
            if ($id <= 0 || $id > 4) {
                throw new Exception('ID de noticia inválido');
            }
            
            // Leer noticias actuales
            $resultado = leerNoticias();
            
            if (!$resultado['success']) {
                throw new Exception($resultado['message']);
            }
            
            $noticias = $resultado['noticias'];
            
            // Buscar la noticia a actualizar
            $indice = -1;
            foreach ($noticias as $i => $noticia) {
                if ($noticia['id'] == $id) {
                    $indice = $i;
                    break;
                }
            }
            
            if ($indice === -1) {
                throw new Exception('Noticia no encontrada');
            }
            
            // Validar campos requeridos
            $titulo = sanitize($_POST['titulo'] ?? '');
            $resumen = sanitize($_POST['resumen'] ?? '');
            $contenido = sanitize($_POST['contenido'] ?? '');
            $categoria = sanitize($_POST['categoria'] ?? '');
            $fecha = sanitize($_POST['fecha'] ?? '');
            $destacada = isset($_POST['destacada']) && $_POST['destacada'] == '1';
            
            if (empty($titulo) || empty($resumen) || empty($contenido) || empty($categoria) || empty($fecha)) {
                throw new Exception('Todos los campos son obligatorios');
            }
            
            // Generar slug
            $slug = generarSlug($titulo);
            
            // Mantener imagen actual por defecto
            $imagenRuta = $noticias[$indice]['imagen'];
            
            // Procesar nueva imagen si se subió
            if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] !== UPLOAD_ERR_NO_FILE) {
                $resultadoImagen = subirImagen($_FILES['imagen'], $id);
                
                if ($resultadoImagen['success']) {
                    // Eliminar imagen anterior
                    eliminarImagenAntigua($imagenRuta);
                    $imagenRuta = $resultadoImagen['ruta'];
                } else {
                    throw new Exception($resultadoImagen['message']);
                }
            }
            
            // Si esta noticia se marca como destacada, quitar destacada de las demás
            if ($destacada) {
                foreach ($noticias as $i => $n) {
                    if ($i !== $indice) {
                        $noticias[$i]['destacada'] = false;
                    }
                }
            }
            
            // Actualizar noticia
            $noticias[$indice] = [
                'id' => $id,
                'titulo' => $titulo,
                'slug' => $slug,
                'resumen' => $resumen,
                'contenido' => $contenido,
                'imagen' => $imagenRuta,
                'categoria' => $categoria,
                'destacada' => $destacada,
                'fecha' => $fecha,
                'autor' => $noticias[$indice]['autor'] ?? 'Mutual Angaco'
            ];
            
            // Guardar
            $resultadoGuardar = guardarNoticias($noticias);
            
            if (!$resultadoGuardar['success']) {
                throw new Exception($resultadoGuardar['message']);
            }
            
            echo json_encode([
                'success' => true,
                'message' => 'Noticia actualizada correctamente',
                'noticia' => $noticias[$indice]
            ]);
            break;
        
        // ========================================
        // Acción no válida
        // ========================================
        default:
            throw new Exception('Acción no válida');
    }
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>