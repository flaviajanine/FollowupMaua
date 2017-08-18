<?php 

class Cadastrar {

	private $nome;
	private $sobrenome;
	private $data_nascimento;
	private $email;
	private $senha;


# 	------------- GET ----------------
	public function getNome():string {
		return $this->nome;
	}

	public function getSobrenome():string {
		return $this->sobrenome;
	}

	public function getDataNascimento():string {
		return $this->data_nascimento;
	}

	public function getEmail():string {
		return $this->email;
	}

	public function getSenha():string {
		return $this->senha;
	}

#  	------------- SET -----------------
	public function setNome($values){

		$this->nome = $values;
	}

	public function setSobrenome($values){

		$this->sobrenome = $values;
	}

	public function setDataNascimento($values){

		$this->data_nascimento = $values;
	}
	public function setEmail($values){

		$this->email = $values;
	}

	public function setSenha($values){

		$this->senha = $values;
	}