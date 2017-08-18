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


	# --------EXEMPLO DE SELECT UTILIZANDO DAO ------ 

	public function loadById($nome){

		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_usuario WHERE id_usuario = :NOME",array(":NOME"=>$nome 
			));

		if(isset($result[0])){

			$row = $result[0];

			$this->setNome($row['nome']);
			$this->setSobrenome($row['sobrenome']);
			$this->setDataNascimento(new DateTime($row['data_nascimento']));
			$this->setEmail($row['email']);
			$this->setSenha($row['senha']);
		}

	}

	public function __toString(){

		return json_encode(array(""=> , ));
	}

	}