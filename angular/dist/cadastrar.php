<?php 

//FAZ O CADASTRO DO USUARIO QUE NÃO ESTA ENTRANDO PELO MAUA NET!

require_once("config.php");


$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$ra = $obj['ra'];
$nome = $obj['nome'];
$email = $obj['email'];
$senha = $obj['senha'];
$confirmarSenha = $obj['confirmarSenha'];
$curso = $obj['curso'];

if ($senha === $confirmarSenha) 
{

$busca = Usuario::validar_email($email);

if(isset($busca[0])){

	echo "<br/>". "Email ja cadastrado, por favor informe outro!";

}else{
	
	$cadastraUsuario = new Usuario($ra,$nome,$email,$senha,$curso);
	$cadastraUsuario->insert();
	echo $cadastraUsuario;
}

} else{

	echo ("Senha invalida");

}