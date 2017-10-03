<?php

require_once('config.php');

ini_set('max_execution_time', 300);

$objDb = new db();
$link = $objDb->conecta_mysql();

if(isset($_POST["Import"])){

				$drop = "DROP TABLE IF EXISTS teste" ;
				mysqli_query($link, $drop) or die ("Erro na query drop"); 

				$create = "CREATE TABLE IF NOT EXISTS teste (id int not null primary key auto_increment, RA_HASH varchar(256),P1	FLOAT,P2 FLOAT,PS1 FLOAT,P3	FLOAT,P4 FLOAT,PS2 FLOAT,T1 FLOAT,T2 FLOAT,T3 FLOAT,T4 FLOAT,MT FLOAT,MP FLOAT,MF FLOAT)";

				mysqli_query($link, $create) or die ("Erro na query create");


	$filename=$_FILES["file"]["tmp_name"];		


	if($_FILES["file"]["size"] > 0)
	{
				$file = fopen($filename, "r");

				while (($getData = fgetcsv($file, 10000, ";")) !== FALSE){

				$sql = "INSERT into teste (RA_HASH,P1,P2,PS1,P3,P4,PS2,T1,T2,T3,T4,MT,MP,MF) values ('".$getData[2]."','".$getData[26]."','".$getData[27]."','".$getData[28]."','".$getData[29]."','".$getData[30]."','".$getData[31]."','".$getData[32]."','".$getData[33]."','".$getData[34]."','".$getData[35]."','".$getData[48]."','".$getData[49]."','".$getData[50]."')";

					mysqli_query($link, $sql) or die ("Erro na query INSERT"); 

		}

		fclose($file);	
	}

}	 


