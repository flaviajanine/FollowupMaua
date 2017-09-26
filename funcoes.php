<?php 

function cadastrar_aluno($obj_json,$link)
{	
		//JSON Padrão
	$ra = $obj_json['ra'];
	$nome = $obj_json['nome'];
	$email = $obj_json['email'];
	$senha = $obj_json['senha'];
	//$confirmarSenha = $obj_json['confirmarSenha'];
	$curso = $obj_json['curso'];


		

	$sql1	= "INSERT INTO tb_aluno(ra_aluno,nome_aluno,email_aluno,senha_aluno,curso_aluno) values ('$ra','$nome','$email','$senha','$curso')" ;
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 
		
	
}