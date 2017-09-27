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


		$cod_disciplina = $obj['cod'];
		$nome_disciplina = $obj['nome_disciplina'];
		$nome_coordenador = $obj['nome_coordenador'];
		$email_coordenador = $obj['email_coordenador'];
		$semestralidade_disciplina = $obj['semestralidade'];
		$serie_oferecida_d = $obj['serie_d'];
		$serie_oferecida_n = $obj['serie_n'];


		$sql = "SELECT * FROM tb_disciplinas WHERE  cod_disciplina = '$cod_disciplina'"; 


		$resultado = mysqli_query($link, $sql);

		if($resultado){
			$dados_curso = mysqli_fetch_array($resultado);

			if (isset($dados_curso['cod_disciplina'] )){
				$out = array('Disciplina'=>$nome_disciplina." ja foi cadastrada");
				echo json_encode($out);

			} else {

				cadastrar_disciplina($obj,$link);
				$out = array('Disciplina'=>$nome_disciplina,'Codigo'=>$cod_disciplina,'Coordenador'=>$nome_coordenador,'Email Coordenador'=>$email_coordenador,'Semestralidade'=>$semestralidade_disciplina,'Serie D'=>$serie_oferecida_d,'Serie N'=>$serie_oferecida_n);
				echo json_encode($out);

			}



		}

	}
}



