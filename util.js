

function auth(theUrl) {
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


function client(res) {
    console.log('res')
    var email = document.getElementById("emailInput").value;
    var mdp = document.getElementById("passwordInput").value;
    console.log(email)
    console.log(res[0]['adresseMail'])

    for (var i = 0; i < res.length; i++) {
        if ((res[i]['adresseMail'] == email) || (res[i]['password'] == mdp)) {

            
            
            setCookie('nomuser', res[i]['nom'],Date.now() + (86400 * 7))
        }
    }
    document.location.href = "index.php"
    
}

function testConnexion(){
    let cookie= getCookie('nomuser')
   
   
    if((cookie!='')){
        document.getElementById("titre").innerHTML = '<h1> Bonjour   </h1>';
        document.getElementById("buttunLogin").style.display = 'none';
        document.getElementById("buttunSignUp").style.display = 'none';
       document.getElementById("buttunDeco").style.display = 'block';
        document.getElementById("tchat").style.display = 'block';
        document.getElementById("profil").style.display = 'block';
    }
}

//page inscription 
function envoie() {
    var name = document.getElementById("NameClient").value;
    var email = document.getElementById("EmailClient").value;
    var password = document.getElementById("passwordClient").value;
    var invocation = new XMLHttpRequest();
    var url = 'http://localhost:3030/events/client';
    var body = {
        'nom': name,
        'role': 'client',
        'adresseMail': email,
        'login': name,
        'password': password
    };

    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.send(data)
    setCookie('dataUser', name, Date.now() + (86400 * 7));
    document.location.href = "index.php"
}
function deco(){
    console.log(document.cookie)
    delete_cookie("user");
    delete_cookie("nomuser");
    authUser = []
    document.getElementById("titre").innerHTML = '';
    document.getElementById("buttunLogin").style.display = 'block';
    document.getElementById("buttunSignUp").style.display = 'block';
   document.getElementById("buttunDeco").style.display = 'none';
    document.getElementById("tchat").style.display = 'none';
    document.getElementById("profil").style.display = 'none';
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
        chaineResult += ' <button type="button" class="btn btn-primary" onclick="envoie()" >Submit</button>';
        //  chaineResult+='</form>';
        document.getElementById("formInscription").innerHTML = chaineResult;
    }
    else {
        chaineResult = ' <form action="validator.php" method="post">';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="Name">Nom</label>';
        chaineResult += ' <input type="text" class="form-control"  name="Name" placeholder="Votre nom" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="Adresse">Adresse de l\'entreprise</label>';
        chaineResult += ' <input type="text" class="form-control"  name="Adresse" placeholder="Adresse" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += '<label for="EmailSociety">Email address</label>';
        chaineResult += ' <input type="email" class="form-control" name="EmailSociety" aria-describedby="emailHelp" placeholder="Enter email" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="NameSociety">Nom de l\'entreprise</label>';
        chaineResult += ' <input type="text" class="form-control"  name="NameSociety" placeholder="Le nom de l\'entreprise" >';
        chaineResult += '</div>';
        chaineResult += '<div class="form-group">';
        chaineResult += ' <label for="passwordSociety">Password</label>';
        chaineResult += ' <input type="password" class="form-control" name="passwordSociety" placeholder="Password" >';
        chaineResult += '</div>';
        chaineResult += ' <button type="submit" class="btn btn-primary">Submit</button>';
        chaineResult += '</form>';
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