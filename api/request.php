<?php

$score_url = 'https://ibm-watson-ml.mybluemix.net/pm/v1/score/modelo1?accesskey=5yXyFZuLy7uXMxMqFZsjXMG2lnvy48RqATPaknXgwstjpDer/bvOG9LshGMltn4uHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+H0ZOFm8wNYEEAISjNZ5ulwaR1+ZBm1y9+T/UDJtYvbXhzUtXufnZwJ+gQBSAR2uqE=';

    $body = file_get_contents('php://input');
	$body = trim($body);
	$obj = json_decode($body,true);