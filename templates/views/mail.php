<?php
$para = "tuquibraun@gmail.com";
$tema = $_POST['tema'];
$de = $_POST['nombre']
$mensaje = $_POST['mensaje'];
$mail = $_POST['email']
$headers = "De:". $mail ."\r\n" .
"Nombre:". $de

mail($para,$tema,$mensaje,$headers);
?>
