
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
  </script>
  <div class="d-flex justify-content-center">
 <button type="button" class="btn btn-primary" style=" width: 18rem;margin: 1.5rem 1.5rem;height:10rem;background-color:#e685b5 ;  border-color:#e685b5; " onclick="infoEntreprise()">Information sur l'entreprise</button>
 <button type="button" class="btn btn-primary" style="width: 18rem; margin: 1.5rem 1.5rem;height:10rem;background-color:#e685b5 ;  border-color:#e685b5;" onclick="product()">Gerer mes produits</button>
 <button type="button" class="btn btn-primary" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;background-color:#e685b5 ;  border-color:#e685b5;">Conversation Client</button>
 <button type="button" class="btn btn-primary" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;background-color:#e685b5 ;  border-color:#e685b5;"onclick="pub()">Publicite</button>
  </div>
</body>
</html>