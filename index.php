<?php
  session_start();


?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  
  <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<?php  include("./content/header.php"); include("./content/footer.html"); ?>
</head>
<body>
  <span id="titre"></span>
  
<?php
if(isset($_SESSION["nom"]))
{
  if (key_exists('dataUser', $_COOKIE))
  {
    var_dump($_COOKIE['dataUser']);
  }
  

  ?> <script>
   
    document.getElementById("titre").innerHTML = '<h1> Bonjour <?php echo $_SESSION["nom"] ?>  </h1>';
    document.getElementById("buttunLogin").style.display = 'none';
    document.getElementById("buttunSignUp").style.display = 'none';
    document.getElementById("buttunDeco").style.display = 'block';
  </script>
  <?php
}

?>
  <!-- Le reste du contenu -->
  ...
</body>
</html>