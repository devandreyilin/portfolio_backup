<?php
header('Content-Type: text/html; charset=utf-8');
// Variables
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$message = trim($_POST["message"]);




$pattern = "/(content-type|bcc:|cc:|to:)/i";

$to = 'example@example.com';
$sub = "=?utf-8?B?". base64_encode("topic of the letter"). "?="; // You can define email subject
// HTML Elements for Email Body
$body = "Name: $name<br>Email: $email<br>Title: $title<br>Message: $message<br>";
//Must end on first column
$headers = "From: example@example.com" ."\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
// PHP email sender
mail($to, $sub , $body, $headers);