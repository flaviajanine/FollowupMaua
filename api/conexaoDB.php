<?php

/* https://phpbestpractices.org/#utf-8 */
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

class db {


	//IBM Credencial
	private $host = 'us-cdbr-sl-dfw-01.cleardb.net';
	private $usuario_db = 'b18bb65737b3b9';
	private $senha_db = '50249e97';
	private $data_base = 'ibmx_8f86a3388a38e34';

	//LocalHost Credencial
	#private $host = 'localhost';
	#private $usuario_db = 'root';
	#private $senha_db = '';
	#private $data_base = 'maua_db';



	public function conecta_mysql(){

		//criar a conexao
		$con = mysqli_connect($this->host, $this->usuario_db, $this->senha_db, $this->data_base);

		//ajustar o charset de comunicação entre a aplicação e o banco de dados
		mysqli_set_charset($con, 'utf8');

		//verficar se houve erro de conexão
		if(mysqli_connect_errno()){

			$out = array('Erro'=>'Ao tentar se conectar com o BD MySQL');
			$out_json = json_encode($out);
 			echo ($out_json);
			mysqli_connect_error();	
		}

		return $con;
	}

}