
<?php

$header = array();
$data = array();
$counter = 0;

if ($file = fopen("modelo1.csv", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        if($counter == 0){
            $header[] = explode(";",$line);            
           // var_dump($header);
           // echo($line);
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
  //  var_dump($data);
}


$data2 = [["2015", "2002.000","EN", "3.000","D","RTRG","REP","RET","REG", "MDT", "TRC", "6,5","8,5","7.8","7","7.2",null]];
$tablename = "modelo1.xls";
$params = array("tablename"=>$tablename, "header"=>$header, "data"=>$data2);
$score_url = 'https://ibm-watson-ml.mybluemix.net/pm/v1/score/modelo1?accesskey=5yXyFZuLy7uXMxMqFZsjXMG2lnvy48RqATPaknXgwstjpDer/bvOG9LshGMltn4uHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+H0ZOFm8wNYEEAISjNZ5ulwaR1+ZBm1y9+T/UDJtYvbXhzUtXufnZwJ+gQBSAR2uqE=';
/*
$ch = curl_init($score_url);


curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);
*/

$postString = http_build_query($params);
$ch = curl_init($score_url);                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec ($ch);
var_dump($server_output);

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
//$env = array('baseURL'=>$url,'accessKey'=>$access_key);
//json_encode($env);

//$score_url = $env['baseURL'].'pm/v1/score/modelo1'.'?accessKey='.$env['accessKey']; 