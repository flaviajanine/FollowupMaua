<?php 

abstract class Animal {

	public function falar(){

		return "Som";

	}


	public function mover(){

		return "Anda";

	}

}

class Cachorro extends Animal{

	public function falar(){
		return "Late";
	}
}

class Gato extends Animal{

	public function falar(){
		return "Mia e ".parent::falar();
	}
}

$pluto = new Cachorro();
echo $pluto->falar() . "<br/>";
echo $pluto->mover() . "<br/>";

echo "-----------------". "<br/>";;

$garfield = new Gato();
echo $garfield->falar(). "<br/>";
echo $garfield->mover(). "<br/>";


