<?php 

//Exemplo de uso das classes e execucao de uma query

require_once("config.php");

/*$ sql = new Sql();
$usuarios = $sql->select("SELECT * FROM tb_usuario");

echo json_encode($usuarios); */

$nome = new Usuario();
$nome->loadByName("Luiz");

echo $nome;



