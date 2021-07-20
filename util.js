const urlDeploy = '192.168.1.14'
const secretPhrase='5t8ZmLDw8'
const urlDeployement = window.location.href;

function navigation(page)
{

   var location=window.location.href;
  var newlocation =  location.split('myEvent/')[0]+'myEvent/';
    
   document.location.href=newlocation+page
}

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
    var role=CryptoJS.AES.decrypt(localStorage.getItem("role"),secretPhrase).toString(CryptoJS.enc.Utf8);

    if(role=='entreprise')
    {
        var token = CryptoJS.AES.decrypt(localStorage.getItem("tokenPayment"),secretPhrase).toString(CryptoJS.enc.Utf8);
        
        if( token==null)
        {
            navigation("entreprise/payment/payment.html")
        }
        else{
            navigation("entreprise/MessagerieSociety.html")
        }
    }
    else{
        navigation("client/Messagerie.html")
    }

   
}
function hrefConnexion(){
    navigation("commun/connexion.html")
}
function pub(){
    navigation("entreprise/payment/choixPub.html")
}
function tolocationprofil(){
    navigation("commun/profil.html")
}
function hrefInscription(){
    navigation("commun/inscription.html")
}
function infoEntreprise(){
    navigation("entreprise/infoEntreprise.html")

}
function tolocationproduct(){
    navigation("entreprise/product/addProduct.html")
}
function product(){
    navigation("entreprise/product/product.html")
}
function tolocationMyEvent(idmyevent)
{
    var idmyEventCypte = CryptoJS.AES.encrypt(idmyevent,secretPhrase);
    localStorage.setItem("temporaryVarClicke",idmyEventCypte)
    navigation("client/myEvent.html")
}
function tolocationUpdateProduct(idproduct){
    //console.log(idproduct)
    var idproductCypte = CryptoJS.AES.encrypt(idproduct,secretPhrase);
    localStorage.setItem("temporaryVarClicke",idproductCypte)
    navigation("entreprise/product/myproduct.html")
   
}
function tolocationAddEvent(){
    navigation("client/addEvent.html")
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
    var id =  CryptoJS.AES.decrypt(localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
    
    switch(action)
    {
        case 'modifier':
          
          if((CryptoJS.AES.decrypt(localStorage.getItem("role"),secretPhrase).toString(CryptoJS.enc.Utf8))=='client')
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
               
                
                localStorage.setItem("nom",CryptoJS.AES.encrypt( nom,secretPhrase));
                localStorage.setItem("adresseMail", CryptoJS.AES.encrypt(email,secretPhrase));
                localStorage.setItem("password",  CryptoJS.AES.encrypt(password,secretPhrase));
                setCookie('nomuser', res['nom'],Date.now() + (86400 * 7))
                navigation("client/espacePrive.html")
                
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
                localStorage.setItem("nom", CryptoJS.AES.encrypt( nom,secretPhrase));
                localStorage.setItem("adresseMail",CryptoJS.AES.encrypt(email,secretPhrase));
               // localStorage.setItem("password", password);
                setCookie('nomuser', nom,Date.now() + (86400 * 7))
                var token = CryptoJS.AES.decrypt(localStorage.getItem("tokenPayment"),secretPhrase).toString(CryptoJS.enc.Utf8);
                if( token==null)
        {
            navigation("entreprise/payment/payment.html")
        }
        else{
            navigation("entreprise/espace.html")
        }
                
                }
            };
            xhr.send(data)
          }
           
           
           
        break;

        case 'supprimer':
            var url
            var role = CryptoJS.AES.decrypt(localStorage.getItem("role"),secretPhrase).toString(CryptoJS.enc.Utf8);
            if(role=='client')
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
            var id =  CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"),secretPhrase).toString(CryptoJS.enc.Utf8);
            var seller =  CryptoJS.AES.decrypt(localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
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
            var id =  CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"),secretPhrase).toString(CryptoJS.enc.Utf8);
            var url = 'http://'+urlDeploy+':3030/events/product/'+id
            var seller =  CryptoJS.AES.decrypt(localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
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
    var seller =  CryptoJS.AES.decrypt(localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
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
           navigation("entreprise/espace.html")
        }
    };
    xhr.send()
}
function updateSociety(){
    var id=CryptoJS.AES.decrypt(localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
    var url = 'http://'+urlDeploy+':3030/events/society/'+id;
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
            
            localStorage.setItem("nameSociety",CryptoJS.AES.encrypt( nameSociety,secretPhrase));
            localStorage.setItem("adresse", CryptoJS.AES.encrypt(adresseSociety,secretPhrase));
            navigation("entreprise/espace.html")
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
            console.log(res)
          
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

            localStorage.setItem("nom", CryptoJS.AES.encrypt(res[i]['nameUser'],secretPhrase));
            localStorage.setItem("_id",  CryptoJS.AES.encrypt(res[i]['_id'],secretPhrase));
            localStorage.setItem("role",  CryptoJS.AES.encrypt('entreprise',secretPhrase));
            localStorage.setItem("adresseMail", CryptoJS.AES.encrypt(res[i]['addressMail'],secretPhrase));
            localStorage.setItem("adresse",  CryptoJS.AES.encrypt(res[i]['addressSociety'],secretPhrase));
            localStorage.setItem("nameSociety", CryptoJS.AES.encrypt( res[i]['nameSociety'],secretPhrase));
            //localStorage.setItem("password", res[i]['password']);
            localStorage.setItem("_products",  JSON.stringify(res[i]['_products']));
            console.log(res[i].hasOwnProperty("tokenPayment"))
           if(res[i].hasOwnProperty("tokenPayment"))
            {
                localStorage.setItem("tokenPayment",CryptoJS.AES.encrypt( res[i]['tokenPayment'],secretPhrase));
            }
            else{
            
            }
            setCookie('nomuser', res[i]['nameUser'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        //console.log(localStorage.getItem("tokenPayment"))
        var token = CryptoJS.AES.decrypt(localStorage.getItem("tokenPayment"),secretPhrase).toString(CryptoJS.enc.Utf8);
        if( token==null)
        {
            navigation("payment.html")
        }
        else{
            navigation("entreprise/espace.html")
        }
       
    }
    else{
        navigation("connexion.html")
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

            localStorage.setItem("nom", CryptoJS.AES.encrypt(res[i]['nom'],secretPhrase));
            localStorage.setItem("_id", CryptoJS.AES.encrypt(res[i]['_id'],secretPhrase));
            localStorage.setItem("role", CryptoJS.AES.encrypt(res[i]['role'],secretPhrase));
            localStorage.setItem("adresseMail",  CryptoJS.AES.encrypt(res[i]['adresseMail'],secretPhrase));
           // localStorage.setItem("password", res[i]['password']);
            localStorage.setItem("_events",  res[i]['_events']);
            setCookie('nomuser', res[i]['nom'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        navigation("client/espacePrive.html")
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
        var role = CryptoJS.AES.decrypt(localStorage.getItem("role"),secretPhrase).toString(CryptoJS.enc.Utf8);
        if(role=='client')
        {
            document.getElementById("navEspacePrive").style.display = 'block' ;
        }
        else if(role=='entreprise'){
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
            //console.log('client caase')
            setCookie('nomuser', datares['nom'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", CryptoJS.AES.encrypt(datares['_id'],secretPhrase));
            localStorage.setItem("nom", CryptoJS.AES.encrypt(datares['nom'],secretPhrase));
            localStorage.setItem("role",CryptoJS.AES.encrypt(datares['role']),secretPhrase);
            localStorage.setItem("adresseMail",CryptoJS.AES.encrypt(datares['adresseMail'],secretPhrase));
           // localStorage.setItem("password",datares['password']);
           navigation("index.html")
          }
          else{
            setCookie('nomuser', datares['nameUser'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", CryptoJS.AES.encrypt(datares['_id'],secretPhrase));
            localStorage.setItem("nom", CryptoJS.AES.encrypt(datares['nameUser'],secretPhrase));
            localStorage.setItem("role",CryptoJS.AES.encrypt(datares['roleUser'],secretPhrase));
            localStorage.setItem("adresseMail",CryptoJS.AES.encrypt(datares['addressMail'],secretPhrase));
            localStorage.setItem("addressSociety",CryptoJS.AES.encrypt(datares['addressSociety'],secretPhrase));
            localStorage.setItem("nameSociety",CryptoJS.AES.encrypt(datares['nameSociety'],secretPhrase));
            //localStorage.setItem("password",datares['password']);
            //console.log(localStorage.getItem())
            navigation("entreprise/payment/payment.html")
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

    localStorage.clear();
   
    document.getElementById("buttunLogin").style.display = 'block';
    document.getElementById("buttunSignUp").style.display = 'block';
   document.getElementById("buttunDeco").style.display = 'none';
    document.getElementById("tchat").style.display = 'none';
    document.getElementById("profil").style.display = 'none';
    navigation("index.html")
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


///////////////////////// SUB /////////////////////////////////

//////////////////////// PAYMENT /////////////////////////////
function dopayment(tokenId){
    console.log(tokenId)
    const xhr = new XMLHttpRequest()
    const urldopayment = 'http://'+urlDeploy+':3030/payment/doPayment';
    // Saisie donné carte
        body = {
            'tokenId': tokenId,
        };
        const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                console.log(res)
                navigation("entreprise/espace.html")
            }
           
        };
        xhr.open('POST', urldopayment,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

function insertToken(idToken){
    console.log(idToken)
    var idUser =CryptoJS.AES.decrypt( localStorage.getItem("_id"),secretPhrase).toString(CryptoJS.enc.Utf8);
    const xhr = new XMLHttpRequest()
    const urlcreateToken = 'http://'+urlDeploy+':3030/events/society/' + idUser;
    body = {
        'tokenPayment': idToken,
    };
    const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                console.log(res)
                dopayment(idToken)
            }
        };
        xhr.open('PUT', urlcreateToken,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

function createTokens(){
    var card = findSelection("card");
    const xhr = new XMLHttpRequest()
    const urlcreateToken = 'http://'+urlDeploy+':3030/payment/createTokens';
    // Saisie donné carte
    var number = document.getElementById("number").value;
    var month = document.getElementById("ccmonth").value;
    var years = document.getElementById("ccyear").value;
    var cvc = document.getElementById("cvv").value;

        body = {
            'number': number,
            'month': month,
            'years' : years,
            'cvc' : cvc,
        };
        const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                console.log(res)
                insertToken(res["id"])
            }
        };
        xhr.open('POST', urlcreateToken,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

function attachPaymentMethod(idcard,idCustomers){
    console.log(idcard)
    console.log(idCustomers)
    var card = findSelection("card");
    const xhr = new XMLHttpRequest()
    const urlcustomers = 'http://'+urlDeploy+':3030/payment/attachPaymentMethod/'+ idcard;
    // Saisie donné carte
        body = {
            'customer' : idCustomers,
        };
        const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                createTokens()
            }
        };
        xhr.open('POST', urlcustomers,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

function createCustomers(id){
    var card = findSelection("card");
    const xhr = new XMLHttpRequest()
    const urlcustomers = 'http://'+urlDeploy+':3030/payment/createCustomers';
    // Saisie donné carte
    var name = document.getElementById("name").value;
    var email =  CryptoJS.AES.decrypt(localStorage.getItem("adresseMail"),secretPhrase).toString(CryptoJS.enc.Utf8);
        body = {
            'name': name,
            'email': email,
            'payment_method' : id,
        };
        const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                attachPaymentMethod(id,res.id)
            }
        };
        xhr.open('POST', urlcustomers,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

function createPaymentMethods(){
    var card = findSelection("card");
    const xhr = new XMLHttpRequest()
    const url = 'http://'+urlDeploy+':3030/payment/createPaymentMethods';

    // Saisie donné carte
    var number = document.getElementById("number").value;
    var month = document.getElementById("ccmonth").value;
    var years = document.getElementById("ccyear").value;
    var cvc = document.getElementById("cvv").value;

        body = {
            'number': number,
            'month': month,
            'years' : years,
            'cvc' : cvc,
        };
        const data = JSON.stringify(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                res = xhr.response;
                console.log(res.id)
                createCustomers(res.id);
                return res.id
            }
        };
        xhr.open('POST', url,true)
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.responseType = "json"
        xhr.send(data)
}

