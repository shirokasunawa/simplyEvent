const urlDeploy = '192.168.1.14'

function setCarouselHTML() {
    var s=''
   s+=' <div id="demo" class="carousel slide" data-ride="carousel">'
      
   s+='    <ul class="carousel-indicators">'
   s+='     <li data-target="#demo" data-slide-to="0" class="active"></li>'
   s+='     <li data-target="#demo" data-slide-to="1"></li>'
   s+='      <li data-target="#demo" data-slide-to="2"></li>'
   s+='    </ul>'
    
   s+='    <div class="carousel-inner">'
   s+='      <span id="carousel"></span>'
   s+='      </div>'
     
   s+='     <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">'
   s+='    <span class="carousel-control-prev-icon" aria-hidden="true"></span>'
   s+='    <span class="sr-only">Précédent</span>'
   s+='   </a>'
   s+='   <a class="carousel-control-next" href="#demo" role="button" data-slide="next">'
   s+='     <span class="carousel-control-next-icon" aria-hidden="true"></span>'
   s+='    <span class="sr-only">Suivant</span>'
   s+='   </a>'
   s+=' </div>'
   s+='</br>'
   s+='<style>'
   s+='  .demo{'
    s+='      position: absolute !important;'
    s+='   }'
    s+=' .carousel-inner{'
        s+=' width:100%;'
        s+='  max-height: 200px !important;'
        s+='}'
        s+='  </style>'
        document.getElementById("Moncarousel").innerHTML = s
        setCarouselPub()
}

function setCarouselPub(){
    var url = 'http://'+urlDeploy+':3030/events/pubBanner/'
var xhrr = new XMLHttpRequest()
           
            xhrr.open('GET', url, true)
            xhrr.setRequestHeader('content-type', 'application/json')
            xhrr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhrr.responseType = "json"
            xhrr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhrr.response;
                    //console.log(res)
                // console.log(res)
                var s=''
                for(var f=0;f<3;f++)
                {
                   switch(f)
                   {
                       case 0 :
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                          
                          
                           s+='  <div class="carousel-item active">'
                           s+=' <img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 1" class="d-block w-100">'
                           s+='  <div class="carousel-caption d-none d-md-block">'
                           s+='   <h4>Titre de la légende</h4>'
                           s+='   <p>Légende de la slide n°1.</p>'
                           s+=' </div>'
                           s+='  </div>'
                           break;
                    case 1: 
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                        s+=' <div class="carousel-item">'
                        s+='<img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 2" class="d-block w-100">'
                        s+='<div class="carousel-caption d-none d-md-block text-dark">'
                        s+='  <h4>Titre de la légende</h4>'
                        s+='  <p>Légende de la slide n°2.</p>'
                        s+=' </div>'
                        s+=' </div>'
                        break;
                    case 2:
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                        s+='    <div class="carousel-item">'
                        s+='<img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 3" class="d-block w-100">'
                        s+='<div class="carousel-caption d-none d-md-block">'
                        s+='  <h4>Titre de la légende</h4>'
                        s+='  <p>Légende de la slide n°3.</p>'
                        s+=' </div>'
                        s+=' </div>'
                        
                        break;
                   }
                }
                document.getElementById("carousel").innerHTML=s
                }
            };
            xhrr.send()
}
function tolocationMessagerie(){
    document.location.href = "Messagerie.html"
}
function hrefConnexion(){
    document.location.href = "connexion.html"
}
function pub(){
    document.location.href = "choixPub.html"
}
function tolocationprofil(){
    document.location.href = "profil.html"
}
function hrefInscription(){
    document.location.href = "inscription.html"
}
function infoEntreprise(){
    document.location.href = "infoEntreprise.html"

}
function tolocationproduct(){
    document.location.href = "addProduct.html"
}
function product(){
    document.location.href = "product.html"
}
function tolocationMyEvent(idmyevent)
{
    localStorage.setItem("temporaryVarClicke",idmyevent)
    document.location.href = "myEvent.html"
}
function tolocationUpdateProduct(idproduct){
    console.log(idproduct)
    localStorage.setItem("temporaryVarClicke",idproduct)
   document.location.href = "myproduct.html"
   
}
function tolocationAddEvent(){
    document.location.href = "addEvent.html"
}
function typeProduit(){
    var typeProduit = ['vetements', 'salle','fleur','mobilier'];
    return typeProduit;
}
function majProfil(action){
    const xhr = new XMLHttpRequest()
    var nom =  document.getElementById("nameUserInput").value
    var email =  document.getElementById("adresseMailInput").value
    var password =  document.getElementById("passwordInput").value
    var id =  localStorage.getItem("_id")
    switch(action)
    {
        case 'modifier':
          
          if(localStorage.getItem("role")=='client')
          {
            var body = {
                'nom': nom,
                'adresseMail': email,
                'password': password
                
            };
            var url = 'http://'+urlDeploy+':3030/events/client/'+id
            const data = JSON.stringify(body)
            xhr.open('PUT', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
                localStorage.setItem("nom", nom);
                localStorage.setItem("adresseMail", email);
                localStorage.setItem("password", password);
                setCookie('nomuser', res['nom'],Date.now() + (86400 * 7))
                document.location.href = "espacePrive.html"
                
                }
            };
            xhr.send(data)
          }
          else{
            var body = {
                'nameUser': nom,
                'addressMail': email,
                'password': password
                
            };
            var url = 'http://'+urlDeploy+':3030/events/society/'+id
            const data = JSON.stringify(body)
            xhr.open('PUT', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
                localStorage.setItem("nom", nom);
                localStorage.setItem("adresseMail", email);
                localStorage.setItem("password", password);
                setCookie('nomuser', nom,Date.now() + (86400 * 7))
                document.location.href = "espace.html"
                
                }
            };
            xhr.send(data)
          }
           
           
           
        break;

        case 'supprimer':
            var url
            if(localStorage.getItem("role")=='client')
            {
                url = 'http://'+urlDeploy+':3030/events/client/'+id
            }
            else{
                url = 'http://'+urlDeploy+':3030/events/society/'+id
            }
           
           
            xhr.open('DELETE', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
                
                deco()
                }
            };
            xhr.send()

        break;
    }
}
function majProduct(action){
    const xhr = new XMLHttpRequest()
    switch(action)
    {
        case 'modifier':
            var nomProduit = document.getElementById("nomProduit").value;
            var typeProduit = document.getElementById("typeProduit").value;
            var prixProduit = document.getElementById("prixProduit").value;
            var id =  localStorage.getItem("temporaryVarClicke")
            var seller =  localStorage.getItem("_id")
            var body = {
                'typeProduct': typeProduit,
                'nomProduct': nomProduit,
                'priceProduct': prixProduit
                
            };
            var url = 'http://'+urlDeploy+':3030/events/product/'+id
            const data = JSON.stringify(body)
           
            xhr.open('PUT', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
                
                setLocalStorageProduct(seller)
                }
            };
            xhr.send(data)
        break;

        case 'supprimer':
            var id =  localStorage.getItem("temporaryVarClicke")
            var url = 'http://'+urlDeploy+':3030/events/product/'+id
            var seller =  localStorage.getItem("_id")
            xhr.open('DELETE', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhr.response;
                    //console.log(res)
                // console.log(res)
                
                setLocalStorageProduct(seller)
                }
            };
            xhr.send()

        break;
    }

}
function addProduct(){
    var nomProduct =  document.getElementById("nomProduit").value;
    var typeProduit =  document.getElementById("typeProduit").value;
    var prixProduit =  document.getElementById("prixProduit").value;
    var seller =  localStorage.getItem("_id")
    var body = {
        'typeProduct': typeProduit,
        'nomProduct': nomProduct,
        'priceProduct': prixProduit
        
    };
    var url = 'http://'+urlDeploy+':3030/events/product/'+seller
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            //console.log(res)
           // console.log(res)
          
           setLocalStorageProduct(seller)
        }
    };
    xhr.send(data)
    
}
function setLocalStorageProduct(seller){
    const xhr = new XMLHttpRequest()
    var urlget = 'http://'+urlDeploy+':3030/events/society/'+seller
    xhr.open('GET', urlget, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            console.log(res)
           // console.log(res)
           localStorage.setItem("_products",  JSON.stringify(res['_products']));
            document.location.href = "espace.html"
        }
    };
    xhr.send()
}
function updateSociety(){
    var url = 'http://'+urlDeploy+':3030/events/society/'+localStorage.getItem("_id");
    var nameSociety =  document.getElementById("nomSocietyInput").value;
    var adresseSociety =  document.getElementById("adresseSocietyInput").value;
   var body = {
        'nameUser': nameSociety,
        'addressSociety': adresseSociety
        
    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            //console.log(res)
            console.log(res)
            localStorage.setItem("nameSociety", nameSociety);
            localStorage.setItem("adresse", adresseSociety);
            document.location.href = "espace.html"
        }
    };
    xhr.send(data)
    

}
function auth() {
    var url = 'http://'+urlDeploy+':3030/events/client';
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
            client(res)
            
        }
    };
    xhr.send()
}
function authSociety(){
    var url = 'http://'+urlDeploy+':3030/events/society/';
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
            society(res)
            
        }
    };
    xhr.send()
}
function society(res){
    var email = document.getElementById("emailInput").value;
    var mdp = document.getElementById("passwordInput").value;
    //console.log(email)
    //console.log(res[0]['adresseMail'])
    var userFind;
    for (var i = 0; i < res.length; i++) {
        if ((res[i]['adresseMail'] == email) || (res[i]['password'] == mdp)) {

            localStorage.setItem("nom", res[i]['nameUser']);
            localStorage.setItem("_id", res[i]['_id']);
            localStorage.setItem("role", 'entreprise');
            localStorage.setItem("adresseMail", res[i]['addressMail']);
            localStorage.setItem("adresse", res[i]['addressSociety']);
            localStorage.setItem("nameSociety", res[i]['nameSociety']);
            localStorage.setItem("password", res[i]['password']);
            localStorage.setItem("_products",  JSON.stringify(res[i]['_products']));
            setCookie('nomuser', res[i]['nameUser'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        document.location.href = "espace.html"
    }
    else{
        document.location.href = "connexion.html"
    }
}
function client(res) {
    //console.log('res')
    var email = document.getElementById("emailInput").value;
    var mdp = document.getElementById("passwordInput").value;
    //console.log(email)
    //console.log(res[0]['adresseMail'])
    var userFind;
    for (var i = 0; i < res.length; i++) {
        if ((res[i]['adresseMail'] == email) || (res[i]['password'] == mdp)) {

            localStorage.setItem("nom", res[i]['nom']);
            localStorage.setItem("_id", res[i]['_id']);
            localStorage.setItem("role", res[i]['role']);
            localStorage.setItem("adresseMail", res[i]['adresseMail']);
            localStorage.setItem("password", res[i]['password']);
            localStorage.setItem("_events", res[i]['_events']);
            setCookie('nomuser', res[i]['nom'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        document.location.href = "espacePrive.html"
    }
    else{
        authSociety()
    }
    
    
}

function testConnexion(){
    let cookie= getCookie('nomuser')
    var auth ;
//console.log(localStorage.getItem("_id"))
    if((cookie!='')){
        if(localStorage.getItem("role")=='client')
        {
            document.getElementById("navEspacePrive").style.display = 'block' ;
        }
        else if(localStorage.getItem("role")=='entreprise'){
            document.getElementById("navEspace").style.display = 'block' ;
        }
        
        document.getElementById("buttunLogin").style.display = 'none';
        document.getElementById("buttunSignUp").style.display = 'none';
       document.getElementById("buttunDeco").style.display = 'block';
        document.getElementById("tchat").style.display = 'block';
        document.getElementById("profil").style.display = 'block';
        auth= 'yes'
    }
    else{
        auth= 'no'
    }
    return auth
    
}

//page inscription 
function envoie(role) {
    console.log(role)
    var body 
    var url
    switch(role)
    {
        case 'client': 
        var name = document.getElementById("NameClient").value;
        var email = document.getElementById("EmailClient").value;
        var password = document.getElementById("passwordClient").value;
       
        url = 'http://'+urlDeploy+':3030/events/client';
         body = {
            'nom': name,
            'role': 'client',
            'adresseMail': email,
            'password': password
        };
        break;

        case 'entreprise' :
            var name = document.getElementById("Name").value;
            var adresse = document.getElementById("Adresse").value;
            var email = document.getElementById("EmailSociety").value;
            var nameSociety = document.getElementById("NameSociety").value;
            var password = document.getElementById("passwordSociety").value;

            url = 'http://'+urlDeploy+':3030/events/society/';
            body = {
                'nameUser': name,
                'roleUser': 'entreprise',
                'addressMail': email,
                'addressSociety': adresse,
                'password': password,
                'nameSociety':nameSociety
            };
            break;
    }
  

    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var datares = xhr.response
       
         // console.log(res.hasOwnProperty('role')); 
          if(role=='client'){
            console.log('client caase')
            setCookie('nomuser', datares['nom'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", datares['_id']);
            localStorage.setItem("nom", datares['nom']);
            localStorage.setItem("role",datares['role']);
            localStorage.setItem("adresseMail",datares['adresseMail']);
            localStorage.setItem("password",datares['password']);
            document.location.href = "index.html"
          }
          else{
            setCookie('nomuser', datares['nameUser'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", datares['_id']);
            localStorage.setItem("nom", datares['nameUser']);
            localStorage.setItem("role",datares['roleUser']);
            localStorage.setItem("adresseMail",datares['addressMail']);
            localStorage.setItem("addressSociety",datares['addressSociety']);
            localStorage.setItem("nameSociety",datares['nameSociety']);
            localStorage.setItem("password",datares['password']);
            //console.log(localStorage.getItem())
            document.location.href = "espace.html"
          }
        }
      }
    xhr.open('POST', url,true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var datares

   
    xhr.send(data)
 //xhr.onreadystatechange = callback(xhr);

 

  
}

function callback(xhr){
    {
        if (xhr.readyState == 4 && xhr.status == 200) {
           //xhr.response
    console.log(xhr.responseText)
    console.log(xhr.response.hasOwnProperty('role'))
        }
  }
}

function deco(){
    console.log(document.cookie)
    delete_cookie("nomuser");
  /*  if(localStorage.getItem("role")=='client')
    {
        document.getElementById("titre").innerHTML = '';
    }*/
    localStorage.clear();
   
    document.getElementById("buttunLogin").style.display = 'block';
    document.getElementById("buttunSignUp").style.display = 'block';
   document.getElementById("buttunDeco").style.display = 'none';
    document.getElementById("tchat").style.display = 'none';
    document.getElementById("profil").style.display = 'none';
    document.location.href = "index.html"
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function afficheForm() {
    var chaineResult = '';
    var choix = findSelection("exampleRclientCheckadios");

    if (choix == 'client') {
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="NameClient">Nom</label>';
        chaineResult += ' <input type="text" class="form-control"  id="NameClient" placeholder="Votre nom" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += '<label for="EmailClient">Email address</label>';
        chaineResult += ' <input type="email" class="form-control" id="EmailClient" aria-describedby="emailHelp" placeholder="Enter email" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="passwordClient">Password</label>';
        chaineResult += ' <input type="password" class="form-control" id="passwordClient" placeholder="Password" >';
        chaineResult += '</div>';
        chaineResult += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" type="button" class="btn btn-primary" onclick="envoie(\'client\')" >Submit</button>';
        //  chaineResult+='</form>';
        document.getElementById("formInscription").innerHTML = chaineResult;
    }
    else {
       
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="Name">Nom</label>';
        chaineResult += ' <input type="text" class="form-control"  id="Name" placeholder="Votre nom" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="Adresse">Adresse de l\'entreprise</label>';
        chaineResult += ' <input type="text" class="form-control"  id="Adresse" placeholder="Adresse" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += '<label for="EmailSociety">Email address</label>';
        chaineResult += ' <input type="email" class="form-control" id="EmailSociety" aria-describedby="emailHelp" placeholder="Enter email" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="NameSociety">Nom de l\'entreprise</label>';
        chaineResult += ' <input type="text" class="form-control"  id="NameSociety" placeholder="Le nom de l\'entreprise" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="passwordSociety">Password</label>';
        chaineResult += ' <input type="password" class="form-control" id="passwordSociety" placeholder="Password" >';
        chaineResult += '</div>';
        chaineResult += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" type="button" class="btn btn-primary" onclick="envoie(\'entreprise\')">Submit</button>';

        document.getElementById("formInscription").innerHTML = chaineResult;
    }
}

function findSelection(field) {
    var test = document.getElementsByName(field);
    var sizes = test.length;

    for (i = 0; i < sizes; i++) {
        if (test[i].checked == true) {

            return test[i].value;
        }
    }
}