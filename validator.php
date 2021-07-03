<?php
 if(isset($_POST))
 {
    
     //prepare le tableau pour les données post
 
if (isset($_POST['NameClient']))  $name= $_POST['NameClient'];
if (isset($_POST['NameClient'])) $login=  $name;
if (isset($_POST['EmailClient']))  $mail= $_POST['EmailClient'];
if (isset($_POST['passwordClient']))  $mdp= $_POST['passwordClient'];
if (isset($_POST['Name']))  $name= $_POST['Name'];
if (isset($_POST['Name'])) $login=  $_POST['Name'];
if (isset($_POST['Adresse']))  $adresse= $_POST['Adresse'];
if (isset($_POST['EmailSociety']))  $mail= $_POST['EmailSociety'];
if (isset($_POST['NameSociety']))  $nomSociety= $_POST['NameSociety'];
if (isset($_POST['passwordSociety']))  $mdp= $_POST['passwordSociety'];

function curlPost($url, $data) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error !== '') {
        throw new \Exception($error);
    }

    return $response;
}

  
     if($nomSociety!=null)
     {
       

       $params["nameUser"]=$name;
       $params["roleUser"]="entreprise";
       $params["adresseMail"]=$mail;
       $params["addressSociety"]= $adresse;
       $params["login"]=$login;
       $params["password"]= $mdp;
       $params["nameSociety"]=$nomSociety;
     }
     else
     {
         
         //preparer les données post pour inscrire les clients
         $paramsClient = array(
            "nom" =>"zizi"
            // 'role'=>'client',
            // 'adresseMail'=>$mail,
            // 'login'=>$login,
            // 'password'=>$mdp,
         );
        //  var_dump($paramsClient);
         $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($paramsClient)
            )
        );
        //  var_dump($paramsClient);
         $response = curlPost('http://localhost:3030/events/client', $paramsClient);
         var_dump($response);
        

     }
  // var_dump($params);
  
 /* 
   if($params["role"]!=null)
   {
    curl_setopt($ch, CURLOPT_URL, "http://localhost:3030/events/client");
   }
   else if($params["roleUser"]!=null)
   {
    curl_setopt($ch, CURLOPT_URL, "http://localhost:3030/events/society");
   }*/
  
// do anything you want with your response

 }
 else
 {
    var_dump('no data');
 }
?>
