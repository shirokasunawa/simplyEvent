<?php
 session_start();
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
  $curl = curl_init();
  // set our url with curl_setopt()
curl_setopt($curl, CURLOPT_URL, $url);

// return the transfer as a string, also with setopt()
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// curl_exec() executes the started curl session
// $output contains the output string

$result = json_decode(curl_exec($curl), true);

// close curl resource to free up system resources
// (deletes the variable made by curl_init)
curl_close($curl);
var_dump($result);

for($i=0;$i<count($result);$i++)
{
  if(($result[$i]['adresseMail']==$email)||($result[$i]['password']==$password))
  {
    setcookie('dataUser', $result[$i], time() + (86400 * 7)); 
    $_SESSION['nom']=$result[$i]['nom'];
    header('Location: ./index.php');
    
  }
  
}



}
?><!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  
  <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>



<style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>
 
  <?php include("./content/header.php"); include("./content/footer.html"); ?>

</head>

    <body class="text-center">
    
        <main class="form-signin">
          <form  action="" method="post">
          
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div class="form-floating">
              <input type="email" class="form-control" name="emailInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" name="passwordInput" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary"  type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
  </form>
        </main>
        
      
        <script>
        
          
        
      
</body>
</html>