
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
  <button type="button" class="btn btn-primary">Information sur l\'entreprise</button>
  <button type="button" class="btn btn-primary">Gerer mes produits</button>
  <button type="button" class="btn btn-primary">Conversation Client</button>
</body>
</html>