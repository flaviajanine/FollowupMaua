<?php 

class Carro{

	private $modelo;
	private $motor;
	private $ano;

	public function getModelo(){ //Pegar o modelo

		return $this->modelo;
	}

	public function setModelo($value){//Receber o parametro
		$this->modelo = $value;

	}

	public function getMotor():float{ //Pegar o modelo

		return $this->motor;
	}

	public function setMotor($value){//Receber o parametro
		$this->motor = $value;

	}


		public function getAno():int{ //Pegar o modelo

		return $this->ano;
	}

	public function setAno($value){//Receber o parametro
		$this->ano = $value;

	}


	public function exibir(){
		
		$a = array('modelo' =>$this->getModelo() ,
					'motor' =>$this->getMotor() ,
					'ano' =>$this->getAno()
		 );

		return json_encode($a);
	}

}
	$gol = new Carro();
	$gol->setModelo("Gol GT");
	$gol->setMotor("1.6");
	$gol->setAno("2017");

	print_r($gol->exibir());