<?php 

session_start();

require_once("config.php");


$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$email = $obj['email'];
$senha = $obj['senha'];

$busca = Usuario::login($email,$senha);
