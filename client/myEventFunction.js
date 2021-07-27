function affichePubModal() {

    var url = 'http://' + urlDeploy + ':3030/events/pubmodal/'


    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            var data = (res[0]["img"]["img"]).split(',')[1];
            var binaryBlob = atob(data);

            var s = ' <img src="data:image/jpeg;base64,' + btoa(binaryBlob) + '" style="max-width: 100%" id="myimg" onclick="majClickPub(\'' + res[0]["_id"] + '\',\'' + res[0]["nbrClickReel"] + '\') " >'

            document.getElementById("PubModal").innerHTML = s


        }
    };
    xhr.send()
}
function majClickPub(idPub, nbrclickReel) {

    var nbrclick = nbrclickReel + 1;

    var url = 'http://' + urlDeploy + ':3030/events/pub/' + idPub;

    var body = {
        "nbrClickReel": nbrclick



    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;


            $('#exampleModal').modal('hide');

        }
    };
    xhr.send(data)
}
function afficheDetailChecklist(idChecklist) {

    $("#exampleModal").modal('show');



    affichePubModal()
    console.log(idChecklist)

    var url = 'http://' + urlDeploy + ':3030/events/checklist/' + idChecklist;

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
            if ((res.hasOwnProperty('productChecklist')) && (res["productChecklist"] != '')) {
                afficheProductChoisis(res["productChecklist"], idChecklist)
            }
            else {
                var s = ''
                s += '<div class="row" style="height: 50%;">'
                s += ' <div class="form-group">'
                s += '<div class="form-group row">'
                s += '  <label for="PrixBudgetChecklist" class=" col-form-label">Indiquer le prix ou votre budget </label>'
                s += '  <div class="">'
                s += ' <input type="number" class="form-control" id="PrixBudgetChecklist" name="PrixBudgetChecklist"min="0" >'
                s += ' </div>'
                s += '</div></br>'
                s += '<div class="form-group row">'
                s += '  <label for="QuantityChecklist" class=" col-form-label">Indiquer la quantite</label>'
                s += '  <div class="">'
                s += ' <input type="number" class="form-control" id="QuantityChecklist" name="QuantityChecklist"min="0" >'
                s += ' </div>'
                s += '</div></br>'
                var titreButn = ''
                //check non présence d'informations 
                if (res.hasOwnProperty('prixCheclist')) {

                    titreButn = 'Modifier'

                }
                else {
                    titreButn = 'Ajouter'


                }
                s += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" type="button" class="btn btn-primary"  onclick="ajoutInfoCheckist(\'' + idChecklist + '\')">' + titreButn + '</button>';
                s += '</div>'
                s += '</div></br>'

                s += '<span id="viewDiv"></span>'

                document.getElementById("bodyTabBoard").innerHTML = s
                if (res.hasOwnProperty('prixCheclist')) {
                    document.getElementById("PrixBudgetChecklist").value = res["prixCheclist"]
                    document.getElementById("QuantityChecklist").value = res["quantiteCheclist"]
                }
                afficheProduit(idChecklist)
            }


        }
    };
    xhr.send()

}
function ajoutInfoCheckist(idchecklist) {
    var PrixBudgetChecklist = document.getElementById("PrixBudgetChecklist").value
    var QuantityChecklist = document.getElementById("QuantityChecklist").value

    var url = 'http://' + urlDeploy + ':3030/events/checklist/' + idchecklist;

    var body = {
        "prixCheclist": PrixBudgetChecklist,
        "quantiteCheclist": QuantityChecklist


    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;


            document.location.reload();

        }
    };
    xhr.send(data)
}
function afficheProduit(idChecklist) {
    var url = 'http://' + urlDeploy + ':3030/events/society/';


    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            var string = '';
            string += '<div class="row" style="height: 50%;">'
            for (var n = 0; n < res.length; n++) {

                if (res[n]["_products"].length != 0) {
                    string += '<div  >'
                    string += ' <button   onclick="affichePush(\'' + n + '\')" type="button" style="margin: 5px; width: 100%" class="btn-outline-primary btn-lg btn-block">' + res[n]["nameSociety"] + '</button>'
                    string += ' <div  id="dropPush' + n + '" style=" display: none;" >'
                    var productOneSociety = res[n]["_products"];
                    for (var h = 0; h < productOneSociety.length; h++) {
                        string += ' <button type="button" class="btn btn-light btn-lg btn-block" style="width:100%;text-align: left;" onclick="choixProduit(\'' + productOneSociety[h]["_id"] + '\',\'' + idChecklist + '\')">' + productOneSociety[h]["typeProduct"] + ' Prix unitaire : ' + productOneSociety[h]["priceProduct"] + '€</button></br>'
                    }


                    string += '</div>'

                    string += '</div></br>'

                }
            }
            string += '</div>'
            document.getElementById("viewDiv").innerHTML = string
        }
    };
    xhr.send()
}
function choixProduit(idProduct, idChecklist) {
    //modifie checklist ajoute produit 
    //met a jour l'affichage avec contacter le vendeur
    //vérifier si click checklist a pas deja un produit

    var url = 'http://' + urlDeploy + ':3030/events/checklist/' + idChecklist;

    var body = {
        'productChecklist': idProduct


    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            afficheProductChoisis(idProduct, idChecklist)

           
        }
    };
    xhr.send(data)


}
function assignSocietyConv(idConv, idVendeur) {
    var idclient = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/conversationToSociety/' + idVendeur + '/' + idConv + '';

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;


            navigation("client/messagerie.html");

        }
    };
    xhr.send()
}
function assignUserConv(idConv, idVendeur) {
    var idclient = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/conversationToClient/' + idclient + '/' + idConv + '';

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;

            assignSocietyConv(idConv, idVendeur)


        }
    };
    xhr.send()
}
function createConversation(idVendeur, idProduct) {
    var idclient = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/conversation/' + idclient + '/' + idVendeur + '/' + idProduct + '';

    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;

            assignUserConv(res["_id"], idVendeur)


        }
    };
    xhr.send()
}
function afficheProductChoisis(idProduct, idChecklist) {
    console.log(idChecklist)
    var url = 'http://' + urlDeploy + ':3030/events/product/' + idProduct;


    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            string = ''
            string += '<h1>' + res["typeProduct"] + '</h1>'
            string += '<h1>' + res["priceProduct"] + '</h1>'
            string += '<button type="button" class="btn btn-primary"onclick="modifProductProduit(\'' + idChecklist + '\')">Modifier</button>'
            string += '<button type="button" class="btn btn-primary" onclick="createConversation(\'' + res["seller"]["_id"] + '\',\'' + idProduct + '\')">Contacter vendeur</button>'


            document.getElementById("bodyTabBoard").innerHTML = string
        }
    };
    xhr.send()
}

function modifProductProduit(idChecklist) {
    console.log(idChecklist)
    var url = 'http://' + urlDeploy + ':3030/events/checklistproduct/' + idChecklist;

    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

           
            document.location.reload();
           
        }
    };
    xhr.send()
}
function affichePush(idElement) {
    console.log(idElement)
    var name = "dropPush" + idElement
    var statut = document.getElementById(name).style.display
    if (statut == 'none') {
        document.getElementById(name).style.display = 'block'
        document.getElementById(name).style.overflow = 'hidden!important'
        document.getElementById(name).style.position = 'position: absolute!important'
    }
    else {
        document.getElementById(name).style.display = 'none'
    }

}
function modifTitre() {
    var setBodyForm = ''
    setBodyForm += ' <div class="d-flex justify-content-center">'
    setBodyForm += '<div class="form-signin">'
    setBodyForm += ' <div class="form-group row">'
    setBodyForm += ' <label for="titreEvent"  class="col-form-label">Modifier le titre à votre évènement</label>'
    setBodyForm += ' <div class="">'
    setBodyForm += '  <input type="text"   class="form-control" id="titreEvent" >'
    setBodyForm += ' </div>'
    setBodyForm += ' </div></br>'
    setBodyForm += ' <button class="btn " onclick="modifTitreBtn()">Modifier</button></div></div>'
    document.getElementById("bodyTabBoard").innerHTML = setBodyForm
    var titre = CryptoJS.AES.decrypt(localStorage.getItem("eventTitre"), secretPhrase).toString(CryptoJS.enc.Utf8)
    document.getElementById("titreEvent").value = titre
}

function removeChecklist(idChecklist) {
    console.log(idChecklist)
    var url = 'http://' + urlDeploy + ':3030/events/checklist/' + idChecklist;

    const xhr = new XMLHttpRequest()
    xhr.open('DELETE', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

           
            document.location.reload();

        }
    };
    xhr.send()
}

function deleteEvent() {

    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/event/' + id;

    const xhr = new XMLHttpRequest()
    xhr.open('DELETE', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

           
            document.location = "./espacePrive.html";

        }
    };
    xhr.send()
}

function modifTitreBtn() {
    var newDate = document.getElementById("titreEvent").value
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/event/' + id;

    var body = {
        'titreEvent': newDate


    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            localStorage.setItem("eventTitre", CryptoJS.AES.encrypt(newDate, secretPhrase))
            document.location.reload();

        }
    };
    xhr.send(data)
}
function modifBudget() {
    var setBodyForm = ''
    setBodyForm += ' <div class="d-flex justify-content-center">'
    setBodyForm += '<div class="form-signin">'
    setBodyForm += '<div class="form-group row">'
    setBodyForm += '  <label for="budgetEvent" class=" col-form-label">Modifier votre budget ?</label>'
    setBodyForm += '  <div class="">'
    setBodyForm += ' <input type="number" class="form-control" id="budgetEvent" name="budgetEvent"min="0" >'
    setBodyForm += ' </div>'
    setBodyForm += '</div></br>'
    setBodyForm += ' <button class="btn " onclick="modifBudgetBtn()">Modifier</button></div></div>'
    document.getElementById("bodyTabBoard").innerHTML = setBodyForm
    var budget = localStorage.getItem("eventBudget")
    document.getElementById("budgetEvent").value = budget
}

function modifBudgetBtn() {
    var newDate = document.getElementById("budgetEvent").value
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/event/' + id;

    var body = {
        'budgetEvent': newDate


    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            localStorage.setItem("eventBudget", CryptoJS.AES.encrypt(newDate, secretPhrase))
            document.location.reload();

        }
    };
    xhr.send(data)
}

function modifType() {
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
            console.log(res)
            var setBodyForm = ''
            setBodyForm += ' <div class="d-flex justify-content-center">'
            setBodyForm += '<div class="form-signin">'
            setBodyForm += '<div class="form-group row">'
            setBodyForm += ' <label for="typeProduit" class=" col-form-label">Modifier le type du produit</label>'
            setBodyForm += '  <div class="">'
            setBodyForm += '   <select class="form-select"id="typeProduit" >'

            for (var i = 0; i < res.length; i++) {
                setBodyForm += '<option  value=\'' + res[i]["_id"] + '\'>' + res[i]["libelle"] + '</option>'
            }
            setBodyForm += '   </select>'

            setBodyForm += ' </div>'
            setBodyForm += '</div></br>'
            setBodyForm += ' <button class="btn " onclick="modifTypeBtn()">Modifier</button></div></div>'
            document.getElementById("bodyTabBoard").innerHTML = setBodyForm



        }
    };
    xhr.send()
}
function modifTypeBtn() {
    var newType = document.getElementById("typeProduit").value
    console.log(newType)
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    
    var url = 'http://' + urlDeploy + ':3030/events/typeEvents/' + newType + '/' + id;
 



    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;

            
            document.location.reload();

        }
    };
    xhr.send()
}

function modifDate() {
    var setBodyForm = ''
    setBodyForm += ' <div class="d-flex justify-content-center">'
    setBodyForm += '<div class="form-signin">'
    setBodyForm += '<div class="form-group row">'
    setBodyForm += ' <label for="dateEvent" class=" col-form-label">Modifier la date de votre évènement</label>'
    setBodyForm += ' <div class="">'
    setBodyForm += ' <input type="date" class="form-control" id="dateEvent" name="dateEvent" min="0" >'
    setBodyForm += '  </div>'
    setBodyForm += '</div></br>'
    setBodyForm += ' <button class="btn " onclick="modifEventDate()">Modifier</button></div></div>'
    document.getElementById("bodyTabBoard").innerHTML = setBodyForm
    var budget = CryptoJS.AES.decrypt(localStorage.getItem("eventDate"), secretPhrase).toString(CryptoJS.enc.Utf8)
    document.getElementById("dateEvent").value = budget

}
function modifEventDate() {
    var newDate = document.getElementById("dateEvent").value
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/event/' + id;

    var body = {
        'dateEvent': newDate


    };
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('PUT', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            localStorage.setItem("eventDate", CryptoJS.AES.encrypt(newDate, secretPhrase))
            document.location.reload();

        }
    };
    xhr.send(data)
}

function afficheChecklist() {
    var url = 'http://' + urlDeploy + ':3030/events/typeActions/';
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;

            var setBodyForm = ''
            var typeEvent = CryptoJS.AES.decrypt(localStorage.getItem("eventType"), secretPhrase).toString(CryptoJS.enc.Utf8)
            for (var i = 0; i < res.length; i++) {

                for (var k = 0; k < res[i]["_typeEvent"].length; k++) {
                    if (res[i]["_typeEvent"][k]["libelle"] == typeEvent) {

                        setBodyForm += '<div class="d-flex flex-row"><div class="d-flex " style="padding-top: 15px;"><i  style=" font-size:22px !important;  " onclick="addChecklist(\'' + res[i]["titreAction"] + '\')" class="bi bi-plus-circle svgg"></i></div><div class="btn d-flex justify-content-center" style="margin-top:1em;margin-bottom:1em;width:100%;text-align: center; margin-left:1em" >  ' + res[i]["titreAction"] + '</div></div>'
                    }

                }


            }

            document.getElementById("bodyTabBoard").innerHTML = setBodyForm



        }
    };
    xhr.send()
}

function addChecklist(titreAction) {
    //Create checklist 
    //assign checklist reload
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var body = {
        "titreCheclist": titreAction

    };
    const data = JSON.stringify(body)
    var url = 'http://' + urlDeploy + ':3030/events/checklist/';
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            localStorage.setItem("idChecklist", CryptoJS.AES.encrypt(res["_id"], secretPhrase))
            assignChecklist()

        }
    };
    xhr.send(data)
}

function assignChecklist() {
    console.log(idCheclistAAssign)
    var idCheclistAAssign = CryptoJS.AES.decrypt(localStorage.getItem("idChecklist"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/checklist/' + idCheclistAAssign + '/' + id;
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            document.location.reload();

        }
    };
    xhr.send()
}
function initEventPage() {
    
    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/event/' + id;
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
           

            localStorage.setItem("eventTitre", CryptoJS.AES.encrypt(res["titreEvent"], secretPhrase))
            localStorage.setItem("eventDate", CryptoJS.AES.encrypt(res["dateEvent"], secretPhrase))
            localStorage.setItem("eventBudget", res["budgetEvent"])
            localStorage.setItem("eventType", CryptoJS.AES.encrypt(res["_typeEvent"]["libelle"], secretPhrase))
          
            let objLinea = JSON.stringify(res["_checklists"]);
            localStorage.setItem("eventChecklist", res["objLinea"])

            var s = '<h1 class="h2">' + res['titreEvent'] + '</h1>'
            document.getElementById("typeEvents").innerHTML = s
            var setTitre = ''

            setTitre += '<div class="btn " style="width: 100%;margin-top:1em;" onclick="modifTitre()"> <div class=" d-inline p-2 justify-content-start"> Votre titre : </div><div class="d-inline p-2 justify-content-end">' + res['titreEvent'] + '</div><div></div>'


            document.getElementById("infoTitre").innerHTML = setTitre
            var setBudget = ''

            setBudget += '<div class="btn "   style="width: 100%; margin-top:1em;" onclick="modifBudget()" > <div class=" d-inline p-2 justify-content-start"> Votre Budget :</div><div class="d-inline p-2 justify-content-end"> ' + res['budgetEvent'] + ' € </div><div></div>'

            document.getElementById("infoBudget").innerHTML = setBudget
            var settype = ''

            settype += ' <div class="btn " style="width: 100%; margin-top:1em;" onclick="modifType()"> <div class=" d-inline p-2 justify-content-start">Catégorie : </div><div class="d-inline p-2 justify-content-end">' + res['_typeEvent']["libelle"] + '</div><div></div>'

            document.getElementById("infoTypeEvent").innerHTML = settype
            var setDate = ''

            setDate += '<div class="btn " style="width: 100%; margin-top:1em;" onclick="modifDate()"> <div class=" d-inline p-2 justify-content-start">Date : </div><div class="d-inline p-2 justify-content-end">' + res['dateEvent'] + ' </div><div></div>'

            document.getElementById("infoDate").innerHTML = setDate

            if (res['_checklists'].length != 0) {
                var checklist = '</br>'
                for (var t = 0; t < res['_checklists'].length; t++) {
                    checklist += '<div class="d-flex flex-row"><div class=" btn  p-2 justify-content-start" onclick="afficheDetailChecklist(\'' + res['_checklists'][t]['_id'] + '\')" style="width: 100%; ">' + res['_checklists'][t]['titreCheclist'] + ' </div><div class=" p-2 justify-content-end btn btn-outline-danger"  style="border-color: #dc3545;"><i class="bi bi-trash" onclick="removeChecklist(\'' + res['_checklists'][t]['_id'] + '\')"></i></div></div></br>'
                }
               
                document.getElementById("mesChecklists").innerHTML = checklist
            }

        }
    };
    xhr.send()
}

function initPubcoter() {
    var urler = 'http://' + urlDeploy + ':3030/events/pubcote';
    const xhrf = new XMLHttpRequest()
    xhrf.open('GET', urler, true)
    xhrf.setRequestHeader('content-type', 'application/json')
    xhrf.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhrf.responseType = "json"
    var res
    xhrf.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhrf.response;
            console.log(res)
            var data = (res[0]["img"]["img"]).split(',')[1];
            var binaryBlob = atob(data);


            var myimg = document.getElementById("myimg")
            myimg.src = 'data:image/jpeg;base64,' + btoa(binaryBlob);

        }
    };
    xhrf.send()
}