
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
        
          
            <h1 class="h3 mb-3 fw-normal">Ajouter un produit</h1>
        
            <div class="form-group row">
    <label for="nomProduit" class="col-form-label">Nom du produit</label>
    <div class="">
      <input type="text"  class="form-control" id="nomProduit" >
    </div>
  </div>
  <span id="optionSelectTypeProduct"></span>
  
   
    
   
 

  <div class="form-group row">
    <label for="prixProduit" class=" col-form-label">Prix du produit ( en € )</label>
    <div class="">
    <input type="number" class="form-control" id="prixProduit" name="prixProduit"
       min="0" >
    </div>
  </div>
</br>
            <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="addProduct()">Ajouter</button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
         
        </main>
        <script>
           var typeProduct = typeProduit();
           console.log(typeProduct)
           var options=""
 options +='<div class="form-group row">'
 options +=' <label for="typeProduit" class=" col-form-label">Choississez le type du produit</label>'
 options +=' <select class="form-select" id="typeProduit">'
for(var k=0;k<typeProduct.length;k++)
{
options += '<option value=\''+typeProduct[k]+'\' >'+typeProduct[k]+'</option>'
}
options +=' </select>'
options +='   </div>'
console.log(options)
document.getElementById("optionSelectTypeProduct").innerHTML =options
        </script>
  </div>
</body>
</html>