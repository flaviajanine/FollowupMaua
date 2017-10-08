<?php

session_start();

if(isset($_SESSION['categoria'])){

	if($_SESSION['categoria']!=='2'){
		$out = array('Error'=>'Voce nao possui permissao!');
		echo json_encode($out);
	}
	else {


		require_once('config.php');

		$body = file_get_contents('php://input');
		$body = trim($body);
		$obj = json_decode($body,true);

		$objDb = new db(); 
		$link = $objDb->conecta_mysql();


		$nome_curso = $obj['nome'];
		$coordenador_curso = $obj['coordenador'];
		$email_coordenador = $obj['email'];


		$sql = "SELECT * FROM tb_cursos WHERE nome_curso = '$nome_curso'"; 


		$resultado = mysqli_query($link, $sql);

		if($resultado){
			$dados_curso = mysqli_fetch_array($resultado);

			if (isset($dados_curso['nome_curso'])){
				$out = array('Curso'=>$nome_curso." ja foi Cadastrado");
				echo json_encode($out);

			} else {

				cadastrar_curso($obj,$link);
				$out = array('Curso'=>$nome_curso,'Coordenador'=>$coordenador_curso,'Email Coordenador'=>$email_coordenador);
				echo json_encode($out);

			}



		}

	}
}



