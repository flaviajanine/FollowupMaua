<?php

require_once('config.php');

ini_set('max_execution_time', 300);

$objDb = new db();
$link = $objDb->conecta_mysql();

	$drop = "DROP TABLE IF EXISTS tb_infos" ;
				mysqli_query($link, $drop) or die ("Erro na query drop"); 

				$create  = "CREATE TABLE IF NOT EXISTS tb_infos(id int primary key auto_increment,Exer int,Esc varchar(45),RA_HASH varchar(256),Cur varchar(45),Ser int,Per varchar(45),Fingr varchar(45),StIni varchar(45),StFin   varchar(45),DtSitCur varchar(45),CdDis varchar(45),CurDis varchar(45),SerDis   int,PerDis varchar(45),G int,T int,L int,OriDisc varchar(45),StIniDisc varchar(45),StFinDisc varchar(45),DtStDisc varchar(45),SemDisc varchar(45),CritDisc varchar(45),QtTrabalhos int,KT varchar(45),KP varchar(45),P1 varchar(45),P2 varchar(45),PS1 varchar(45),P3 varchar(45),P4 varchar(45),PS2 varchar(45),T1 varchar(45),T2 varchar(45),T3 varchar(45),T4 varchar(45),T5 varchar(45),T6 varchar(45),T7 varchar(45),T8 varchar(45),T9 varchar(45),T10 varchar(45),T11 varchar(45),T12 varchar(45),T13 varchar(45),T14 varchar(45),T15 varchar(45),T16 varchar(45),MT varchar(45),MP varchar(45),MF varchar(45),Aprovado varchar(45),Acuracia varchar(45))";

				mysqli_query($link, $create) or die ("Erro na query create");


    $filename=$_FILES["selectFile"]["tmp_name"];	
   	
	if($_FILES["selectFile"]["size"] > 0)
	{
				$file = fopen($filename, "r");
				$getData = fgetcsv($file, 10000, ";");

				while (($getData = fgetcsv($file, 10000, ";")) !== FALSE){


					
					$setar = "SET @@auto_increment_increment=1";
					
					
				 	mysqli_query($link, $setar) or die ("Erro na query SETAR"); 

					
					if ($getData[28] != "") {
						if ($getData[28] > $getData[26]) {

							$getData[26] = $getData[28];

							//var_dump($getData[26]);
						}

						if ($getData[28] > $getData[27]) {
							
							$getData[27] = $getData[28];

							//var_dump($getData[27]);
						}
					}

					//var_dump($getData);

					$sql = "INSERT into tb_infos (Exer,Esc,RA_HASH,Cur,Ser,Per,Fingr,StIni,StFin,DtSitCur,CdDis,CurDis,SerDis,PerDis,G,T,L,OriDisc,StIniDisc,StFinDisc,DtStDisc,SemDisc,CritDisc,QtTrabalhos,KT,KP,P1,P2,PS1,P3,P4,PS2,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,MT,MP,MF) values ('".$getData[0]."','".$getData[1]."','".$getData[2]."','".$getData[3]."','".$getData[4]."','".$getData[5]."','".$getData[6]."','".$getData[7]."','".$getData[8]."','".$getData[9]."','".$getData[10]."','".$getData[11]."','".$getData[12]."','".$getData[13]."','".$getData[14]."','".$getData[15]."','".$getData[16]."','".$getData[17]."','".$getData[18]."','".$getData[19]."','".$getData[20]."','".$getData[21]."','".$getData[22]."','".$getData[23]."','".$getData[24]."','".$getData[25]."','".$getData[26]."','".$getData[27]."','".$getData[28]."','".$getData[29]."','".$getData[30]."','".$getData[31]."','".$getData[32]."','".$getData[33]."','".$getData[34]."','".$getData[35]."','".$getData[36]."','".$getData[37]."','".$getData[38]."','".$getData[39]."','".$getData[40]."','".$getData[41]."','".$getData[42]."','".$getData[43]."','".$getData[44]."','".$getData[45]."','".$getData[46]."','".$getData[47]."','".$getData[48]."','".$getData[49]."','".$getData[50]."')";
					
					

					mysqli_query($link, $sql) or die ("Erro na query INSERT"); 


		}
		
		fclose($file);	
	}