<?php

require('./pdf/fpdf.php');

require_once('config.php');

$objDb = new db();
$link = $objDb->conecta_mysql();

$pdf=new FPDF();

//Disable automatic page break
$pdf->SetAutoPageBreak(false);

//Add first page
$pdf->AddPage();

//set initial y axis position per page
$y_axis_initial = 25;

//print column titles
$pdf->SetFillColor(232, 232, 232);
$pdf->SetFont('Arial', 'B', 12);
$pdf->SetY($y_axis_initial);
$pdf->SetX(25);
$pdf->Cell(80, 6, 'RA', 1, 0, 'L', 1);
$pdf->Cell(30, 6, 'Situação', 1, 0, 'L', 1);
$pdf->Cell(50, 6, 'Acurácia', 1, 0, 'R', 1);

$row_height = 20;
$y_axis = 2;

$y_axis = $y_axis + $row_height;

//Select the Products you want to show in your PDF file

$sql = "SELECT RA_HASH, Aprovado, Acuracia FROM tb_predicoes WHERE (Acuracia > 0.7) and (Aprovado = 'RP1' or Aprovado ='TRC') ORDER BY Aprovado DESC;";
$result = mysqli_query($link, $sql) or die ("Erro na query SELECT"); 

//initialize counter
$i = 0;

//Set maximum rows per page
$max = 25;

//Set Row Height
$row_height = 6;


while($row = mysqli_fetch_array($result))
{
    //If the current row is the last one, create new page and print column title
    if ($i == $max)
    {
        $pdf->AddPage();

        //print column titles for the current page
        $pdf->SetY($y_axis_initial);
        $pdf->SetX(25);
        $pdf->Cell(80, 6, 'RA', 1, 0, 'L', 1);
        $pdf->Cell(30, 6, 'Situação', 1, 0, 'L', 1);
        $pdf->Cell(50, 6, 'Acurácia', 1, 0, 'R', 1);
        
        //Go to next row
        $y_axis = $y_axis + $row_height;
        
        //Set $i variable to 0 (first row)
        $i = 0;
    }


    $RA_HASH = $row[0];
    $Aprovado = $row[1];
    $Acuracia = $row[2];

    $pdf->SetY($y_axis);
    $pdf->SetX(25);
    $pdf->Cell(80, 6, $RA_HASH, 1, 0, 'L', 1);
    $pdf->Cell(30, 6, $Aprovado, 1, 0, 'L', 1);
    $pdf->Cell(50, 6, $Acuracia, 1, 0, 'R', 1);

    //Go to next row
    $y_axis = $y_axis + $row_height;
    $i = $i + 1;
}

mysqli_close($link);

if (file_exists('./alunos.pdf')){
    $file = './alunos.pdf';
    unlink($file);
    $pdf->Output('F','./alunos.pdf');
    $out = array('File'=>'1');
    echo json_encode($out);
    
}else{
    
//Send file
$pdf->Output('F','./alunos.pdf');
$out = array('File'=>'1');
echo json_encode($out);

}



?>