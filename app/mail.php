<?php
header('Content-Type: text/html; charset=utf-8');
// Variables
$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$services = trim($_POST["services"]);
$message = trim($_POST["message"]);




$pattern = "/(content-type|bcc:|cc:|to:)/i";

$to = 'ailin.webdeveloper@gmail.com';
$sub = "=?utf-8?B?". base64_encode("topic of the letter"). "?="; // You can define email subject
// HTML Elements for Email Body
$body = "Name: $name<br>Email: $mail<br>Services: $services<br>Message: $message";
//Must end on first column
$headers = "From: ailin.webdeveloper@gmail.com" ."\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// PHP email sender
mail($to, $sub , $body, $headers);