<?php 

//FAZ O CADASTRO DO USUARIO QUE NÃO ESTA ENTRANDO PELO MAUA NET!

require_once("config.php");

$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);


$nome = $obj['nome'];
$sobrenome = ($obj['sobrenome']);
//$data_nascimento = date($obj['data_nascimento']); 'DATA_NASCIMENTO' => $data_nascimento,
$email = $obj['email'];
$senha = $obj['senha'];
$confirmarSenha = $obj['confirmsenha'];

if ($senha === $confirmarSenha) 
{

//$busca = Usuario::validar($email);

if(isset($busca[0])){

	echo "<br/>". "Email ja cadastrado, por favor informe outro!";

}else{
	
	$usuarioExterno = new Usuario($nome,$sobrenome,$email,$senha);
	$usuarioExterno->insert();
	echo $usuarioExterno;
}

} else{

	echo ("Senha invalida");

}

//$array = array('NOME' => $nome,'SOBRENOME' => $sobrenome,'EMAIL' => $email,'SENHA' => $senha, );

//$dados = json_encode($array);


