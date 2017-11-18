<?php 

//Exemplo de uso das classes e execucao de uma query

require_once("vendor/autoload.php");

$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$email = $obj['email'];

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
 $mail->Username = 'followupmaua@gmail.com'; //email
 
 //Password to use for SMTP authentication
 $mail->Password = 'Compmaua201703'; //senha
 
 //Set who the message is to be sent from
 $mail->SetFrom('followupmaua@gmail.com', 'FollowUpMaua'); //email
 
 //Set an alternative reply-to address
 // $mail->addReplyTo('replyto@example.com', 'First Last');
 //Set who the message is to be sent to
 $mail->AddAddress("$email", 'Admin'); //nome do usuario e email
 
 //Set the subject line
 $mail->Subject = 'Relatório';
 $body = "Relatório de predições de reprovados.";
 $mail->AltBody = "Relatório de predições de reprovados."; // optional, comment out and test
 $mail->MsgHTML($body);

 $path = 'alunos.pdf';
 $mail->AddAttachment($path, '',  $encoding = 'base64', $type = 'application/pdf');
  
 if (!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    $out = array('erro'=>'0');
    echo json_encode($out);
 }