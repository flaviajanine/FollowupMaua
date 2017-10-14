<?php 

session_start();

if(isset($_SESSION['categoria'])){

	if($_SESSION['categoria']!=='1'){
		$out = array('Error'=>'Voce nao possui permissao!');
		echo json_encode($out);
	}

	else {

        require_once('config.php');
        
            $objDb = new db();
            $link = $objDb->conecta_mysql();
        
            
            $sql = "SELECT AVG(P1),AVG(P2),AVG(P3),AVG(P4) FROM tb_infos";
        
            $res = mysqli_query($link, $sql) or die ("Erro na query SELECT"); 
            
            $linha1 = mysqli_fetch_array($res);
        
            //var_dump($linha1);
         
            $sql1 = "SELECT AVG(P1),AVG(P2),AVG(P3),AVG(P4) FROM tb_historicos ";
            
            $res2 = mysqli_query($link, $sql1) or die ("Erro na query SELECT"); 
            
            $linha = mysqli_fetch_array($res2);
        
            //var_dump($linha);
           
            $sql2 = "SELECT COUNT(Aprovado) FROM tb_predicoes WHERE Aprovado = 'RP1' ";
            $res3 = mysqli_query($link, $sql2) or die ("Erro na query SELECT"); 
        
            $linha2 = mysqli_fetch_array($res3);
            
            //var_dump($linha2);
        
            $sql3 = "SELECT COUNT(Aprovado) FROM tb_predicoes WHERE Aprovado = 'TRC' ";
            $res4 = mysqli_query($link, $sql3) or die ("Erro na query SELECT"); 
        
            $linha3 = mysqli_fetch_array($res4);
            
            //var_dump($linha3);
        
            
            $sql4 = "SELECT COUNT(Aprovado) FROM tb_predicoes WHERE Aprovado = 'AP1' ";
            $res5 = mysqli_query($link, $sql4) or die ("Erro na query SELECT"); 
        
            $linha4 = mysqli_fetch_array($res5);
            
           // var_dump($linha4);

            $out = array('MP1'=>$linha1[0],'MP2'=>$linha1[1], 'MP3'=>$linha1[2],'MP4'=>$linha1[3], 'MP1h'=>$linha[0],'MP2h'=>$linha[1],'MP3h'=>$linha[2],'MP4h'=>$linha[3],'Aprovados'=>$linha4[0],'Reprovados'=>$linha2[0],'Trancaram'=>$linha3[0]);
            echo json_encode($out);

    }
}