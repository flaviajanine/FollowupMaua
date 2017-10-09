<?php 

/*

QUEM CADASTRA - >  QUEM / O QUE ?
ADMIN         - >  OUTROS ADMIN/PROFESSORES/CURSOS/DISCIPLINAS/ENGENHARIA
PROFESSOR     - >  NOTAS
ALUNO         - > SE CADASTRA SOZINHO

*/

function cadastrar_aluno($obj_json,$link)
{	
	
	$nome = $obj_json['nome'];
	$email = $obj_json['email'];
	$senha = $obj_json['senha'];
	$ra = $obj_json['ra'];
	$idcursos = $obj_json['idcursos']; 

	$setar = "SET @@auto_increment_increment=1";
	mysqli_query($link, $setar) or die ("Erro na query SETAR");

	$sql1 = "INSERT INTO tb_usuarios (nome_usuario, email_usuario, senha_usuario) values ('$nome','$email','$senha')" ;
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 

	$idusuario = mysqli_insert_id($link);

	$sql2 	= "INSERT INTO tb_alunos (idusuario,idcursos,ra_aluno) values ('$idusuario','$idcursos','$ra')";

	mysqli_query($link, $sql2) or die ("Erro na query 2");

	
}


function cadastrar_professor($obj_json,$link)
{	

	
	$nome = $obj_json['nome'];
	$email = $obj_json['email'];
	$senha = $obj_json['senha'];
	

	$setar = "SET @@auto_increment_increment=1";
	mysqli_query($link, $setar) or die ("Erro na query SETAR");

	$sql1 = "INSERT INTO tb_usuarios (nome_usuario, email_usuario, senha_usuario,categoria) values ('$nome','$email','$senha','1')" ;
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 

	$idusuario = mysqli_insert_id($link);

	$sql2 	= "INSERT INTO tb_professores (idusuario) values ('$idusuario')";

	mysqli_query($link, $sql2) or die ("Erro na query 2");	

	
}


function cadastrar_administrador($obj_json,$link)
{	

	
	$nome = $obj_json['nome'];
	$email = $obj_json['email'];
	$senha = $obj_json['senha'];
	
	$setar = "SET @@auto_increment_increment=1";
	mysqli_query($link, $setar) or die ("Erro na query SETAR");

	$sql1 = "INSERT INTO tb_usuarios (nome_usuario, email_usuario, senha_usuario,categoria) values ('$nome','$email','$senha','2')" ;
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 

	$idusuario = mysqli_insert_id($link);

	$sql2 	= "INSERT INTO tb_administradores (idusuario) values ('$idusuario')";

	mysqli_query($link, $sql2) or die ("Erro na query 2");	

	
}


function cadastrar_curso($obj_json,$link){

	$nome_curso = $obj_json['nome'];
	$coordenador_curso = $obj_json['coordenador'];
	$email_coordenador = $obj_json['email'];

	$setar = "SET @@auto_increment_increment=1";
	mysqli_query($link, $setar) or die ("Erro na query SETAR");

	$sql1 = "INSERT INTO tb_cursos (nome_curso, coordenador_curso,email_coordenador) values ('$nome_curso','$coordenador_curso','$email_coordenador')" ;
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 

}


function cadastrar_disciplina($obj_json,$link){

	$cod_disciplina = $obj_json['cod'];
	$nome_disciplina = $obj_json['nome_disciplina'];
	$nome_coordenador = $obj_json['nome_coordenador'];
	$email_coordenador = $obj_json['email_coordenador'];
	$semestralidade_disciplina = $obj_json['semestralidade'];
	$serie_oferecida_d = $obj_json['serie_d'];
	$serie_oferecida_n = $obj_json['serie_n'];

	$setar = "SET @@auto_increment_increment=1";
	mysqli_query($link, $setar) or die ("Erro na query SETAR");

	$sql1 = "INSERT INTO tb_disciplinas
		(cod_disciplina,nome_disciplina,nome_coordenador,email_coordenador,semestralidade_disciplina,serie_oferecida_d,serie_oferecida_n) values ('$cod_disciplina','$nome_disciplina','$nome_coordenador','$email_coordenador','$semestralidade_disciplina','$serie_oferecida_d','$serie_oferecida_n')";
	mysqli_query($link, $sql1) or die ("Erro na query 1"); 


}




