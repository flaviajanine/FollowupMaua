<?php

$conexao = new PDO("mysql:dbname=imobiliaria_db;host=localhost","root","");

$conexao->beginTransaction();

$acao = $conexao->prepare("DELETE FROM usuario WHERE id = ?");

$id = 2;

$acao->execute(array($id));

//$conexao->rollback();
$conexao->commit();

//$saida = json_encode($acao);
//echo $saida;
echo "delete ok!";