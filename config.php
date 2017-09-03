<?php 

//Funcao namespace - Organizar melhor o diretorio

header("Access-Control-Allow-Origin: *");

spl_autoload_register(function($nameClass){

	
	$dirClass = "class"; //Pasta que as classes estao localizadas.
	$filename = $dirClass. DIRECTORY_SEPARATOR . $nameClass.".php"; //DIRECTORY_SEPARATOR = '\' .

	if (file_exists($filename)) { // compara com o valor true.

		require_once($filename);
	}

});



