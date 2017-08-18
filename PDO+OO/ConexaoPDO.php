<?php 

$conn = new PDO("mysql:dbname=imobiliaria_db;host=localhost","root","");

$stmt = $conn->prepare("SELECT * FROM usuario ORDER BY email");

$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

//$saida = array('Nome'=>'','Email'=>'','Senha'=>'','Categoria'=>'',);

$saida = json_encode($results);
echo($saida);

