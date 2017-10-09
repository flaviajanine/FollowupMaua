<?php

session_start();

require_once('config.php');


$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);


$email = $obj['email'];

$senha = $obj['senha'];



$sql = " SELECT * FROM tb_usuarios WHERE email_usuario = '$email' AND senha_usuario = '$senha' ";

$objDb = new db();
$link = $objDb->conecta_mysql();

$resultado_id = mysqli_query($link, $sql);

if($resultado_id){
	$dados_usuario = mysqli_fetch_array($resultado_id);

	if(isset($dados_usuario['idusuario'])){

		$_SESSION['idusuario'] = $dados_usuario['idusuario'];
		$_SESSION['nome_usuario'] = $dados_usuario['nome_usuario'];
		$_SESSION['email_usuario'] = $dados_usuario['email_usuario'];
		$_SESSION['categoria'] = $dados_usuario['categoria'];
		

		$dados_categoria = $dados_usuario['categoria'];


		switch ($dados_categoria) {
			case '0':
			$out = array('Categoria'=>$dados_categoria,'Nome'=>$dados_usuario['nome_usuario'],'Email'=>$dados_usuario['email_usuario'],'Error'=>'0');
			echo json_encode($out);
			
				
			break;

			case '1':

			$out = array('Categoria'=>$dados_categoria,'Nome'=>$dados_usuario['nome_usuario'],'Email'=>$dados_usuario['email_usuario'],'Error'=>'0');
			echo json_encode($out);

			break;

			case '2':
			$out = array('Categoria'=>$dados_categoria,'Nome'=>$dados_usuario['nome_usuario'],'Email'=>$dados_usuario['email_usuario'],'Error'=>'0');
			echo json_encode($out);
			break;
			
			default:
			$out = array('Categoria'=>'3');
			echo json_encode($out);
			break;
		} 
		
		
	} else {

		$out = array('Categoria'=>'Invalida','Error'=>'1');
		echo json_encode($out);
	}
} else {
	$out = array('Erro de Query'=>'Consulta');
	echo json_encode($out);
}