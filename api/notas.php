<?php 
require_once('conexaoDB.php');
require_once('funcoes.php');

$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$objDb = new db(); //instancio a classe para usar a função interna dela 
$link = $objDb->conecta_mysql(); //função interna da classe db


$p1 = $obj['p1'];

cadastrar_notas($obj,$link);
$out = array('P1'=>$p1);
echo json_encode($out);