<?php 
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

$header = array();
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
//$data2 = [["2015", "2002.000","EN", "3.000","D","RTRG","REP","RET","REG", "MDT", "TRC", "6,5","8,5","7.8","7","7.2",null]];
$tablename = "modelo1.xls";
$params = array("tablename"=>$tablename, "header"=>$header, "data"=>"oi");
echo json_encode($params);

/*
$postData = array(
   'kind' => 'blogger#post',
   'blog' => array('id' => $blogID),
   'title' => 'A new post',
   'content' => 'With <b>exciting</b> content...'
);
*/
// Setup cURL
$ch = curl_init('https://ibm-watson-ml.mybluemix.net/pm/v1/score/modelo1?accesskey=5yXyFZuLy7uXMxMqFZsjXMG2lnvy48RqATPaknXgwstjpDer/bvOG9LshGMltn4uHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+H0ZOFm8wNYEEAISjNZ5ulwaR1+ZBm1y9+T/UDJtYvbXhzUtXufnZwJ+gQBSAR2uqE=');
curl_setopt_array($ch, array(
   CURLOPT_POST => TRUE,
   CURLOPT_RETURNTRANSFER => TRUE,
   CURLOPT_HTTPHEADER => array(
       'Content-Type: application/json'
   ),
   CURLOPT_POSTFIELDS => json_encode($params)
));

// Send the request
$response = curl_exec($ch);

// Check for errors
if($response === FALSE){
   die(curl_error($ch));
}

// Decode the response
$responseData = json_decode($response, TRUE);

// Print the date from the response
echo $responseData;
