<?php

session_start();

session_destroy();

$out = array('Msg'=>'saiu');
   $out_json = json_encode($out);
    echo ($out_json);