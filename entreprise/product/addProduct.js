function initPageAddProduct() {
    var typeProduct = typeProduit();
    console.log(typeProduct)
    var options = ""
    options += '<div class="form-group row">'
    options += ' <label for="typeProduit" class=" col-form-label">Choississez le type du produit</label>'
    options += ' <select class="form-select" id="typeProduit">'
    for (var k = 0; k < typeProduct.length; k++) {
        options += '<option value=\'' + typeProduct[k] + '\' >' + typeProduct[k] + '</option>'
    }
    options += ' </select>'
    options += '   </div>'
    console.log(options)
    document.getElementById("optionSelectTypeProduct").innerHTML = options
}