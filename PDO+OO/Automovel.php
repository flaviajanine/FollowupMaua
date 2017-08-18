<?php 
interface Veiculo {

	public function acelerar($velocidade);
	public function frenar($velocidade);
	public function trocarMarcha($marcha);

}

abstract class Automovel implements Veiculo { // para impementar varias  interfaces é so por vircula

public function acelerar($values) {

	echo "O veiculo acelerou ate " . $values . "km/hr"."<br/>";
}

public function frenar($values) {

	echo "O veiculo frenou ate " . $values . "km/hr"."<br/>";
}

public function trocarMarcha($values) {

	echo "O veiculo engatou a marcha " . $values . "<br/>";
}


}