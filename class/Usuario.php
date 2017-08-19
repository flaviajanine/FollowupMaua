<?php 

class Usuario {

	private $nome;
	private $sobrenome;
	private $data_nascimento;
	private $email;
	private $senha;


# 	------------- GET ----------------
	public function getNome() {
		return $this->nome;
	}

	public function getSobrenome() {
		return $this->sobrenome;
	}

	public function getDataNascimento() {
		return $this->data_nascimento;
	}

	public function getEmail() {
		return $this->email;
	}

	public function getSenha() {
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

	public function loadByName($nome){

		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_usuario WHERE nome = :NOME",array(":NOME"=>$nome 
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

		return json_encode(array(
			"nome"=>$this->getNome() ,
			"sobrenome"=>$this->getSobrenome() ,
			"data_nascimento"=>$this->getDataNascimento()->format("d/m/Y H:i:s") ,
			"email"=>$this->getEmail() ,
			"senha"=>$this->getSenha() ,
		 ));
	}

	}