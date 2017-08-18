<?php

//AUTO LOAD EM DIRETORIOS

function incluirClasses($nomeClasse){
	if(file_exists($nomeClasse.".php")===true){
		require_once($nomeClasse.".php");
	}

}
spl_autoload_register("incluirClasses");
spl_autoload_register(function($nomeClasse){

	if(file_exists("Abstrata".DIRECTORY_SEPARATOR.$nomeClasse.".php")===true) //"Abstrata seria o nome da pasta-diretorio que voce colocou a classe "main"
	{
		require_once("Abstrata".DIRECTORY_SEPARATOR.$nomeClasse.".php");

	}
});

$carro = new DelRey();
$carro->acelerar(100);