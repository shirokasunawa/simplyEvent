
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

  <main class="form-signin">
  
            <h1 class="h3 mb-3 fw-normal">Ajouter un produit</h1>
        
            <div class="form-group row">
    <label for="nomProduit" style="display : none" class="col-form-label">Nom du produit</label>
    <div class="">
      <input type="text"  style="display : none" class="form-control" id="nomProduit" >
    </div>
  </div>
  <span id="optionSelectTypeProduct"></span>
 
  <!--<div class="form-group row">
    <label for="typeProduit" class=" col-form-label">Choississez le type du produit</label>
    <div class="">
    <select class="form-select" id="typeProduit">
    
  </select>
  </div>
  </div>
-->
  <div class="form-group row">
    <label for="prixProduit" class=" col-form-label">Prix du produit ( en € )</label>
    <div class="">
    <input type="number" class="form-control" id="prixProduit" name="prixProduit"
       min="0" >
    </div>
  </div>
</br>
            <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="majProduct('modifier')">Modifier</button>
</br>
            <button  class="w-100 btn btn-outline-danger" style="margin-top: 1.5rem" type="button" onclick="majProduct('supprimer')">Supprimer <i class="bi bi-trash"></i></button>
            <p class="mt-5 mb-3 text-muted">My Event</p>
         
        </main>
        <script>
           
        </script>
  </div>
<span id="monproduitInfo"></span>
<script>
var typeProduct = typeProduit();
var options =''
options +='<div class="form-group row">'
options +=' <label for="typeProduit" class=" col-form-label">Choississez le type du produit</label>'
options +='  <div class="">'
options +='   <select class="form-select" id="typeProduit">'
for(var k=0;k<typeProduct.length;k++)
{
options += '<option value=\''+typeProduct[k]+'\'>'+typeProduct[k]+'</option>'
}
options +='   </select>'
options +='   </div>'
options +='   </div>'
document.getElementById("optionSelectTypeProduct").innerHTML =options

    var id =  localStorage.getItem("temporaryVarClicke")
    console.log(id)
    var jsonProduct = JSON.parse(localStorage.getItem("_products"))
    if( Object.keys(jsonProduct).length!=0){
          
           for(var i =0;i<jsonProduct.length;i++){
               console.log(jsonProduct[i])
                if(jsonProduct[i]["_id"]==id)
                {
                    console.log("trouve")
                    console.log(jsonProduct[i])
                    if(jsonProduct[i]["nomProduct"]!==undefined)
                    {
                        document.getElementById("nomProduit").style.display = 'block'
                        document.getElementById("nomProduit").value = jsonProduct[i]["nomProduct"]
                    }
                    document.getElementById("prixProduit").value = jsonProduct[i]["priceProduct"]
                    document.getElementById("typeProduit").value = jsonProduct[i]["typeProduct"]
                   // document.getElementById("monproduitInfo").innerHTML ='<p>'+jsonProduct[i]["typeProduct"]+' '+jsonProduct[i]["priceProduct"]+'</p>'
                }
           }
         
            
       }
  
</script>
</body>
</html>