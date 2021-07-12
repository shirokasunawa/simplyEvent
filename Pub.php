
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
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile" accept="image/png, image/jpeg">
  <label class="custom-file-label" for="customFile">Choisir votre image</label>
</div>
<button type="button" class="btn btn-primary"onclick="valid()">Valider</button>
  </div>
  <img id="myimg" >
</body>
<script>
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
               
                
                }
            };
            xhr.send(data)
  }
  reader.readAsDataURL(file);
    }
   
    </script>
</html>