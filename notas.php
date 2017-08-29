<?php

//RECEBE AS NOTAS DO USUARIO


require_once("config.php");


$body = file_get_contents('php://input');
$body = trim($body);
$obj = json_decode($body,true);

$p1 = $obj['p1'];
$p2 = $obj['p2'];
$p3 = $obj['p3'];
$p4 = $obj['p4'];
$ps1 = $obj['ps1'];
$ps2 = $obj['ps2'];
$t1 = $obj['t1'];
$t2 = $obj['t2'];
$t3 = $obj['t3'];
$t4 = $obj['t4'];
