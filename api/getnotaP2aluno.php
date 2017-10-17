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
    

mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

ini_set('max_execution_time', 300);



$header = ["Exer", "Esc", "RA_HASH", "Cur", "Ser", "Per", "Fingr", "StIni", "StFin", "DtSitCur", "CdDis", "CurDis", "SerDis", "PerDis", "G", "T", "L", "OriDisc", "StIniDisc", "StFinDisc", "DtStDisc", "SemDisc", "CritDisc", "QtTrabalhos", "KT", "KP", "P1", "P2", "PS1", "P3", "P4", "PS2", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "MT", "MP", "MF"];


//PEGAR DINAMICAMENTE O NOME DO MODELO.
$tablename = "Treino1.xls";

	$objDb = new db();
	$link = $objDb->conecta_mysql();

	
	$sql = "SELECT ra_aluno FROM tb_alunos WHERE idusuario = '".$_SESSION['idusuario']."' ";

	$res = mysqli_query($link, $sql) or die ("Erro na query SELECT"); 
		

}
	$linha = mysqli_fetch_array($res);

	if (isset($linha[0])) {

		$sql = "SELECT * FROM tb_infos WHERE RA_HASH = '".$linha['ra_aluno']."' ";

		$res2 = mysqli_query($link, $sql) or die ("Erro na query SELECT");

		$linha2 = mysqli_fetch_array($res2);

        var_dump($linha2);

        if (mysqli_num_rows($res2) > 0){
            
        $data[] = array($linha2['Exer'],$linha2['Esc'],$linha2['RA_HASH'],$linha2['Cur'],$linha2['Ser'],$linha2['Per'],$linha2['Fingr'],$linha2['StIni'],$linha2['StFin'],"01-02-16",$linha2['CdDis'],$linha2['CurDis'],$linha2['SerDis'],$linha2['PerDis'],$linha2['G'],$linha2['T'],$linha2['L'],$linha2['OriDisc'],$linha2['StIniDisc'],$linha2['StFinDisc'],"01-02-16",$linha2['SemDisc'],$linha2['CritDisc'],$linha2['QtTrabalhos'],$linha2['KT'],$linha2['KP'],$linha2['P1'],$linha2['P2'],$linha2['PS1'],$linha2['P3'],$linha2['P4'],$linha2['PS2'],$linha2['T1'],$linha2['T2'],$linha2['T3'],$linha2['T4'],$linha2['T5'],$linha2['T6'],$linha2['T7'],$linha2['T8'],$linha2['T9'],$linha2['T10'],$linha2['T11'],$linha2['T12'],$linha2['T13'],$linha2['T14'],$linha2['T15'],$linha2['T16'],$linha2['MT'],$linha2['MP'],$linha2['MF']);
            
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
            
            print_r($responseData);
            
            #	GUARDAR AS RESPOSTAS NO BANCO DE DADOS (INSERT GERAL);
            
            $x = mysqli_num_rows($res);
            
            //print_r($responseData);
  
                $setar = "SET @@auto_increment_increment=1";
                
                
                mysqli_query($link, $setar) or die ("Erro na query SETAR"); 
                
            
                $var1 = $responseData[0]['data'][0][52];
            
                $sql = "UPDATE tb_predicoes SET P2 = '$var1' WHERE RA_HASH = '".$linha[0]."' ";
            
                $r = mysqli_query($link, $sql) or die ("Erro na query insert");
            

            
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
            


		

	}else{

		$out = array('RA'=>'Nao Cadastrado');
		echo json_encode($out);
	}


	

}
