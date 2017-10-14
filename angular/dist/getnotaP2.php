<?php 


mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

ini_set('max_execution_time', 300);

require_once('config.php');


$header = ["Exer", "Esc", "RA_HASH", "Cur", "Ser", "Per", "Fingr", "StIni", "StFin", "DtSitCur", "CdDis", "CurDis", "SerDis", "PerDis", "G", "T", "L", "OriDisc", "StIniDisc", "StFinDisc", "DtStDisc", "SemDisc", "CritDisc", "QtTrabalhos", "KT", "KP", "P1", "P2", "PS1", "P3", "P4", "PS2", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "MT", "MP", "MF"];


//PEGAR DINAMICAMENTE O NOME DO MODELO.
$tablename = "Treino1.xls";

$objDb = new db();
$link = $objDb->conecta_mysql();

$sql = "SELECT * FROM tb_infos";

$res = mysqli_query($link, $sql) or die ("Erro na query select");

if (mysqli_num_rows($res) > 0){

	while ($linha = mysqli_fetch_assoc($res)) {
		
		$data[] = array($linha['Exer'],$linha['Esc'],$linha['RA_HASH'],$linha['Cur'],$linha['Ser'],$linha['Per'],$linha['Fingr'],$linha['StIni'],$linha['StFin'],"01-02-16",$linha['CdDis'],$linha['CurDis'],$linha['SerDis'],$linha['PerDis'],$linha['G'],$linha['T'],$linha['L'],$linha['OriDisc'],$linha['StIniDisc'],$linha['StFinDisc'],"01-02-16",$linha['SemDisc'],$linha['CritDisc'],$linha['QtTrabalhos'],$linha['KT'],$linha['KP'],$linha['P1'],$linha['P2'],$linha['PS1'],$linha['P3'],$linha['P4'],$linha['PS2'],$linha['T1'],$linha['T2'],$linha['T3'],$linha['T4'],$linha['T5'],$linha['T6'],$linha['T7'],$linha['T8'],$linha['T9'],$linha['T10'],$linha['T11'],$linha['T12'],$linha['T13'],$linha['T14'],$linha['T15'],$linha['T16'],$linha['MT'],$linha['MP'],$linha['MF']);

	}

}

$params = array("tablename"=>$tablename, "header"=>$header, "data"=>$data);

$body = json_encode($params);

// Setup cURL
	$ch = curl_init('https://ibm-watson-ml.mybluemix.net/pm/v1/score/notaP2?accesskey=5yXyFZuLy7uXMxMqFZsjXMG2lnvy48RqATPaknXgwstjpDer/bvOG9LshGMltn4uHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+H0ZOFm8wNYEEAISjNZ5ulwaR1+ZBm1y9+T/UDJtYvbXhzUtXufnZwJ+gQBSAR2uqE=');
	curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => $body
));

// Send the request
$response = curl_exec($ch);
//echo $response;


// Check for errors
if($response === FALSE){
    die(curl_error($ch));
}

// Decode the response
$responseData = json_decode($response, TRUE);

//print_r($responseData);

#	GUARDAR AS RESPOSTAS NO BANCO DE DADOS (INSERT GERAL);

$x = mysqli_num_rows($res);

//print_r($responseData);

for ($i=1; $i <= $x; $i++){ 

	
	$setar = "SET @@auto_increment_increment=1";
	
	
	mysqli_query($link, $setar) or die ("Erro na query SETAR"); 
	

	$var1 = $responseData[0]['data'][$i-1][52];

	$sql = "UPDATE tb_predicoes SET P2 = '$var1' WHERE id = '$i'";

	$r = mysqli_query($link, $sql) or die ("Erro na query insert");


}

if($r==true)
{
   $out = array('erro'=>'0');
echo json_encode($out);
   
}
else
{
	$out = array('erro'=>'1');
echo json_encode($out);
   
}
