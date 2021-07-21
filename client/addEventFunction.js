function initAddEvent() {
    document.getElementById("titre").innerHTML = '<p>Choississez qu\'elle genre d\'évènement vous voulez crééer</p>'
    var url = 'http://' + urlDeploy + ':3030/events/typeEvents/';
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
            if (Object.keys(res).length != 0) {
                var s = ''
                for (var i = 0; i < res.length; i++) {
                    s += '<button type="button" class="btn btn-outline-info" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="addInfo(\'' + res[i]["_id"] + '\')">' + res[i]["libelle"] + '</button>'
                }
                //console.log(s)
                document.getElementById("typeEvents").innerHTML = s
            }

        }
    };
    xhr.send()
}
function addInfo(idEvent) {
    document.getElementById("titre").innerHTML = '<p>Ajouter quelques informations</p>'
    var sForm = ''
    sForm += ' <div class="d-flex justify-content-center">'
    sForm += '<main class="form-signin">'
    sForm += ' <div class="form-group row">'
    sForm += ' <label for="titreEvent"  class="col-form-label">Donnez un titre à votre évènement</label>'
    sForm += ' <div class="">'
    sForm += '  <input type="text"   class="form-control" id="titreEvent" >'
    sForm += ' </div>'
    sForm += ' </div>'
    sForm += '<div class="form-group row">'
    sForm += '  <label for="budgetEvent" class=" col-form-label">Quel est votre budget ?</label>'
    sForm += '  <div class="">'
    sForm += ' <input type="number" class="form-control" id="budgetEvent" name="budgetEvent"min="0" >'
    sForm += ' </div>'
    sForm += '</div>'
    sForm += '<div class="form-group row">'
    sForm += ' <label for="dateEvent" class=" col-form-label">Choississez la date de votre évènement</label>'
    sForm += ' <div class="">'
    sForm += ' <input type="date" class="form-control" id="dateEvent" name="dateEvent" min="0" >'
    sForm += '  </div>'
    sForm += '</div></br>'
    sForm += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" class="w-100 btn btn-lg btn-primary"  type="button" onclick="addEvent(\'' + idEvent + '\')">Ajouter</button>'
    sForm += '</main>'
    sForm += '</div>'
    document.getElementById("typeEvents").innerHTML = sForm
}

//Bug: Vérifier les entrer du formulaire
function addEvent(idtypeevent) {
    var titreEvent = document.getElementById("titreEvent").value
    if (titreEvent == null) { titreEvent = "A définir" }
    var budgetEvent = document.getElementById("budgetEvent").value
    if (budgetEvent == null) { budgetEvent = 0 }
    var dateEvent = document.getElementById("dateEvent").value
    if (dateEvent == null) { dateEvent = "A définir" }
    //iduser
    console.log("id event " + idtypeevent)
    var id = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8);



    var body = {
        "titreEvent": titreEvent,
        "_typeEvent": idtypeevent,
        "dateEvent": dateEvent,
        "budgetEvent": budgetEvent


    };

    var url = 'http://' + urlDeploy + ':3030/events/event/'
    const data = JSON.stringify(body)
    console.log(data)
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
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

function assignEvent(idEvent) {
    var iduser = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8);
    //localStorage.getItem("temporaryVarClicke",idEvent)
    var idevent = idEvent
    var url = 'http://' + urlDeploy + ':3030/events/event/' + idevent + '/' + iduser
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            console.log(res)
            navigation("client/espacePrive.html")
        }
    };
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"

    xhr.send()
}