<?php 

class Endereco{

	private $logradouro;
	private $numero;
	private $cidade;


	public function __construct($a,$b,$c) { 
		$this->logradouro = $a;
		$this->numero = $b;
		$this->cidade = $c;
	}


	public function __destruct(){

		var_dump("Destruir");
	}

}

$meuEndereco = new Endereco("Rua Ribeirao Preto","123","Sao Paulo");


//$saida = json_encode($meuEndereco);
//echo($saida);
var_dump($meuEndereco);
unset($meuEndereco);