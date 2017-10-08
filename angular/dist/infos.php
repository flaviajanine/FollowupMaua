<?php 

require_once('config.php');

session_start();


$dados_categoria = $_SESSION['categoria'];


switch ($dados_categoria) {

	case '0':
	
	//$sql = "SELECT ra_aluno from tb_alunos a INNER JOIN tb_usuarios b USING() WHeRE idusuario = idusuario";

	$out = array('NOME'=>$_SESSION['nome_usuario'],'EMAIL'=>$_SESSION['email_usuario'],'CATEGORIA'=>$dados_categoria);//,'RA'=>$_SESSION['ra_aluno']);
	echo json_encode($out);

	break;

	case '1':

	$out = array('CATEGORIA'=>$dados_categoria,'NOME'=>$_SESSION['nome_usuario'],'EMAIL'=>$_SESSION['email_usuario']);
	echo json_encode($out);

	break;

	case '2':
	$out = array('CATEGORIA'=>$dados_categoria,'NOME'=>$_SESSION['nome_usuario'],'EMAIL'=>$_SESSION['email_usuario']);
	echo json_encode($out);
	break;

	default:
	$out = array('CATEGORIA'=>'3');
	echo json_encode($out);
	break;
}