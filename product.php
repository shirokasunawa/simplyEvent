
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
    <body class="text-center">
   <p>Produit</p>
   <button type="button" class="btn btn-primary" style="background-color:#e685b5 ;  border-color:#e685b5;" onclick="tolocationproduct()">Ajouter un produit <i class="bi bi-plus"></i></button>
</br>
   <span id="products"></span>
   <script>
       
       var jsonProduct = JSON.parse(localStorage.getItem("_products"))
       console.log(jsonProduct)
       if( Object.keys(jsonProduct).length!=0){
           var s =''
           for(var i =0;i<jsonProduct.length;i++){
            s += '<button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationUpdateProduct(\''+jsonProduct[i]["_id"]+'\')">'+jsonProduct[i]["typeProduct"]+'</button>'
           }
         
             document.getElementById("products").innerHTML = s
       }
    </script>
</body>
</html>