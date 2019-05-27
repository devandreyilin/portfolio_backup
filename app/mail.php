<?php
header('Content-Type: text/html; charset=utf-8');
// Variables
$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$services = trim($_POST["services"]);
$message = trim($_POST["message"]);




$pattern = "/(content-type|bcc:|cc:|to:)/i";

$to = 'ailin.webdeveloper@gmail.com';
$sub = "=?utf-8?B?". base64_encode("Сообщение с сайта ailindev.ru"). "?="; // You can define email subject
// HTML Elements for Email Body
$body = "Имя: $name<br>Почта: $mail<br>Услуга: $services<br>Сообщение: $message";
//Must end on first column
$headers = "From: admin@ailindev.ru" ."\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// PHP email sender
mail($to, $sub , $body, $headers);