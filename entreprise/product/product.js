function initPageProduct() {
    var jsonProduct = JSON.parse(localStorage.getItem("_products"))
    console.log(jsonProduct)
    if (Object.keys(jsonProduct).length != 0) {
        var s = ''
        for (var i = 0; i < jsonProduct.length; i++) {
            s += '<button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem;" onclick="tolocationUpdateProduct(\'' + jsonProduct[i]["_id"] + '\')">' + jsonProduct[i]["typeProduct"] + '</button>'
        }

        document.getElementById("products").innerHTML = s
    }
}