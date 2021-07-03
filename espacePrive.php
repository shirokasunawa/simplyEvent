
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
  <span id="titre"></span>
  <button type="button" class="btn btn-primary">Information sur l\'entreprise</button>
  
</body>
</html>