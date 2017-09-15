<?php

//Classe sql que herda as funções da classe PDO
class Sql extends PDO {

	private $conn;
	public function __construct() //método construtor para conectar automaticamente no banco de dados
	{ 
		$this->conn = new PDO("mysql:dbname=ibmx_d921d6818ad95d7;host=us-cdbr-sl-dfw-01.cleardb.net","b8c11fda5798fe","6e7ae3bc");
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

	public function select($rawQuery,$params=array()){

		$stmt = $this->query($rawQuery,$params);

		//Fazer o fetchAll
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}


}