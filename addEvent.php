
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
            s += '<button type="button" class="btn btn-outline-info" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="addEvent(\''+res[i]["_id"]+'\')">'+res[i]["libelle"]+'</button>'
           }
         //console.log(s)
             document.getElementById("typeEvents").innerHTML = s
       }
            
        }
    };
    xhr.send()
       
  
function addEvent(idtypeevent){
  //iduser
  console.log("id event "+idtypeevent)
    var id =  localStorage.getItem("_id")
    
  
 
    var body = {
        "titreEvent": "A remplir heyyyy",
        "_typeEvent": idtypeevent,
        "dateEvent":"A remplir",
        "budgetEvent":0
       
        
    };
   
    var url = 'http://localhost:3030/events/event/'
            const data = JSON.stringify(body)
         console.log(data)
         xhr.onreadystatechange = function () {
                if ( this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                 console.log("quete reussi")
                assignEvent(res["_id"])
               
                }
            };
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            
           
            xhr.send(data)
}
function assignEvent(idEvent){
    var iduser =  localStorage.getItem("_id")
    localStorage.getItem("temporaryVarClicke",idEvent)
   var idevent= idEvent
   var url = 'http://localhost:3030/events/event/'+idevent+'/'+iduser
   const xhr = new XMLHttpRequest()
   xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201 ) {
            res = xhr.response;
            console.log(res)
            document.location.href = "espacePrive.php"
        }
    };
   xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
  
    xhr.send()
}
    </script>
</body>
</html>