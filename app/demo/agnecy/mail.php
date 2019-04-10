<?php
header('Content-Type: text/html; charset=utf-8');
// Variables
$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);


$pattern = "/(content-type|bcc:|cc:|to:)/i";

$to = 'example@example.com';
$sub = "=?utf-8?B?". base64_encode("topic of the letter"). "?="; // You can define email subject
// HTML Elements for Email Body
$body = "Email: $mail <br> Name: $name <br> Message: $text";
//Must end on first column
$headers = "From: example@example.com" ."\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// PHP email sender
mail($to, $sub , $body, $headers);
?>