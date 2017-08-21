<?php 

//Exemplo de uso das classes e execucao de uma query

require_once("config.php");

echo "BEM-VINDO A PAGINA INICIAL";

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

/*
$usuario = new Usuario();
$usuario->login("luiz-gustavo10@hotmail.com","123456");
echo $usuario;
*/

//Criando um novo usuário
//$aluno = new Usuario(/*"$nome","$sobrenome","$date","$senha","$email"*/);
//$aluno->insert();
//echo $aluno;

/*
//Alterar um usuário
$usuario = new Usuario();
$usuario->loadByName("Gus");
$usuario->update("professor", "!@#$%¨&*");
echo $usuario;
*/
/*
$usuario = new Usuario();
$usuario->loadByName("Luiz");
$usuario->delete();
echo $usuario;
*/