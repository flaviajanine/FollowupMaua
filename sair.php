<?php 

session_start();

session_destroy();

$out = array('Obrigado'=>'Esperamos voce de volta em breve!');
			$out_json = json_encode($out);
 			echo ($out_json);