<?php

//Classe sql que herda as funções da classe PDO
class Sql extends PDO {

	private $conn;
	public function __construct() //método construtor para conectar automaticamente no banco de dados
	{ 
		$this->conn = new PDO("mysql:dbname=mauacompanha_db;host=localhost","root","");
	} 

	//Metodo que externa um array como parametro, varias chave/valores dentro do array.
	private function setParams($statment,$parameters=array()){

		foreach ($parameters as $key => $value) {
			
			$this->setParam($statment,$key,$value);

		}

	}

	//Método que externa um parametro só, envio chave/valor ao inves de um array inteiro.
	private function setParam($statment,$key,$value){

		$statment->bindParam($key,$value);
	}



	//Metodo que faz a execução do comando no banco de dados.  
	//rawQuery - comando sql que trataremos depois 
	//Só executao "metodo" , não mostra.
	public function query($rawQuery,$params = array()){

		$stmt = $this->conn->prepare($rawQuery);

		$this->setParams($stmt,$params);

		$stmt->execute();

		return $stmt;
		

	}

	//Executa o "método" e mostra.

	/*public function select($rawQuery,$params=array()) : array{

		$stmt = $this->query($rawQuery,$params);

		//Fazer o fetchAll
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	*/

}