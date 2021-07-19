
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
        
          
            <h1 class="h3 mb-3 fw-normal">Information sur le profil </h1>
        
            <div class="form-group row">
    <label for="nameUserInput" class="col-form-label">Nom de l'utilisateur</label>
    <div class="">
      <input type="text"  class="form-control" id="nameUserInput" >
    </div>
  </div>
  <div class="form-group row">
    <label for="adresseMailInput" class=" col-form-label">Adresse mail</label>
    <div class="">
    <input type="email" class="form-control" id="adresseMailInput" aria-describedby="emailHelp" >
    </div>
  </div>
  <div class="form-group row">
    <label for="passwordInput" class=" col-form-label">Password</label>
    <div class="">
    <input type="email" class="form-control" id="passwordInput" aria-describedby="emailHelp"  >
    </div>
  </div>
</br>
            <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="majProfil('modifier')">Modifier</button>
            <button  class="w-100 btn btn-outline-danger" style="margin-top: 1.5rem" type="button" onclick="majProfil('supprimer')">Supprimer <i class="bi bi-trash"></i></button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
            <span id="textConnexion"></span>
        </main>
        <script>
           
                document.getElementById("nameUserInput").value = localStorage.getItem("nom")
                document.getElementById("adresseMailInput").value = localStorage.getItem("adresseMail")
                document.getElementById("passwordInput").value = localStorage.getItem("password")
            
           
        </script>
  </div>
</body>
</html>