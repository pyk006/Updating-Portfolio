
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$name = $_POST["name"];
$message = $_POST["message"];
$email = $_POST["email"];
$subject = $_POST["subject"];

require "vendor/autoload.php";


$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();

$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "email";
$mail->Password = "";

$mail->setFrom($email);
$mail->addAddress("email", "Phil");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "Email sent";
