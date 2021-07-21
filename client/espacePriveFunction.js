

function initEvent() {
    var id = CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8)
    var url = 'http://' + urlDeploy + ':3030/events/client/' + id;
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
            if (res[0]["_events"].length != 0) {
                var s = ''
                for (var i = 0; i < res[0]["_events"].length; i++) {
                    s += '<button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationMyEvent(\'' + res[0]["_events"][i]["_id"] + '\')">' + res[0]["_events"][i]["titreEvent"] + '</button>'
                }

                document.getElementById("events").innerHTML = s
            }

        }
    };
    xhr.send()
}

function tolocationAddEvent() {
    navigation("client/addEvent.html")
}