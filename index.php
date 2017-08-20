<?php 

//Exemplo de uso das classes e execucao de uma query

require_once("config.php");


//Carrega um usuario
/*

$nome = new Usuario();
$nome->loadByName("Gus");
echo $nome;

*/

//Carrega uma lista de usuarios
/*

$lista = Usuario::getList();
echo json_encode($lista);

*/

//Carrega uma lista de usuarios buscando pelo nome
/*
$busca = Usuario::search("lu");
echo json_encode($busca);
*/

//Carrega um usuario usando login e senha


$usuario = new Usuario();
$usuario->login("luiz-gustavo10@hotmail.com","123456");
echo $usuario;



//Insere dados com storaged procedure
/*
$aluno= new Usuario();
$aluno->setEmail("Gustavo");
$aluno->setSenha("Gx1");
$aluno->insert();

echo $aluno;
*/