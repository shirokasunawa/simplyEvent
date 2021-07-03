
<!doctype html>
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
 
  <?php
  
  include("./content/header.php"); include("./content/footer.html");
  //test envoie de formulaire
 
  
  ?>

</head>
<script>


    </script>  
    <body class="text-center">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="exampleRclientCheckadios" id="clientCheck" value="client" onchange="afficheForm();">
  <label class="form-check-label" for="clientCheck">
    Je suis un particulier
  </label>

  </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="exampleRclientCheckadios" id="societyCheck" value="society" onchange="afficheForm();">
  <label class="form-check-label" for="societyChecks">
    Je suis une entreprise
  </label>

    </div>


<span id="formInscription"></span>


</body>
</html>