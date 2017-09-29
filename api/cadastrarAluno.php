<?php 

	require_once('config.php');

	$body = file_get_contents('php://input');
	$body = trim($body);
	$obj = json_decode($body,true);

	$objDb = new db(); //instancio a classe para usar a função interna dela 
	$link = $objDb->conecta_mysql(); //função interna da classe db

	//Padrão de todos os JSON
	$nome = $obj['nome'];
	$email = $obj['email'];
	$senha = $obj['senha'];
	$confirmarSenha = $obj['confirmarSenha'];
	$ra = $obj['ra'];
	$idcursos = $obj['idcursos'];
	

	//Verificar se o e-mail ja existe

	$email_existe = false;


	if ($senha === $confirmarSenha) {
		
		//verificar se o e-mail já existe no banco de dados
	$sql = " SELECT * FROM tb_usuarios WHERE email_usuario = '$email' ";
	if($resultado_id = mysqli_query($link, $sql)) {

		$dados_usuario = mysqli_fetch_array($resultado_id);

		if(isset($dados_usuario['email_usuario'])){
			$email_existe = true;
		} 
	} 


	if ($email_existe) {


	$out = array('Email'=>'1');
	echo json_encode($out);
 	

	} 

	else {
		
	cadastrar_aluno($obj,$link);
			$out = array('NOME'=>$nome,'email'=>$email,'SENHA'=>$senha);
			echo json_encode($out);
 						

	}


	} else {

		$out = array('Senha'=>'1');
			echo json_encode($out);

	}


	