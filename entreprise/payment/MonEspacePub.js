function template(donnee) {
    var data = (donnee["img"]["img"]).split(',')[1];
    var binaryBlob = atob(data);
    var s = ''
    s += '<div class="row bg-light">'
    s += ' <div class="col"><img class="d-flex justify-content-start" width="500" height="500" src="data:image/jpeg;base64,' + btoa(binaryBlob) + '"></div>'
    
    s += '  <div class="col"> <h1 class="display-4 fw-normal d-flex ">Type d\'abonnement : ' + donnee["typeAbo"] + '</h1>'


    if (donnee["typeAbo"] == 'emplacement') {
        s += ' <p class="lead fw-normal">L\'eplacement : ' + donnee["endroit"] + '</p>'
        s += ' <p class="lead fw-normal">Prend fin le  : ' + donnee["dateFin"] + '</p>'
    }
    else if (donnee["typeAbo"] == 'abonnement') {
        s += ' <p class="lead fw-normal">L\'eplacement : ' + donnee["endroit"] + '</p>'
        s += ' <p class="lead fw-normal">Prend fin le  : ' + donnee["dateFin"] + '</p>'
    }
    else if (donnee["typeAbo"] == 'nbrclick') {
        s += ' <p class="lead fw-normal">L\'eplacement : ' + donnee["endroit"] + '</p>'
        s += ' <p class="lead fw-normal">Nombre de click : ' + donnee["nbrClickReel"] + ' / ' + donnee["nbrClick"] + '</p>'
    }
    s += ' <a class="btn btn-outline-secondary" onclick="supprimepub(\'' + donnee["_id"] + '\',\'' + donnee["img"] + '\')">supprimer</a>'
    // s +=' </div>'


    s += ' </div></div></br>'
    return s;
}

function supprimepub(idpub, idphoto) {
    var url = 'http://' + urlDeploy + ':3032/events/pub/' + idpub
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
function removePhoto(idphoto) {
    var url = 'http://' + urlDeploy + ':3032/events/photo/' + idphoto
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

function initMonEspacePub() {
    var id = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8);
    var url = 'http://' + urlDeploy + ':3032/events/society/' + id

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            console.log(res)
            console.log(res["_pubs"].length)
            if (res["_pubs"].length != 0) {
                var string = ''
                for (var t = 0; t < res["_pubs"].length; t++) {
                    string += template(res["_pubs"][t]);
                }
                document.getElementById("essaie").innerHTML = string
            }
            else {
                document.getElementById("essaie").innerHTML = '<p>Na pas de pubs</p>'
            }

        }
    };
    xhr.send()
}