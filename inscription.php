
<!doctype html>
<html lang="fr">

 
  <?php
  
  include("./content/header.php"); include("./content/footer.html");
  //test envoie de formulaire
 
  
  ?>


    <body class="text-center">
      
            <style>
            .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.form-group {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

       
        </style>
          <main class="form-signin">
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
    </main>

<span id="formInscription"></span>


</body>
</html>