
<div id="demo" class="carousel slide" data-ride="carousel">
        <!-- Indicateurs -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- Carrousel -->
        <div class="carousel-inner">
          <span id="carousel"></span>
           </div>
        <!-- Contrôles -->
        <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
      </div>
</br>
<style>
    .demo{
        position: absolute !important;
    }
   .carousel-inner{
  width:100%;
  max-height: 200px !important;
}
    </style>
<script>
var url = 'http://localhost:3030/events/pubBanner/'
var xhrr = new XMLHttpRequest()
           
            xhrr.open('GET', url, true)
            xhrr.setRequestHeader('content-type', 'application/json')
            xhrr.setRequestHeader('authorization', 'Bearer 123abc456def')
            xhrr.responseType = "json"
            xhrr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    res = xhrr.response;
                    //console.log(res)
                // console.log(res)
                var s=''
                for(var f=0;f<3;f++)
                {
                   switch(f)
                   {
                       case 0 :
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                          
                          
                           s+='  <div class="carousel-item active">'
                           s+=' <img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 1" class="d-block w-100">'
                           s+='  <div class="carousel-caption d-none d-md-block">'
                           s+='   <h4>Titre de la légende</h4>'
                           s+='   <p>Légende de la slide n°1.</p>'
                           s+=' </div>'
                           s+='  </div>'
                           break;
                    case 1: 
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                        s+=' <div class="carousel-item">'
                        s+='<img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 2" class="d-block w-100">'
                        s+='<div class="carousel-caption d-none d-md-block text-dark">'
                        s+='  <h4>Titre de la légende</h4>'
                        s+='  <p>Légende de la slide n°2.</p>'
                        s+=' </div>'
                        s+=' </div>'
                        break;
                    case 2:
                        var data=(res[f]["img"]["img"]).split(',')[1];
                        var binaryBlob = atob(data);
                        s+='    <div class="carousel-item">'
                        s+='<img src="data:image/jpeg;base64,'+btoa(binaryBlob)+'" alt="Carrousel slide 3" class="d-block w-100">'
                        s+='<div class="carousel-caption d-none d-md-block">'
                        s+='  <h4>Titre de la légende</h4>'
                        s+='  <p>Légende de la slide n°3.</p>'
                        s+=' </div>'
                        s+=' </div>'
                        
                        break;
                   }
                }
                document.getElementById("carousel").innerHTML=s
                }
            };
            xhrr.send()
</script>