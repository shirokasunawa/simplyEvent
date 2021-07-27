function initPageMyProduct() {
    var typeProduct = typeProduit();
    var options = ''
    options += '<div class="form-group row">'
    options += ' <label for="typeProduit" class=" col-form-label">Choississez le type du produit</label>'
    options += '  <div class="">'
    options += '   <select class="form-select" id="typeProduit">'
    for (var k = 0; k < typeProduct.length; k++) {
        options += '<option value=\'' + typeProduct[k] + '\'>' + typeProduct[k] + '</option>'
    }
    options += '   </select>'
    options += '   </div>'
    options += '   </div>'
    document.getElementById("optionSelectTypeProduct").innerHTML = options

    var id = CryptoJS.AES.decrypt(localStorage.getItem("temporaryVarClicke"), secretPhrase).toString(CryptoJS.enc.Utf8)
    console.log(id)
    var jsonProduct = JSON.parse(localStorage.getItem("_products"))
    if (Object.keys(jsonProduct).length != 0) {

        for (var i = 0; i < jsonProduct.length; i++) {
            console.log(jsonProduct[i])
            if (jsonProduct[i]["_id"] == id) {
                console.log("trouve")
                console.log(jsonProduct[i])
                if (jsonProduct[i]["nomProduct"] !== undefined) {
                    document.getElementById("nomProduit").style.display = 'block'
                    document.getElementById("nomProduit").value = jsonProduct[i]["nomProduct"]
                }
                document.getElementById("prixProduit").value = jsonProduct[i]["priceProduct"]
                document.getElementById("typeProduit").value = jsonProduct[i]["typeProduct"]
               
            }
        }


    }
}