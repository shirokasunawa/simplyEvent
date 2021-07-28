
function paymentsub(typeAbonnement, idPhoto){
    // document.location.href= "abonnement.html"
 
 
   document.location.href = "abonnement.html?id=" + typeAbonnement + "&resId=" + idPhoto
   console.log(typeAbonnement)
 
   //  localStorage.setItem("pubChoisis",JSON.stringify(body))
 }
 
 function subcreatePaymentMethods(typeAbonnement,idPhoto){
     console.log(typeAbonnement)
     var cardAbonnement = findSelection("cardAbonnement");
     const xhr = new XMLHttpRequest()
     const urlsubcreatePaymentMethods = 'http://'+urlDeploy+':3032/payment/createPaymentMethods';
     // Saisie donné carte
     var number = document.getElementById("number").value;
     var month = document.getElementById("ccmonth").value;
     var years = document.getElementById("ccyear").value;
     var cvc = document.getElementById("cvv").value;
     body = {
         'number': number,
         'month': month,
         'years' : years,
         'cvc' : cvc,
     };
     const data = JSON.stringify(body)
     xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
             res = xhr.response;
            subAttachPaymentMethod(typeAbonnement,res.id,idPhoto);
             return res.id
         }
     };
     xhr.open('POST', urlsubcreatePaymentMethods,true)
     xhr.setRequestHeader('content-type', 'application/json')
     xhr.responseType = "json"
     xhr.send(data)
 }
 
 function subAttachPaymentMethod(typeAbonnement,idcard,idPhoto){
     console.log(typeAbonnement)
     var card = findSelection("card");
     const xhr = new XMLHttpRequest()
     const urlcustomers = 'http://'+urlDeploy+':3032/payment/attachPaymentMethod/'+ idcard;
     // Saisie donné carte
         body = {
             'customer' : localStorage.getItem("idCustomerStripe"),
         };
         const data = JSON.stringify(body)
         xhr.onreadystatechange = function () {
             if (xhr.readyState == 4 && xhr.status == 200) {
                 res = xhr.response;
                 subUpdateCustomer(typeAbonnement,idcard,idPhoto)
             }
         };
         xhr.open('POST', urlcustomers,true)
         xhr.setRequestHeader('content-type', 'application/json')
         xhr.responseType = "json"
         xhr.send(data)
 }
 
 function subUpdateCustomer(typeAbonnement,idcard,idPhoto){
     console.log(typeAbonnement)
     var card = findSelection("card");
     const xhr = new XMLHttpRequest()
     const urlcustomers = 'http://'+urlDeploy+':3032/payment/updateCustomers/'+ localStorage.getItem("idCustomerStripe");
     // Saisie donné carte
         body = {
             'idPaymentMethode' : idcard,
         };
         const data = JSON.stringify(body)
         xhr.onreadystatechange = function () {
             if (xhr.readyState == 4 && xhr.status == 200) {
                 res = xhr.response;
                 sub(typeAbonnement,idcard,idPhoto)
             }
         };
         xhr.open('POST', urlcustomers,true)
         xhr.setRequestHeader('content-type', 'application/json')
         xhr.responseType = "json"
         xhr.send(data)
 }
 //function get
 function sub(typeAbonnement,default_payment_method,idPhoto){
 
     console.log(typeAbonnement)
     console.log(default_payment_method)
     console.log(localStorage.getItem("idCustomerStripe"))
     const xhr = new XMLHttpRequest()
     const urlsub = 'http://'+urlDeploy+':3032/payment/doSubscription';
     body = {
         'customer': localStorage.getItem("idCustomerStripe"),
         'default_payment_method': default_payment_method,
         'price' : typeAbonnement,
     };
     const data = JSON.stringify(body)
     xhr.onreadystatechange = function () {
         if (xhr.readyState == 4 && xhr.status == 200) {
             res = xhr.response;
             ajoutepubAbo(idPhoto)
                 return res.id
         }
     };
     xhr.open('POST', urlsub,true)
     xhr.setRequestHeader('content-type', 'application/json')
     xhr.responseType = "json"
     xhr.send(data)
 }
 ///////////////////////// Publicité //////////////////////////////

function ajoutepubAbo(idphoto){
    console.log("idphoto "+idphoto)
   var body=  localStorage.getItem("pubChoisis")
var url = 'http://'+urlDeploy+':3032/events/pub/'
const xhr = new XMLHttpRequest()


  xhr.open('POST', url, true)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
  xhr.responseType = "json"
  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
          res = xhr.response;
          //console.log(res)
      // console.log(res)
      console.log('ajoutepub')
          assignPub(idphoto,res["_id"])
      }
  };
  xhr.send(body)
}

function assignPub(idphoto,idpub){
    console.log('rentre fonction')
    console.log(idphoto)
    console.log(idpub)
  var url = 'http://'+urlDeploy+':3032/events/pub/'+idpub+'/'+idphoto
  console.log(url)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
  xhr.responseType = "json"
  xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
          res = xhr.response;
         // console.log(res)
      // console.log(res)
      console.log('assignpub')
             assignPubUserSociety(res["_id"])
      }
  };
  xhr.send()
}

function assignPubUserSociety(idpub){
var id=  CryptoJS.AES.decrypt(localStorage.getItem("_id"), secretPhrase).toString(CryptoJS.enc.Utf8);
var url = 'http://'+urlDeploy+':3032/events/pubSociety/'+idpub+'/'+id
const xhr = new XMLHttpRequest()
          
          xhr.open('POST', url, true)
          xhr.setRequestHeader('content-type', 'application/json')
          xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
          xhr.responseType = "json"
          xhr.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 201) {
                  res = xhr.response;
                  console.log(res)
              // console.log(res)
              console.log('pubsocietyasgin')
              navigation("entreprise/payment/mon-espace-pub.html") 
              }
          };
          xhr.send()
}


//////////// param 

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}