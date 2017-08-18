<?php

class Pessoa { //classe

public $nome; //atributo

public function falar(){ //metodo
	return "Meu nome e " .$this->nome; //this aponta para o atributo
}
}

$luiz = new Pessoa(); // instacia a classe
$luiz->nome= "Luiz Gustavo"; //atribui "valor Luiz Gustavo" a variavel nome;

$saida = json_encode($luiz); //manda pro front em JSON
echo ($saida); //exibe o JSON
//echo $luiz->falar(); //executa o metodo falar.

