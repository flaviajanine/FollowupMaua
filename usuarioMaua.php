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

 $out =  array('Email'=>'1');
  echo json_encode($out);
  

}else{
 
 $cadastraUsuario = new Usuario($ra,$nome,$email,$senha,$curso);
 $cadastraUsuario->insert();

 $out = array('ra'=>$ra,'nome'=>$nome,'email'=>$email,'senha'=>$senha,'curso'=>$curso,);
 echo json_encode($out);
 
}

} else{

	$out =  array('Senha'=>'1');
	echo json_encode($out);

}