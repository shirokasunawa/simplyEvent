
<!doctype html>
<html lang="fr">
<body onload="testConnexion()"  class="text-center">
<?php  include("./content/header.php");  include("./content/footer.html"); ?>
  <!-- Le reste du contenu -->
<script>


   let cookie= getCookie('nomuser')
  if( cookie=='' )
  {
    document.location.href = "index.php"
  }
  </script>
 
   
   <div class="container-fluid">
  
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        
          <div class="sidebar-sticky" >
          
            <div class=" align-content-stretch">
              <span id="infoTitre"></span>
              
              <span id="infoBudget"></span>
              <span id="infoTypeEvent"></span>
              
              <span id="infoDate"></span>
              
            </div>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Vos Actions</span>
            
              <diV class="d-flex align-items-center text-muted" >
   <svg class="svg" onclick="afficheChecklist()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
               
              </diV>
            </h6>
            <ul class="nav flex-column mb-2">
             <!-- <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Year-end sale
                </a>
              </li>-->
              <span id="mesChecklists"></span>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
             <span id="typeEvents"></span>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
               <!-- <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>-->
                <button class="btn btn-sm btn btn-outline-danger" onclick="deleteEvent()" style="    border-color: #dc3545;">Supprimer <i class="bi bi-trash"></i></button>
              </div>
            <!--  <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                This week
              </button>-->
            </div>
          </div>

          <span id="bodyTabBoard"> </span>
         
        
        </main>
      </div>
    </div>
   <script>
 
       var id=  localStorage.getItem("temporaryVarClicke")
    var url = 'http://localhost:3030/events/event/'+id;
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
            
            localStorage.setItem("eventTitre",res["titreEvent"])
            localStorage.setItem("eventDate",res["dateEvent"])
            localStorage.setItem("eventBudget",res["budgetEvent"])
            localStorage.setItem("eventType",res["_typeEvent"]["libelle"])
            //localStorage.setItem("eventType",res["_typeEvent"])
            let objLinea = JSON.stringify(res["_checklists"]);
            localStorage.setItem("eventChecklist",res["objLinea"])
           
           var s = '<h1 class="h2">'+res['titreEvent']+'</h1>'
            document.getElementById("typeEvents").innerHTML = s
            var setTitre =''
        
            setTitre +='<div class="btn " style="width: 100%;margin-top:1em;" onclick="modifTitre()"> <div class=" d-inline p-2 justify-content-start"> Votre titre : </div><div class="d-inline p-2 justify-content-end">'+res['titreEvent']+'</div><div></div>'
 
       
            document.getElementById("infoTitre").innerHTML =setTitre
            var setBudget =''
      
            setBudget +='<div class="btn "   style="width: 100%; margin-top:1em;" onclick="modifBudget()" > <div class=" d-inline p-2 justify-content-start"> Votre Budget :</div><div class="d-inline p-2 justify-content-end"> '+res['budgetEvent']+' € </div><div></div>'

            document.getElementById("infoBudget").innerHTML =setBudget
            var settype =''
   
            settype +=' <div class="btn " style="width: 100%; margin-top:1em;" onclick="modifType()"> <div class=" d-inline p-2 justify-content-start">Catégorie : </div><div class="d-inline p-2 justify-content-end">'+res['_typeEvent']["libelle"]+'</div><div></div>'
  
            document.getElementById("infoTypeEvent").innerHTML =settype
            var setDate =''
       
            setDate +='<div class="btn " style="width: 100%; margin-top:1em;" onclick="modifDate()"> <div class=" d-inline p-2 justify-content-start">Date : </div><div class="d-inline p-2 justify-content-end">'+res['dateEvent']+' </div><div></div>'
    
            document.getElementById("infoDate").innerHTML =setDate
           
            if(res['_checklists'].length!=0)
            {
              var checklist='</br>'
              for(var t=0; t<res['_checklists'].length;t++){
                checklist+= '<div class="d-flex flex-row"><div class=" btn  p-2 justify-content-start" onclick="afficheDetailChecklist(\''+res['_checklists'][t]['_id']+'\')" style="width: 100%; ">'+res['_checklists'][t]['titreCheclist']+' </div><div class=" p-2 justify-content-end btn btn-outline-danger"  style="border-color: #dc3545;"><i class="bi bi-trash" onclick="removeChecklist(\''+res['_checklists'][t]['_id']+'\')"></i></div></div></br>'
              }
             // console.log(res['_checklists'])
              document.getElementById("mesChecklists").innerHTML = checklist
            }

        }
    };
    xhr.send()

function afficheDetailChecklist(idChecklist){
  console.log(idChecklist)
 
  var url = 'http://localhost:3030/events/checklist/'+idChecklist;

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
                   var s=''
  s+='<div class="row" style="height: 50%;">'
  s+=' <div class="form-group">'
          s+='<div class="form-group row">'
          s+='  <label for="budgetEvent" class=" col-form-label">Indiquer le prix ou votre budget </label>'
          s+='  <div class="">'
          s+=' <input type="number" class="form-control" id="budgetEvent" name="budgetEvent"min="0" >'
          s+=' </div>'
          s+='</div></br>'
          s+='<div class="form-group row">'
          s+='  <label for="budgetEvent" class=" col-form-label">Indiquer la quantite</label>'
          s+='  <div class="">'
          s+=' <input type="number" class="form-control" id="budgetEvent" name="budgetEvent"min="0" >'
          s+=' </div>'
          s+='</div></br>'
  
        //check non présence d'informations 
         if(res["prixCheclist"])
         {
          s += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" type="button" class="btn btn-primary"  >Modifier</button>';
         }
         else{
          
          s += ' <button style="background-color:#e685b5 ;  border-color:#e685b5" type="button" class="btn btn-primary"  >Ajouter</button>';
         
         }
         s+='</div>'
s+='</div></br>'

s+='<span id="viewDiv"></span>'

document.getElementById("bodyTabBoard").innerHTML = s

afficheProduit()
     }
 };
 xhr.send()

}
function afficheProduit(){
  var url = 'http://localhost:3030/events/society/';

           
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
            var string='';
            string+='<div class="row" style="height: 50%;">'
            for(var n=0;n<res.length;n++){

              if(res[n]["_products"].length !=0){
                string +=' <button    type="button" style="margin: 5px;" class="btn-outline-primary btn-lg btn-block"  >'+res[n]["nameSociety"]+'</button></br>'
              }
            }
            string+='</div>'
           document.getElementById("viewDiv").innerHTML = string
        }
    };
    xhr.send()
}
    function modifTitre(){
      var setBodyForm=''
      setBodyForm+=' <div class="d-flex justify-content-center">'
      setBodyForm+='<div class="form-signin">'
      setBodyForm+=' <div class="form-group row">'
      setBodyForm+=' <label for="titreEvent"  class="col-form-label">Modifier le titre à votre évènement</label>'
      setBodyForm+=' <div class="">'
      setBodyForm+='  <input type="text"   class="form-control" id="titreEvent" >'
      setBodyForm+=' </div>'
      setBodyForm+=' </div></br>'
      setBodyForm+=' <button class="btn " onclick="modifTitreBtn()">Modifier</button></div></div>'
      document.getElementById("bodyTabBoard").innerHTML = setBodyForm
     var titre = localStorage.getItem("eventTitre")
      document.getElementById("titreEvent").value = titre
    }

    function removeChecklist(idChecklist){
      console.log(idChecklist)
  var url = 'http://localhost:3030/events/checklist/'+idChecklist;

   const xhr = new XMLHttpRequest()
    xhr.open('DELETE', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
                      
            //localStorage.setItem("eventTitre",newDate)
            document.location.reload();
            
        }
    };
    xhr.send()
    }

    function deleteEvent(){
    
  var id=  localStorage.getItem("temporaryVarClicke")
  var url = 'http://localhost:3030/events/event/'+id;

    const xhr = new XMLHttpRequest()
    xhr.open('DELETE', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
                      
            //localStorage.setItem("eventTitre",newDate)
            document.location ="espacePrive.php";
            
        }
    };
    xhr.send()
    }

function modifTitreBtn(){
  var newDate = document.getElementById("titreEvent").value
  var id=  localStorage.getItem("temporaryVarClicke")
  var url = 'http://localhost:3030/events/event/'+id;

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
                      
            localStorage.setItem("eventTitre",newDate)
            document.location.reload();
            
        }
    };
    xhr.send(data)
}
    function modifBudget(){
      var setBodyForm=''
      setBodyForm+=' <div class="d-flex justify-content-center">'
      setBodyForm+='<div class="form-signin">'
      setBodyForm+='<div class="form-group row">'
      setBodyForm+='  <label for="budgetEvent" class=" col-form-label">Modifier votre budget ?</label>'
      setBodyForm+='  <div class="">'
      setBodyForm+=' <input type="number" class="form-control" id="budgetEvent" name="budgetEvent"min="0" >'
      setBodyForm+=' </div>'
      setBodyForm+='</div></br>'
      setBodyForm+=' <button class="btn " onclick="modifBudgetBtn()">Modifier</button></div></div>'
      document.getElementById("bodyTabBoard").innerHTML = setBodyForm
      var budget = localStorage.getItem("eventBudget")
      document.getElementById("budgetEvent").value = budget
    }

    function modifBudgetBtn(){
      var newDate = document.getElementById("budgetEvent").value
  var id=  localStorage.getItem("temporaryVarClicke")
  var url = 'http://localhost:3030/events/event/'+id;

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
                      
            localStorage.setItem("eventBudget",newDate)
            document.location.reload();
            
        }
    };
    xhr.send(data)
    }

function modifType(){
  var url = 'http://localhost:3030/events/typeEvents/';
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
            var setBodyForm=''
            setBodyForm+=' <div class="d-flex justify-content-center">'
            setBodyForm+='<div class="form-signin">'
            setBodyForm+='<div class="form-group row">'
            setBodyForm +=' <label for="typeProduit" class=" col-form-label">Modifier le type du produit</label>'
            setBodyForm +='  <div class="">'
            setBodyForm +='   <select class="form-select"id="typeProduit" >'
            
            for(var i=0;i<res.length;i++){
              setBodyForm += '<option  value=\''+res[i]["_id"]+'\'>'+res[i]["libelle"]+'</option>'
            }
            setBodyForm +='   </select>'
         
            setBodyForm+=' </div>'
            setBodyForm+='</div></br>'
            setBodyForm+=' <button class="btn " onclick="modifTypeBtn()">Modifier</button></div></div>'
            document.getElementById("bodyTabBoard").innerHTML = setBodyForm
           
      
            
        }
    };
    xhr.send()
}
function modifTypeBtn(){
 var newType = document.getElementById("typeProduit").value
  console.log(newType)
  var id=  localStorage.getItem("temporaryVarClicke")
  //console.log(id)
  var url = 'http://localhost:3030/events/typeEvents/'+newType+'/'+id;
//console.log(url)
 
          
          
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
                      
           // localStorage.setItem("eventDate",newDate)
           document.location.reload();
            
        }
    };
    xhr.send()
}

function modifDate(){
          var setBodyForm=''
          setBodyForm+=' <div class="d-flex justify-content-center">'
          setBodyForm+='<div class="form-signin">'
          setBodyForm+='<div class="form-group row">'
          setBodyForm+=' <label for="dateEvent" class=" col-form-label">Modifier la date de votre évènement</label>'
          setBodyForm+=' <div class="">'
          setBodyForm+=' <input type="date" class="form-control" id="dateEvent" name="dateEvent" min="0" >'
          setBodyForm+='  </div>'
          setBodyForm+='</div></br>'
          setBodyForm+=' <button class="btn " onclick="modifEventDate()">Modifier</button></div></div>'
          document.getElementById("bodyTabBoard").innerHTML = setBodyForm
          var budget = localStorage.getItem("eventDate")
      document.getElementById("dateEvent").value = budget
         
}
function modifEventDate(){
  var newDate = document.getElementById("dateEvent").value
  var id=  localStorage.getItem("temporaryVarClicke")
  var url = 'http://localhost:3030/events/event/'+id;

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
                      
            localStorage.setItem("eventDate",newDate)
            document.location.reload();
            
        }
    };
    xhr.send(data)
}

function afficheChecklist(){
  var url = 'http://localhost:3030/events/typeActions/';
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhr.response;
           
            var setBodyForm=''
            var typeEvent = localStorage.getItem("eventType")
            for(var i=0;i<res.length;i++){
 
                for(var k=0;k<res[i]["_typeEvent"].length;k++){
                  if(res[i]["_typeEvent"][k]["libelle"]==typeEvent)
                  {
                   
                    setBodyForm += '<div class="d-flex flex-row"><div class="d-flex " style="padding-top: 15px;"><i  style=" font-size:22px !important;  " onclick="addChecklist(\''+res[i]["titreAction"]+'\')" class="bi bi-plus-circle svgg"></i></div><div class="btn d-flex justify-content-center" style="margin-top:1em;margin-bottom:1em;width:100%;text-align: center; margin-left:1em" >  '+res[i]["titreAction"]+'</div></div>'
                  }
                
                }
            
             
            }
            
            document.getElementById("bodyTabBoard").innerHTML = setBodyForm
            
      
            
        }
    };
    xhr.send()
}

function addChecklist(titreAction){
  //Create checklist 
  //assign checklist reload
  var id=  localStorage.getItem("temporaryVarClicke")
  var body = {
                "titreCheclist": titreAction
     
            };
            const data = JSON.stringify(body)
  var url = 'http://localhost:3030/events/checklist/';
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.setRequestHeader('authorization', 'Bearer 123abc456def')
    xhr.responseType = "json"
    var res
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            res = xhr.response;
            localStorage.setItem("idChecklist",res["_id"])
          assignChecklist()
            
        }
    };
    xhr.send(data)
}

function assignChecklist(){
  console.log(idCheclistAAssign)
  var idCheclistAAssign = localStorage.getItem("idChecklist")
  var id=  localStorage.getItem("temporaryVarClicke")
  var url = 'http://localhost:3030/events/checklist/'+idCheclistAAssign+'/'+id;
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
    </script>
    <style>
       .btn {
        border-width: 2px;
        border-color: #ffeecc;

}
    .btn:hover {
      background-color: #ffeecc;

}
.svg:hover {
      background-color: #ffeecc;
      cursor: pointer;
      border-radius: 15px;

}
.svgg:hover {
      background-color: #ffeecc;
      cursor: pointer;
      border-radius: 15px;
      height: 27px   
    
}
    </style>
  
</body>
</html>