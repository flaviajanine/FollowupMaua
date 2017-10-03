<?php

require_once('config.php');

ini_set('max_execution_time', 300);

$objDb = new db();
$link = $objDb->conecta_mysql();

if(isset($_POST["Import"])){

	$filename=$_FILES["file"]["tmp_name"];		


	if($_FILES["file"]["size"] > 0)
	{
		$file = fopen($filename, "r");
		while (($getData = fgetcsv($file, 10000, ";")) !== FALSE)
		{

		
			/*$sql = "INSERT into teste (Exer,Esc,RA_HASH,Cur,Ser,Per,Fingr,StIni,StFin,DtSitCur,CdDis,CurDis,SerDis,PerDis,G,T,L,OriDisc,StIniDisc,StFinDisc,DtStDisc,SemDisc,CritDisc,QtTrabalhos,KT,KP,P1,P2,PS1,P3,P4,PS2,T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,MT,MP,MF) 
			values ('".$getData[0]."','".$getData[1]."','".$getData[2]."','".$getData[3]."','".$getData[4]."','".$getData[5]."','".$getData[6]."','".$getData[7]."','".$getData[8]."','".$getData[9]."','".$getData[10]."','".$getData[11]."','".$getData[12]."','".$getData[13]."','".$getData[14]."','".$getData[15]."','".$getData[16]."','".$getData[17]."','".$getData[18]."','".$getData[19]."','".$getData[20]."','".$getData[21]."','".$getData[22]."','".$getData[23]."','".$getData[24]."','".$getData[25]."','".$getData[26]."','".$getData[27]."','".$getData[28]."','".$getData[29]."','".$getData[30]."','".$getData[31]."','".$getData[32]."','".$getData[33]."','".$getData[34]."','".$getData[35]."','".$getData[36]."','".$getData[37]."','".$getData[38]."','".$getData[39]."','".$getData[40]."','".$getData[41]."','".$getData[42]."','".$getData[43]."','".$getData[44]."','".$getData[45]."','".$getData[46]."','".$getData[47]."','".$getData[48]."','".$getData[49]."','".$getData[50]."',)";*/
			/*

			$sql = "INSERT into teste (RA_HASH,P1,P2,PS1,P3,P4,PS2,T1,T2,T3,T4,,MT,MP,MF) values ('".$getData[2]."','".$getData[27]."','".$getData[28]."','".$getData[29]."','".$getData[30]."','".$getData[31]."','".$getData[32]."','".$getData[33]."','".$getData[34]."','".$getData[35]."','".$getData[36]."','".$getData[48]."','".$getData[49]."','".$getData[50]."')"; */


			$sql = "INSERT into teste (RA_HASH,P1,P2,PS1,P3,P4,PS2,T1,T2,T3,T4,MT,MP,MF) values ('".$getData[2]."','".$getData[26]."','".$getData[27]."','".$getData[28]."','".$getData[29]."','".$getData[30]."','".$getData[31]."','".$getData[32]."','".$getData[33]."','".$getData[34]."','".$getData[35]."','".$getData[48]."','".$getData[49]."','".$getData[50]."')";

			

			//$sql = "INSERT into teste (Exer,Esc) values('".$getData[0]."','".$getData[1]."') " ; 

		
			$result = mysqli_query($link, $sql);

			if(!isset($result))
			{
				echo "NAO FUNCIONOU";		
			}
			else {
			
				

			}
		}

		fclose($file);	
	}
}	 


?>