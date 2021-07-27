function ajoutepub(idphoto) {
   // var typePub = CryptoJS.AES.decrypt(localStorage.getItem("Pubchoisis"), secretPhrase).toString(CryptoJS.enc.Utf8)
   var typePub =localStorage.getItem("Pubchoisis")
   var body
    var future = new Date(); // get today date
    future.setDate(future.getDate() + 1); // add 7 days
    var finalDate = future.getFullYear() + '-' + ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) + '-' + future.getDate();
    switch (typePub) {
        case 'emplacement':
            var emplacement = document.getElementById("selectChoixEmplacement").value

            body = {
                "endroit": emplacement,
                "typeAbo": "emplacement",
                "dateFin": finalDate
            }
            break;
        case 'abonnement':
            body = {
                "endroit": "banner",
                "typeAbo": "abonnement",
                "dateFin": finalDate
            }
            break;
        case 'nbrclick':
            body = {
                "endroit": "modal",
                "typeAbo": "nbrclick",
                "nbrClick": 100,
                "nbrClickReel": 0
            }
            break;
    }
    var url = 'http://' + urlDeploy + ':3030/events/pub/'
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
           

            assignPub(idphoto, res["_id"])
        }
    };
    xhr.send(data)
}
function assignPub(idphoto, idpub) {

    var url = 'http://' + urlDeploy + ':3030/events/pub/' + idpub + '/' + idphoto
    const xhr = new XMLHttpRequest()

    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            console.log(res)
         

            assignPubUserSociety(idpub)
        }
    };
    xhr.send()
}

function assignPubUserSociety(idpub) {
    var id = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/pubSociety/' + idpub + '/' + id
    const xhr = new XMLHttpRequest()

    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            console.log(res)
           

            navigation("entreprise/payment/mon-espace-pub.html")
        }
    };
    xhr.send()
}

function valid(){
    var size = document.getElementById("customFile").files[0].size;
    if(size>68397){
          alert('File too large');
          return false;
      }
        var file = document.getElementById("customFile").files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
        //enregistrer reader.result dans bdd en base64 String ??
        console.log('Encoded Base 64 File String:', reader.result);
        console.log('paymentsub')
    var typePub =localStorage.getItem("Pubchoisis")
    var body 
    var future = new Date(); // get today date
  future.setDate(future.getDate() + 1); // add 7 days
  var bodyPub
  var finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate();
    switch(typePub){
case 'emplacement':
  var emplacement = document.getElementById("selectChoixEmplacement").value
  bodyPub= {
    "endroit" :emplacement,
    "typeAbo": "emplacement",
    "dateFin" : finalDate
  }


  break; 
case 'abonnement':
bodyPub= {
   "endroit": "banner",
   "typeAbo" :"abonnement",
  "dateFin":finalDate
}
break; 
case 'nbrclick':
bodyPub= {
   "endroit": "modal",
  "typeAbo" :"nbrclick",
   "nbrClick":100,
  "nbrClickReel" :0
}
break; 
}
localStorage.setItem("pubChoisis", JSON.stringify(bodyPub))
var url = 'http://'+urlDeploy+':3030/events/photo/'
var bodyImg = {
                "img": reader.result
            };
            const xhr = new XMLHttpRequest()
            const data = JSON.stringify(bodyImg)
            xhr.open('POST', url, true)
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhr.responseType = "json"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    res = xhr.response;
                    console.log(res)
                // console.log(res)
                var typeAbonnement = localStorage.getItem("typeAbonnement")
                    paymentsub(typeAbonnement,res["_id"])
                    // ajoutepub()
                }
            };
            xhr.send(data)
  }
  reader.readAsDataURL(file);
    }
function initPagePub() {
    var typePub = localStorage.getItem("Pubchoisis")
    var typeAbonnement = localStorage.getItem("typeAbonnement")
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
        var size = document.getElementById("customFile").files[0].size;
            if(size>68397){
                  alert('File too large');
                  return false;
              }
        const [file] = customFile.files
        if (file) {
          myimg.src = URL.createObjectURL(file)
        }
      }

}