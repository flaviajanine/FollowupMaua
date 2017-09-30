
<?php

$header = array();
$data = array();
$counter = 0;

if ($file = fopen("modelo1.csv", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        if($counter == 0){
            $header[] = explode(";",$line);            
        } else {
        $newline = explode(";",$line);
        if($newline[11] == "") {
                $newline[11] = 'x';
            }
            if($newline[12] == "") {
                $newline[12] = 'x';
            }

            $data[] = $newline;
        
        }
        $counter++;
    }
    fclose($file);
}

$header =  ["Exer","RA","Cur","Ser","Per","Fingr","StIni","StFin","OriDisc","StIniDisc","StFinDisc", "P1","T1","MT","MP","MF","SituaçãoFinal"];
$data2 = [["2015", "2002.000","EN", "3.000","D","RTRG","REP","RET","REG", "MDT", "TRC", "6,5","8,5","7.8","7","7.2",null]];
$tablename = "modelo1.xls";
$params = array("tablename"=>$tablename, "header"=>$header, "data"=>$data2);
$body = json_encode($params);
echo $body;
$score_url = 'https://ibm-watson-ml.mybluemix.net/pm/v1/score/modelo1?accesskey=5yXyFZuLy7uXMxMqFZsjXMG2lnvy48RqATPaknXgwstjpDer/bvOG9LshGMltn4uHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+H0ZOFm8wNYEEAISjNZ5ulwaR1+ZBm1y9+T/UDJtYvbXhzUtXufnZwJ+gQBSAR2uqE=';

$contextData = array (
    'method' => 'POST',
    'header' => "Connection: close\r\n".
                "Content-Length: ".strlen($body)."\r\n",
    'content'=> $body );

$context = stream_context_create (array ( 'http' => $contextData ));

$result =  file_get_contents (
      $score_url, 
      false,
      $context);

var_dump($result);

/*
if(isset($_ENV['VCAP_SERVICES'])){
    $vcap_services = json_decode($_ENV['VCAP_SERVICES'], true);
    $url = $vcap_services["pm-20"][0]['credentials']['url'];
    $access_key = $vcap_services["pm-20"][0]['credentials']['access_key'];
    $instance_id = $vcap_services["pm-20"][0]['credentials']['instance_id'];
    $password = $vcap_services["pm-20"][0]['credentials']['password'];
    $username = $vcap_services["pm-20"][0]['credentials']['username'];
}
*/