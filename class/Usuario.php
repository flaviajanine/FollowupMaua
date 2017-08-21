<?php 

//Classe usuario que executa diversas funcoes, como busca, validacao, insercao de dados e etc.


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
	//Traz uma informação carregada pelo nome

	public function loadByName($nome){

		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_usuario WHERE nome = :NOME",array(":NOME"=>$nome 
			));

		if(isset($result[0])){

			$this->setData($result[0]);
		}

	}

	//Traz uma lista buscando pelo nome

	public static function getList(){
		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_usuario ORDER BY nome");
	}

	//traz uma lista buscando pelo email

	public static function search($login){

		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_usuario WHERE email LIKE :SEARCH ORDER BY email",array(':SEARCH'=>"%".$login."%"));
	}

	//Validar Email no banco de dados

	public static function validar($email){

		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_usuario WHERE email LIKE :EMAIL",array(':EMAIL' => $email));

	}



	//Busca uma lista de acordo com usuario e senha trazendo as informações do $row

	public function login($login,$password){
		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_usuario WHERE email = :LOGIN AND senha = :PASSWORD",array(":LOGIN"=>$login ,":PASSWORD"=>$password
			));

		if(isset($result[0])){

			$this->setData($result[0]);

		}

		else {
			throw new Exception("Login ou Senha invalidos");
			
		}

	}

	public function setData($data){

		$this->setNome($data['nome']);
		$this->setSobrenome($data['sobrenome']);
		//$this->setDataNascimento(new Date($data['data_nascimento']));
		$this->setEmail($data['email']);
		$this->setSenha($data['senha']);

	}

//========AQUI=======================================
	public function insert(){
		$sql = new Sql();
		$sql->query("INSERT INTO tb_usuario(nome,sobrenome,email,senha) values (:NOME,:SOBRENOME,:EMAIL,:SENHA)", array(
			':NOME'=>$this->getNome(),
			':SOBRENOME'=>$this->getSobrenome(),
			':EMAIL'=>$this->getEmail(),
			':SENHA'=>$this->getSenha()
		));

		}



	

	public function update($login, $password){
		$this->setEmail($login);
		$this->setSenha($password);
		$sql = new Sql();
		$sql->query("UPDATE tb_usuario SET email = :LOGIN, senha = :PASSWORD WHERE nome = :NOME", array(
			':LOGIN'=>$this->getEmail(),
			':PASSWORD'=>$this->getSenha(),
			':NOME'=>$this->getNome()
		));
	}

	public function delete(){
		$sql = new Sql();
		$sql->query("DELETE FROM tb_usuario WHERE nome = :NOME", array(
			':NOME'=>$this->getNome()
		));
		$this->setNome(0);
		$this->setEmail("");
		$this->setSenha("");
		$this->setDataNascimento(new DateTime());
	}


	public function __construct($nome = "",$sobrenome = "",$email = "", $senha = ""){
	
		$this->setNome($nome);
		$this->setSobrenome($sobrenome);
		//$this->setDataNascimento($data_nascimento);
		$this->setEmail($email);
		$this->setSenha($senha);
	}

//===================================================
	public function __toString(){

		
		return json_encode(array(
			"nome"=>$this->getNome() ,
			"sobrenome"=>$this->getSobrenome() ,
		//	"data_nascimento"=>$this->getDataNascimento(),//->format("d/m/Y H:i:s") ,
			"email"=>$this->getEmail() ,
			"senha"=>$this->getSenha() ,
			));
	}

}
