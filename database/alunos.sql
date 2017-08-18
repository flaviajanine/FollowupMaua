create database mauacompanha_db;

use mauacompanha_db;

create table tb_usuario(
	id_usuario int not null primary key auto_increment,
	nome varchar(50) not null,
	sobrenome varchar(50) not null,
	data_nascimento date not null,
	email varchar(50) not null,
	senha varchar(32) not null
);

create table tb_aluno(
	ra_aluno int primary key not null,
	nome varchar(50) not null,
	email varchar(50) not null,
	/*senha varchar(32) not null ,*/
	data_nascimento date,
	telefone int,
	celular int,
	curso varchar(50) not null	
);

create table tb_disciplina(
	cod_disciplina varchar(10),
	nome_disciplina varchar(50),
	semestralidade varchar(2),
	serie_oferecida varchar(2)
);

create table tb_geometria_analitica(
	cod_disciplina varchar(10),
	ra_aluno int ,
	prova_p1  float ,
	prova_p2  float	,
	prova_ps1 float ,
	prova_p3  float	,
	prova_p4  float	,
	prova_ps2 float ,
	t1 float,
	t2 float,
	t3 float,
	t4 float,
	t5 float
);