<?php 

//Exemplo de uso das classes e execucao de uma query


require_once("config.php");

cors();

function cors() {
    
        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
    
        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
            exit(0);
        }
    
        echo "You have CORS!";
    }

echo "BEM-VINDO A PAGINA INICIAL";
header('Location: \angular\dist\index.html');
exit;

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