
<!doctype html>
<html lang="fr">
<body onload="testConnexion()">
<?php  include("./content/header.php");  include("./content/footer.html"); ?>
  <!-- Le reste du contenu -->
<script>
   let cookie= getCookie('nomuser')
  if( cookie=='' )
  {
    document.location.href = "index.php"
  }
  else{
      
  }
  </script>
    <body class="text-center">
        
  <div class="d-flex justify-content-center">
  <main class="form-signin">
        
          
            <h1 class="h3 mb-3 fw-normal">Information sur l'entreprise</h1>
        
            <div class="form-group row">
    <label for="nomSocietyInput" class="col-form-label">Nom de l'entreprise</label>
    <div class="">
      <input type="text"  class="form-control" id="nomSocietyInput" >
    </div>
  </div>
  <div class="form-group row">
    <label for="adresseSocietyInput" class=" col-form-label">Adresse de l'entreprise</label>
    <div class="">
      <input type="text"  class="form-control" id="adresseSocietyInput" >
    </div>
  </div>
           
            <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="updateSociety()">Modifier</button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
            <span id="textConnexion"></span>
        </main>
        <script>
             document.getElementById("nomSocietyInput").value = localStorage.getItem("nameSociety")
             document.getElementById("adresseSocietyInput").value = localStorage.getItem("adresse")
        </script>
  </div>
</body>
</html>