function assignMessageClientConv(idMessageClient, idconv) {
    var url = 'http://' + urlDeploy + ':3030/events/messagesociety/' + idMessageClient + '/' + idconv + '';
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
function ajoutMessage(idconv) {
    var content = document.getElementById("floatingTextarea2").value;

    var now = new Date();
    now = now.toString();
    var url = 'http://' + urlDeploy + ':3030/events/messagesociety/';
    var body = {
        "idUserSociety": CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8),
        "idConversation": idconv,
        "content": content,
        "dateTime": now

    }
    const data = JSON.stringify(body)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            console.log(res)

            assignMessageClientConv(res["_id"], idconv)

        }
    };
    xhr.send(data)
}
function afficheMessage(idConv) {
    var url = 'http://' + urlDeploy + ':3030/events/conversation/' + idConv;
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
            var k = ''

            k += '  <div class="form-floating">'
            k += ' <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>'
            k += '<label for="floatingTextarea2">Message</label>'
            k += ' </div>'
            k += '<div class="d-grid gap-2"> <button type="button" class="btn btn-outline-success" onclick="ajoutMessage(\'' + idConv + '\')">Send</button></div>'
            if ((res["_messagesClient"].length != 0) || (res["_messagesSociety"].length != 0)) {      //only one tab for filter by date

                var date = []
                for (var t = 0; t < res["_messagesClient"].length; t++) {

                    date[t] = {
                        "date": new Date(res["_messagesClient"][t]["dateTime"]),
                        "value": res["_messagesClient"][t]
                    }
                }
                var legent = date.length
                for (g = 0; g < res["_messagesSociety"].length; g++) {

                    date[g + legent] = {
                        "date": new Date(res["_messagesSociety"][g]["dateTime"]),
                        "value": res["_messagesSociety"][g]
                    }
                }

                date.sort((a, b) => a.date - b.date);
                console.log(date)
                var d = ''
                for (var x = 0; x < date.length; x++) {
                    if (date[x]["value"].hasOwnProperty('idUserClient')) {
                        var heure = ''
                        heure = '' + date[x]["date"].getHours() + ' : ' + date[x]["date"].getMinutes() + ''
                        d += template_message_gauche(date[x]["value"]["content"], heure)
                    }
                    else {
                        var heure = ''
                        heure = '' + date[x]["date"].getHours() + ' : ' + date[x]["date"].getMinutes() + ''
                        d += template_message_droite(date[x]["value"]["content"], heure)
                    }
                }
                document.getElementById("lesMessages").innerHTML = d
            }
            else {
                document.getElementById("lesMessages").innerHTML = '<h1>Vous n\'avez pas de messages</h1>'
            }
            document.getElementById("areaText").innerHTML = k
        }

    };
    xhr.send()
}

function template_message_droite(content, date) {
    var s = ''
    s += '<div class="containere darker">'
    s += '      <div class="d-flex justify-content-end"><i class="bi bi-person-fill "></i></div>'
    s += '      <p>' + content + '</p>'
    s += '     <span class="time-left">' + date + '</span>'
    s += '   </div>'
    return s
}
function template_message_gauche(content, date) {
    var s = ''
    s = ' <div class="containere">' +
        '<i class="bi bi-cart-plus"></i>' +
        '<p>' + content + '</p>' +
        '<span class="time-right">' + date + '</span>' +
        '</div>'
    return s
}


function clickX() {
    $(".validation").animate({ 'height': '16px' }, 500).show();
}

function initPageMessagerieSociety() {


    var role = CryptoJS.AES.decrypt(localStorage.getItem("role"), secretPhrase).toString(CryptoJS.enc.Utf8);
    var id = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8);
    var url = ''
    if (role == 'entreprise') {
        url = 'http://' + urlDeploy + ':3030/events/society/' + id;
    }
    else {
        url = 'http://' + urlDeploy + ':3030/events/client/' + id;
    }

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
            if (res["_conversation"].length != 0) {
                var s = ''
                for (var f = 0; f < res["_conversation"].length; f++) {

                    s += '  <div class="btn " style="width: 100%;margin-top:1em;" onclick="afficheMessage(\'' + res["_conversation"][f]["_id"] + '\')"> <div class=" d-inline p-2 justify-content-start"> ' + res["_conversation"][f]["_idUserClient"]["nom"] + ' </div><div class="d-inline p-2 justify-content-end">' + res["_conversation"][f]["_product"]["typeProduct"] + ' : ' + res["_conversation"][f]["_product"]["priceProduct"] + ' €</div></div>'
                }
                document.getElementById("mesConversations").innerHTML = s
            }
            else {
                document.getElementById("mesConversations").innerHTML = '<h1>Vous n\'avez pas de conversation</h1>'
            }

        }

    };
    xhr.send()

}