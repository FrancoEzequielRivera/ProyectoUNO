<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $comentario = $_POST["comentario"];
    
    $destinatario = "francorivera@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Consulta de $nombre";
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Correo Electrónico: $email\n\n";
    $mensaje .= "Comentario:\n$comentario";
    
    // Envía el correo
    mail($destinatario, $asunto, $mensaje);
    
    // Redirige a una página de confirmación
    header("Location: confirmacion.html");
}
?>
