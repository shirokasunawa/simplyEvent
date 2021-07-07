<!doctype html>
<html lang="fr">
<body onload="testConnexion()"  class="text-center">
<?php  include("./content/header.php");  include("./content/footer.html"); ?>
  <!-- Le reste du contenu -->
<script>
   let cookie= getCookie('nomuser')
  if( cookie=='' )
  {
    document.location.href = "index.php"
  }
  </script>
  <p>Mon espace personnel</p>
   <button type="button" class="btn btn-primary" style="background-color:#e685b5 ;  border-color:#e685b5;" onclick="tolocationAddEvent()">Ajouter un event <i class="bi bi-plus"></i></button>
</br>
   <span id="events"></span>
   <script>
     var id=localStorage.getItem("_id")
      var url = 'http://localhost:3030/events/client/'+id;
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            console.log(res)
            if( res[0]["_events"].length!=0){
           var s =''
           for(var i =0;i<res[0]["_events"].length;i++){
            s += '<button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationMyEvent(\''+res[0]["_events"][i]["_id"]+'\')">'+res[0]["_events"][i]["titreEvent"]+'</button>'
           }
         
             document.getElementById("events").innerHTML = s
       }
            
        }
    };
    xhr.send()
       
       /*var jsonEvents = JSON.parse(localStorage.getItem("_events"))
       console.log(jsonEvents)
       if( Object.keys(jsonEvents).length!=0){
           var s =''
           for(var i =0;i<jsonEvents.length;i++){
            s += '<button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationUpdateProduct(\''+jsonProduct[i]["_id"]+'\')">'+jsonProduct[i]["titreEvent"]+'</button>'
           }
         
             document.getElementById("events").innerHTML = s
       }*/
    </script>
</body>
</html>