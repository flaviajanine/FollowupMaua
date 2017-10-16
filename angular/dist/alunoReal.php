<?php 

session_start();

if(isset($_SESSION['categoria'])){

	if($_SESSION['categoria']!=='0'){
		$out = array('Error'=>'Voce nao possui permissao!');
		echo json_encode($out);
	}

	else {

//var_dump($_SESSION['idusuario']);

	require_once('config.php');

	$objDb = new db();
	$link = $objDb->conecta_mysql();

	
	$sql = "SELECT ra_aluno FROM tb_alunos WHERE idusuario = '".$_SESSION['idusuario']."' ";

	$res = mysqli_query($link, $sql) or die ("Erro na query SELECT"); 
		

}
	$linha = mysqli_fetch_array($res);

	if (isset($linha[0])) {

		$sql = "SELECT * FROM tb_infos WHERE RA_HASH = '".$linha[0]."' ";

		$res = mysqli_query($link, $sql) or die ("Erro na query SELECT");

		$linha2 = mysqli_fetch_array($res);

		$sql2 = "SELECT * FROM tb_predicoes WHERE RA_HASH = '".$linha[0]."' ";
		
		$res1 = mysqli_query($link, $sql2) or die ("Erro na query SELECT");
		
		$linha3 = mysqli_fetch_array($res1);

		$sql1 = "SELECT AVG(P1),AVG(P2),AVG(P3),AVG(P4) FROM tb_historicos ";

		$res2 = mysqli_query($link, $sql1) or die ("Erro na query SELECT"); 

		$linha = mysqli_fetch_array($res2);


		$out = array('MP1'=>$linha[0],'MP2'=>$linha[1],'MP3'=>$linha[2],'MP4'=>$linha[3],'Situacao'=>$linha3[52],'NivelConf'=>$linha3[53],'P1'=>$linha2[27],'P2'=>$linha2[28],'P3'=>$linha2[30],'P4'=>$linha2[31]);
		echo json_encode($out);



		

	}else{

		$out = array('RA'=>'Nao Cadastrado');
		echo json_encode($out);
	}


	

}
