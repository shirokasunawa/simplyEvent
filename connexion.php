<?php
/*
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
if(isset($_POST['emailInput'])&&isset($_POST['passwordInput'] ))
{
  $email =$_POST['emailInput'];
  $password =$_POST['passwordInput'];
 // var_dump($email);
  $url = 'http://localhost:3030/events/client';
 
 /* $response = file_get_contents($url);
  $response = json_decode($response);
  var_dump($response[1]);*/
 // $curl = curl_init();
  // set our url with curl_setopt()
//curl_setopt($curl, CURLOPT_URL, $url);

// return the transfer as a string, also with setopt()
//curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// curl_exec() executes the started curl session
// $output contains the output string

//$result = json_decode(curl_exec($curl), true);

// close curl resource to free up system resources
// (deletes the variable made by curl_init)
//curl_close($curl);
//var_dump($result);

   // header('Location: ./index.php');
  


//}
?><!doctype html>
<html lang="fr">



 
  <?php include("./content/header.php"); include("./content/footer.html"); ?>



    <body class="text-center">
           <style>
            .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

        </style>
        <main class="form-signin">
        
          
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating">
              <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="passwordInput" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
        
           
            <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="auth()">Sign in</button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
            <span id="textConnexion"></span>
        </main>
        
      
 
          
        
      
</body>
</html>