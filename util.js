function hrefConnexion(){
    document.location.href = "connexion.php"
}
function hrefInscription(){
    document.location.href = "inscription.php"
}
function auth() {
    var url = 'http://localhost:3030/events/client';
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
    var url = 'http://localhost:3030/events/society/';
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

            localStorage.setItem("nom", res[i]['nnameUserom']);
            localStorage.setItem("_id", res[i]['_id']);
            localStorage.setItem("role", 'entreprise');
            localStorage.setItem("adresseMail", res[i]['adresseMail']);
            localStorage.setItem("adresse", res[i]['addressSociety']);
            localStorage.setItem("nameSociety", res[i]['nameSociety']);
            setCookie('nomuser', res[i]['nameUser'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        document.location.href = "espace.php"
    }
    else{
        document.location.href = "connexion.php"
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
            setCookie('nomuser', res[i]['nom'],Date.now() + (86400 * 7))
            userFind=true;
        }
    }
    if(userFind==true){
        document.location.href = "index.php"
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
            document.getElementById("titre").innerHTML = '<h1> Bonjour '+localStorage.getItem("nom")+'  </h1>';
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
       
        url = 'http://localhost:3030/events/client';
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

            url = 'http://localhost:3030/events/society/';
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
          //console.log(res); // Par défault une DOMString
         // console.log(res.hasOwnProperty('role')); 
          if(datares.hasOwnProperty('role')){
            console.log('client caase')
            setCookie('nomuser', datares['nom'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", datares['_id']);
            localStorage.setItem("nom", datares['nom']);
            localStorage.setItem("role",datares['role']);
            localStorage.setItem("adresseMail",datares['adresseMail']);
            document.location.href = "index.php"
          }
          else{
            setCookie('nomuser', datares['nameUser'], Date.now() + (86400 * 7));
            localStorage.setItem("_id", datares['_id']);
            localStorage.setItem("nom", datares['nameUser']);
            localStorage.setItem("role",datares['roleUser']);
            localStorage.setItem("addressMail",datares['adresseMail']);
            localStorage.setItem("addressSociety",datares['addressSociety']);
            localStorage.setItem("nameSociety",datares['nameSociety']);
            //console.log(localStorage.getItem())
            document.location.href = "espace.php"
          }
        }
      }
    xhr.open('POST', url,true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var datares
   /* xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhr.response)
            datares = xhr.response
            console.log(datares)

            switch(role)
            {
                case 'client' :
                    console.log('client caase')
                    setCookie('nomuser', datares['nom'], Date.now() + (86400 * 7));
                    localStorage.setItem("_id", datares['_id']);
                    localStorage.setItem("nom", datares['nom']);
                    localStorage.setItem("role",datares['role']);
                    localStorage.setItem("adresseMail",datares['adresseMail']);
                    document.location.href = "index.php"
                    break;
                case 'entreprise' : 
                console.log(datares)
                console.log('entreprise caase')
                    setCookie('nomuser', datares['nameUser'], Date.now() + (86400 * 7));
                    localStorage.setItem("_id", datares['_id']);
                    localStorage.setItem("nom", datares['nameUser']);
                    localStorage.setItem("role",datares['roleUser']);
                    localStorage.setItem("addressMail",datares['adresseMail']);
                    localStorage.setItem("addressSociety",datares['addressSociety']);
                    localStorage.setItem("nameSociety",datares['nameSociety']);
                    console.log(localStorage.getItem())
                    document.location.href = "espace.php"
                    break;
            }
        }
    }
    */
   
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
    if(localStorage.getItem("role")=='client')
    {
        document.getElementById("titre").innerHTML = '';
    }
    localStorage.clear();
   
    document.getElementById("buttunLogin").style.display = 'block';
    document.getElementById("buttunSignUp").style.display = 'block';
   document.getElementById("buttunDeco").style.display = 'none';
    document.getElementById("tchat").style.display = 'none';
    document.getElementById("profil").style.display = 'none';
    document.location.href = "index.php"
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
        chaineResult += ' <button type="button" class="btn btn-primary" onclick="envoie(\'client\')" >Submit</button>';
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
        chaineResult += ' <button type="button" class="btn btn-primary" onclick="envoie(\'entreprise\')">Submit</button>';

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