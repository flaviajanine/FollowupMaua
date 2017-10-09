<?php 

session_start();

if(isset($_SESSION['categoria'])){

	if($_SESSION['categoria']!=='0'){
		$out = array('Error'=>'Voce nao possui permissao!');
		echo json_encode($out);
	}

	else {

require_once('config.php');

	$objDb = new db();
	$link = $objDb->conecta_mysql();

	
	$sql = "SELECT AVG(P1),AVG(P2),AVG(P3),AVG(P4) FROM tb_infos ";

	$res = mysqli_query($link, $sql) or die ("Erro na query SELECT"); 

	$linha = mysqli_fetch_array($res);


	$out = array('P1'=>$linha[0],'P2'=>$linha[1],'P3'=>$linha[2],'P4'=>$linha[3],);
		echo json_encode($out);
}
}