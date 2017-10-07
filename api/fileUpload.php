<?php

require_once('config.php');

var_dump($_FILES);
var_dump($_POST);

ini_set('max_execution_time', 300);

$objDb = new db();
$link = $objDb->conecta_mysql();

/*
				$drop = "DROP TABLE IF EXISTS teste" ;
				mysqli_query($link, $drop) or die ("Erro na query drop"); 

				$create = "CREATE TABLE IF NOT EXISTS teste (id int not null primary key auto_increment, RA_HASH varchar(256),P1	FLOAT,P2 FLOAT,PS1 FLOAT,P3	FLOAT,P4 FLOAT,PS2 FLOAT,T1 FLOAT,T2 FLOAT,T3 FLOAT,T4 FLOAT,MT FLOAT,MP FLOAT,MF FLOAT)";

				mysqli_query($link, $create) or die ("Erro na query create");
*/

    $filename=$_FILES["selectFile"]["tmp_name"];	
    var_dump($_FILES);	


	if($_FILES["selectFile"]["size"] > 0)
	{
				$file = fopen($filename, "r");

				while (($getData = fgetcsv($file, 10000, ";")) !== FALSE){

					$create = "CREATE TABLE IF NOT EXISTS teste(id int primary key auto_increment,Exer int,
					Esc varchar(45),RA_HASH varchar(256),Cur varchar(45),Ser int,Per varchar(45),Fingr varchar(45),
					StIni varchar(45),StFin   varchar(45),DtSitCur date,CdDis 
					varchar(45),CurDis varchar(45),SerDis   int,PerDis varchar(45),G int,T int,L int,OriDisc varchar(45),
					StIniDisc varchar(45),StFinDisc varchar(45),DtStDisc date,SemDisc varchar(45),CritDisc varchar(45),
					QtTrabalhos int,KT FLOAT,KP FLOAT,P1 FLOAT,P2 FLOAT,PS1 FLOAT,P3 FLOAT,P4 FLOAT,PS2 FLOAT,T1 FLOAT,
					T2 FLOAT,T3 FLOAT,T4 FLOAT,T5 FLOAT,T6 FLOAT,T7 FLOAT,T8 FLOAT,T9 FLOAT,T10 FLOAT,T11 FLOAT,T12 FLOAT,
					T13 FLOAT,T14 FLOAT,T15 FLOAT,T16 FLOAT,MT FLOAT,MP FLOAT,MF FLOAT,Aprovado varchar(45),
					Acuracia FLOAT)";
					
					mysqli_query($link, $create) or die ("Erro na query create");
		}

		fclose($file);	
	}

