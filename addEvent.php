
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
  <p>Choississez qu'elle genre d'évènement vous voulez crééer</p>
   
</br>
   <span id="typeEvents"></span>
   <script>
     
      var url = 'http://localhost:3030/events/typeEvents/';
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            //console.log(res)
            if( Object.keys(res).length!=0){
           var s =''
           for(var i =0;i<res.length;i++){
            s += '<button type="button" class="btn btn-outline-info" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationMyEvent(\''+res[i]["_id"]+'\')">'+res[i]["libelle"]+'</button>'
           }
         
             document.getElementById("typeEvents").innerHTML = s
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