

function setHeader() {
 

  var s = ''
  s += '<head>'
  s += ' <meta charset="utf-8">'
  s += ' <title>My Event</title>'
  
 
  s += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'
  s += '<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>'
  s += '<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>'
  s += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> '
  s += '<script src="../util.js"></script>'
  s += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css">'
  s += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">'
  s += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>'
  s += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">'
  s += '<style>'
  s += '   .bd-placeholder-img {'
  s += '     font-size: 1.125rem;'
  s += '     text-anchor: middle;'
  s += '     -webkit-user-select: none;'
  s += '     -moz-user-select: none;'
  s += '    user-select: none;'
  s += '   }'+
          'header button{'+
            'margin: 0 0.5rem;'+
          '}';
  s += '   @media (min-width: 768px) {'
  s += '     .bd-placeholder-img-lg {'
  s += '       font-size: 3.5rem;'
  s += '     }'
  s += '    }'
  s += ' </style>'
  s += '</head>'
  s += '<header class="p-3 bg-dark text-white" style="font-size:2rem; font-family: \'Dancing Script\';"><div class="">'

  s += ' <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">'
  s += '   <div class="container-fluid">'
  s += '   <div class="d-flex align-items-center"><img id="logoMyEvent" src="img/myevent.png" style="width:8rem;"/><div id="TitleMyEvent" style="margin-left: 2rem; width:22rem;"></div></div>'
 
  s += '   <a onclick="tolocationIndex()" class="nav-link px-2 text-white">  </a>'
  s += '     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">'
  s += '       <span class="navbar-toggler-icon"></span>'
  s += '    </button>'
  s += '  <div class="collapse navbar-collapse" id="navbarsExample02">'
  s += '    <ul class="navbar-nav" style="margin:auto;">'
  s += '      <li class="nav-item">'
  s += '        <a class="nav-link active" aria-current="page" onclick="tolocationIndex()">Acceuil</a>'
  s += '     </li>'
  s += '      <li class="nav-item">'
  s += '        <a class="nav-link" onclick="tolocationPricing()">Pricing</a>'
  s += '      </li>'
  s += '     <li class="nav-item" id="navEspacePrive" style="display:none">'
  s += '      <a class="nav-link" onclick="navigation(\'client/espace-prive.html\')">Espace Privé</a>'
  s += '      </li>'
  s += '     <li class="nav-item" id="navEspace" style="display:none">'
  s += '       <a class="nav-link" onclick="navigation(\'entreprise/espace.html\')">Espace Privé</a>'
  s += '      </li>'
  s += '    </ul>'
  s += '    <form class="d-flex" style="margin-left:auto;">'
  s += '    <div style ="col-12" class="row align-items-end justify-content-end"> '
  s += '   <div class="col-4"> <i class="bi bi-chat" id="tchat"  style="display : none;font-size: 2rem; color: cornflowerblue;" onclick="tolocationMessagerie()"></i></div>'
  s += '   <div class="col-4">  <i class="bi bi-person"  id="profil" onclick="tolocationprofil()" style="display:none;font-size: 2rem; color: cornflowerblue;"></i></div>'
  s += '    <div class="col-4"> <input style="background-color:#e685b5 ;  border-color:#e685b5; display:none ;font-size: 1.5rem;" class="btn btn-primary" type="button" id="buttunDeco" name="buttunDeco"'
  s += '            value="Deconnexion" onclick="deco()" /></div>'
  s += '            </div>'
  s += '    <button type="button" id="buttunLogin" style="background-color:#e685b5 ;  border-color:#e685b5;font-size: 1.5rem;" class="btn btn-primary" onclick="hrefConnexion()">Login</button>'
  s += '      <button type="button"  id="buttunSignUp" style="background-color:#e685b5 ; border-color:#e685b5;font-size: 1.5rem;" class="btn btn-primary" onclick="hrefInscription()">Sign-up</button>'

  s += '   </form>'
  s += ' </div>'
  s += ' </div>'
  s += '</nav>'

  s += '   </header>'

  document.getElementById("header").innerHTML = s

}
