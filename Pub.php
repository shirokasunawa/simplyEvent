
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
  <hr class="featurette-divider">

<div class="row featurette">
  <div class="col-md-7 order-md-2">
    <span id ="pubchoix"></span>
   
    <p class="lead">Veuillez ajouter une photo et valider</p>
</br>
</br>
</br>
</br>
    <div class="d-flex justify-content-center">
      <span id="contentByTypePub"></span>
</div>
  </div>
  <div class="col-md-5 order-md-1">
  <form runat="server">
  <img id="myimg"  width="500" height="500" src="./imgDefault.PNG">
  </form>
    <!--<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>-->
    <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile" accept="image/png, image/jpeg">
  <label class="custom-file-label" for="customFile">Choisir votre image</label>
</div>
  </div>
</div>
  <div class="d-flex justify-content-center">
  
<button type="button" class="btn btn-primary "onclick="valid()">Valider</button>
  </div>
 
</body>
<script>
  var typePub =localStorage.getItem("Pubchoisis")
document.getElementById("pubchoix").innerHTML= ' <h2 class="featurette-heading">Vous avez choisis la pub par : <span  class="text-muted">'+typePub+'</span></h2>'
var prepaAff=''
switch(typePub){
  case 'emplacement':
    prepaAff +=' <select id="selectChoixEmplacement" class="form-select" aria-label="Default select example">'
    prepaAff +='<option selected>Choisir l\'emplacement</option>'
    prepaAff +='<option value="banner">banner</option>'
    prepaAff +='<option value="coter">coter</option>'
    prepaAff +='<option value="modal">modal</option>'
    prepaAff +='</select></br>'
    var future = new Date(); // get today date
future.setDate(future.getDate() + 1); // add 7 days
var finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate();
console.log(finalDate);
prepaAff +='  <p>Votre pub serra afficher pendant 1jour . Date de Fin : <mark>'+finalDate+'</mark> </p>'
document.getElementById("contentByTypePub").innerHTML=prepaAff
    break; 
  case 'abonnement':
    var future = new Date(); // get today date
future.setDate(future.getDate() + 1); // add 7 days
var finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate();
console.log(finalDate);
prepaAff +='  <p>Votre pub serra afficher pendant 1jour . Date de Fin : <mark>'+finalDate+'</mark> </p>'
prepaAff +='  <p>Votre pub serra afficher en mode  <mark>Banner</mark> </p>'
document.getElementById("contentByTypePub").innerHTML=prepaAff
  break; 
  case 'nbrclick':
    var future = new Date(); // get today date
future.setDate(future.getDate() + 1); // add 7 days
var finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate();
console.log(finalDate);

prepaAff +='  <p>Votre pub continuera a s\'afficher tant que les clients n\'auront pas cliquer jusqu\'a  <mark>100 clicks</mark> </p>'
document.getElementById("contentByTypePub").innerHTML=prepaAff
  break; 
}

customFile.onchange = evt => {
  var size= document.getElementById("customFile").files[0].size;
      if(size>68397){
            alert('File too large');
            return false;
        }
  const [file] = customFile.files
  if (file) {
    myimg.src = URL.createObjectURL(file)
  }
}
    function valid(){
      var size= document.getElementById("customFile").files[0].size;
      if(size>68397){
            alert('File too large');
            return false;
        }
        var file= document.getElementById("customFile").files[0];
        var reader = new FileReader();
  reader.onloadend = function() {
    //enregistrer reader.result dans bdd en base64 String ??
    console.log('Encoded Base 64 File String:', reader.result);
    
    /******************* for Binary ***********************/
    /*
    var data=(reader.result).split(',')[1];
     var binaryBlob = atob(data);
     console.log('Encoded Binary File String:', binaryBlob);

var img= document.getElementById("myimg")
img.src = 'data:image/jpeg;base64,' + btoa(binaryBlob);

*/
var url = 'http://localhost:3030/events/photo/'
var body = {
                "img": reader.result
               
              
                
            };
            const xhr = new XMLHttpRequest()
            const data = JSON.stringify(body)
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
               
                    ajoutepub(res["_id"])
                }
            };
            xhr.send(data)
  }
  reader.readAsDataURL(file);
    }
  
    function ajoutepub(idphoto){
      var typePub =localStorage.getItem("Pubchoisis")
      var body 
      var future = new Date(); // get today date
    future.setDate(future.getDate() + 1); // add 7 days
    var finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate();
      switch(typePub){
  case 'emplacement':
    var emplacement = document.getElementById("selectChoixEmplacement").value
    
    body = {
      "endroit" : emplacement,
      "typeAbo" :"emplacement",
      "dateFin" : finalDate
    }
    break; 
  case 'abonnement':
    body = {
      "endroit" : "banner",
      "typeAbo" :"abonnement",
      "dateFin" : finalDate
    }
  break; 
  case 'nbrclick':
    body = {
      "endroit" : "modal",
      "typeAbo" :"nbrclick",
      "nbrClick" : 100,
      "nbrClickReel":0
    }
  break; 
}
var url = 'http://localhost:3030/events/pub/'
const xhr = new XMLHttpRequest()
            const data = JSON.stringify(body)
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
               
                    assignPub(idphoto,res["_id"])
                }
            };
            xhr.send(data)
    }
function assignPub(idphoto,idpub)
{
  
var url = 'http://localhost:3030/events/pub/'+idpub+'/'+idphoto
const xhr = new XMLHttpRequest()
            
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
               
              assignPubUserSociety(idpub)
                }
            };
            xhr.send()
}

function assignPubUserSociety(idpub){
  var id= localStorage.getItem("_id");
var url = 'http://localhost:3030/events/pubSociety/'+idpub+'/'+id
const xhr = new XMLHttpRequest()
            
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
               
                document.location.href = "MonEspacePub.php"
                }
            };
            xhr.send()
}
    </script>
</html>