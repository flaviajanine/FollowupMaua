<?php 

//Classe usuario que executa diversas funcoes, como busca, validacao, insercao de dados e etc.


class Usuario {

	private $nome;
	private $sobrenome;
	private $data_nascimento;
	private $email;
	private $senha;
	private $ra;
	private $curso;

# 	------------- GET ----------------
	public function getRa() {
		return $this->ra;
	}

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

	public function getCurso() {
		return $this->curso;
	}

#  	------------- SET -----------------
	public function setRa($values){

		$this->ra = $values;
	}

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

	public function setCurso($values){

		$this->curso = $values;
	}

	# --------EXEMPLO DE SELECT UTILIZANDO DAO ------ 
	//Traz uma informação carregada pelo nome

	public function loadByName($nome){

		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_aluno WHERE nome_aluno = :NOME",array(":NOME"=>$nome 
			));

		if(isset($result[0])){

			$this->setData($result[0]);
		}

	}

	//Traz uma lista buscando pelo nome

	public static function getList(){
		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_aluno ORDER BY nome_aluno");
	}

	//traz uma lista buscando pelo email

	public static function search($login){

		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_aluno WHERE email_aluno LIKE :SEARCH ORDER BY email_aluno",array(':SEARCH'=>$login));
	}

	//Validar Email no banco de dados

	public static function validar_email($email){

		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_aluno WHERE email_aluno LIKE :EMAIL",array(':EMAIL' => $email));

	}

	//Validar Senha no Banco de Dados

	public static function validar_senha($senha){

		$sql = new Sql();
		return $sql->select("SELECT * FROM tb_aluno WHERE senha_aluno LIKE :SENHA" ,array(':SENHA' => $senha));

	}


	//Busca uma lista de acordo com usuario e senha trazendo as informações do $row

	public function login($login,$password){
		$sql = new Sql();
		$result = $sql->select("SELECT * FROM tb_aluno WHERE email_aluno = :LOGIN AND senha_aluno = :PASSWORD",array(":LOGIN"=>$login ,":PASSWORD"=>$password
			));

		if(isset($result[0])){

		echo("Login efetuado com sucesso com sucesso!");

		}

		else {
			
			$data = array('acesso'=>$login, 'senha'=>$password);
			echo json_encode($data);
			echo("Erro!");

		}

	}

	public function setData($data){

		$this->setRa($data['ra_aluno']);
		$this->setNome($data['nome_aluno']);
		$this->setEmail($data['email_aluno']);
		$this->setSenha($data['senha_aluno']);
		$this->setCurso($data['curso_aluno']);

	}

//========AQUI=======================================
	public function insert(){
		$sql = new Sql();
		$sql->query("INSERT INTO tb_aluno(ra_aluno,nome_aluno,email_aluno,senha_aluno,curso_aluno) values (:RA,:NOME,:EMAIL,:SENHA,:CURSO)", array(
			':RA'=>$this->getRa(),
			':NOME'=>$this->getNome(),
			':EMAIL'=>$this->getEmail(),
			':SENHA'=>$this->getSenha(),
			':CURSO'=>$this->getCurso()
		));

		}



	public function update($login, $password){
		$this->setEmail($login);
		$this->setSenha($password);
		$sql = new Sql();
		$sql->query("UPDATE tb_aluno SET email_aluno = :LOGIN, senha_aluno = :PASSWORD WHERE nome = :NOME", array(
			':LOGIN'=>$this->getEmail(),
			':PASSWORD'=>$this->getSenha(),
			':NOME'=>$this->getNome()
		));
	}

	public function delete(){
		$sql = new Sql();
		$sql->query("DELETE FROM tb_aluno WHERE nome_aluno = :NOME", array(
			':NOME'=>$this->getNome()
		));
		$this->setNome(0);
		$this->setEmail("");
		$this->setSenha("");
		$this->setDataNascimento(new DateTime());
	}


	public function __construct($ra = "",$nome = "",$email = "", $senha = "",$curso = ""){
	
		$this->setRa($ra);
		$this->setNome($nome);
		$this->setEmail($email);
		$this->setSenha($senha);
		$this->setCurso($curso);
	}

//===================================================
	public function __toString(){

		
		return json_encode(array(
			"ra"=>$this->getRa(),
			"nome"=>$this->getNome() ,
			"email"=>$this->getEmail() ,
			"senha"=>$this->getSenha() ,
			"curso"=>$this->getCurso()
			));
	}

}
