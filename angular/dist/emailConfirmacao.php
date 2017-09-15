<?php 

//Exemplo de uso das classes e execucao de uma query

require_once("vendor/autoload.php");

$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$email = $obj['email'];
var_dump($email);

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

 //Create a new PHPMailer instance
 $mail = new PHPMailer;
 
 $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
 );
 
//PEGAR POR JSON O EMAIL E ENVIAR O TOKEN





 $mail->CharSet = 'UTF-8';
 
 //Tell PHPMailer to use SMTP
 $mail->IsSMTP();
 
 //Enable SMTP debugging
 // 0 = off (for production use)
 // 1 = client messages
 // 2 = client and server messages
 $mail->SMTPDebug = 2;
 
 //Ask for HTML-friendly debug output
 $mail->Debugoutput = 'html';
 
 //Set the hostname of the mail server
 $mail->Host = 'smtp.gmail.com';
 
 // use
 // $mail->Host = gethostbyname('smtp.gmail.com');
 // if your network does not support SMTP over IPv6
 //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
 $mail->Port = 587;
 
 //Set the encryption system to use - ssl (deprecated) or tls
 $mail->SMTPSecure = 'tls';
 
 //Whether to use SMTP authentication
 $mail->SMTPAuth = true;
 
 //Username to use for SMTP authentication - use full email address for gmail
 $mail->Username = 'luizgustavovenar21@gmail.com';
 
 //Password to use for SMTP authentication
 $mail->Password = ''; //POR A SENHA
 
 //Set who the message is to be sent from
 $mail->SetFrom('luizgustavovenar21@gmail.com', 'Luiz');
 
 //Set an alternative reply-to address
 // $mail->addReplyTo('replyto@example.com', 'First Last');
 //Set who the message is to be sent to
 $mail->AddAddress("$email".'@gmail.com', 'Gu');
 
 //Set the subject line
 $mail->Subject = 'Assunto';
 
 //Read an HTML message body from an external file, convert referenced images to embedded,
 //convert HTML into a basic plain-text alternative body
 $mail->MsgHTML(file_get_contents('contents.html'), dirname(__FILE__));
 
 //Replace the plain text body with one created manually
 $mail->AltBody = 'This is a plain-text message body';
 
 //Attach an image file
 // $mail->addAttachment('images/phpmailer_mini.png');
 
 if (!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo "<br>Mensagem enviada!";
 }