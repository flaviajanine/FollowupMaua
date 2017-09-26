<?php 

	require_once('conexaoDB.php');

	require_once('funcoes.php');

	$body = file_get_contents('php://input');
	$body = trim($body);
	$obj = json_decode($body,true);

	$objDb = new db(); //instancio a classe para usar a função interna dela 
	$link = $objDb->conecta_mysql(); //função interna da classe db

	

	//Padrão de todos os JSON
	$ra = $obj['ra'];
	$nome = $obj['nome'];
	$email = $obj['email'];
	$senha = $obj['senha'];
	$confirmarSenha = $obj['confirmarSenha'];
	$curso = $obj['curso'];

	//Verificar se o e-mail ja existe

	$email_existe = false;


	if ($senha === $confirmarSenha) {
		
		//verificar se o e-mail já
	$sql = " SELECT * FROM tb_aluno WHERE email_aluno = '$email' ";
	if($resultado_id = mysqli_query($link, $sql)) {

		$dados_usuario = mysqli_fetch_array($resultado_id);

		if(isset($dados_usuario['email_aluno'])){
			$email_existe = true;
		} 
	} else {
		$out = array('Email'=>'Disponivel para registro');
		$out_json = json_encode($out);
 		echo ($out_json);
		
	}


	if ($email_existe) {


	$out = array('Email'=>'1');
	$out_json = json_encode($out);
 	echo ($out_json);

	} 

	else {
		
	cadastrar_aluno($obj,$link);
			$out = array('RA'=>$ra,'NOME'=>$nome,'email'=>$email,'SENHA'=>$senha,'CURSO'=>$curso,);
			echo json_encode($out);
 						

	}


	} else {

		$out = array('Senha'=>'1');
			echo json_encode($out);

	}


	