
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
<span id="essaie"></span>

</body>
<script>
var id= localStorage.getItem("_id");
var url = 'http://localhost:3030/events/society/'+id

            const xhr = new XMLHttpRequest()
           
            xhr.open('GET', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    console.log(res)
                 console.log(res["_pubs"].length )
                if(res["_pubs"].length !=0)
                {
                    var string=''
                    for(var t=0; t<res["_pubs"].length ;t++)
                    {
                       string += template(res["_pubs"][t]);
                    }
                    document.getElementById("essaie").innerHTML = string
                }
               else{
                  document.getElementById("essaie").innerHTML = '<p>Na pas de pubs</p>'
               }
                
                }
            };
            xhr.send()
function template(donnee){
    var s=''
    s +='<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">'
    s += ' <div class="col-md-5 p-lg-5 mx-auto my-5">'
    s += ' <h1 class="display-4 fw-normal">'+donnee["_id"]+'</h1>'
    s += ' <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>'
    s += ' <a class="btn btn-outline-secondary" onclick="supprimepub(\''+donnee["_id"]+'\',\''+donnee["img"]+'\')">supprimer</a>'
    s +=' </div>'
    s += '<div class="product-device shadow-sm d-none d-md-block"></div>'
    s += '<div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>'
    s +=' </div>'
    return s;
}

function supprimepub(idpub,idphoto)
{
    var url = 'http://localhost:3030/events/pub/'+idpub
const xhr = new XMLHttpRequest()
            
            xhr.open('DELETE', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
               
                    removePhoto(idphoto)
                }
            };
            xhr.send()
}
function removePhoto(idphoto)
{
    var url = 'http://localhost:3030/events/photo/'+idphoto
const xhr = new XMLHttpRequest()
            
            xhr.open('DELETE', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
               
                document.location.reload();
                }
            };
            xhr.send()
}
    </script>
</html>