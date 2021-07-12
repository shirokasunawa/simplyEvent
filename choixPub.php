
<!doctype html>
<html lang="fr">
<body onload="testConnexion()">
<?php  include("./content/header.php");  include("./content/footer.html"); ?>
  <!-- Le reste du contenu -->
<script>
   let cookie= getCookie('nomuser')
  if( cookie=='' )
  {
    document.location.href = "index.php"
  }
  </script>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Nos prix</h1>
      <p class="fs-5 text-muted">Choississez le type de publiciter que vous voulez ajouter</p>
    </div>
  <div class="d-flex justify-content-center">
  
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Par Emplacement</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">100€<small class="text-muted fw-light">/mois</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>amplacement banner</li>
              <li>emplacement coter</li>
              <li>modale</li>
           
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" onclick="addPub('emplacement')">Choisir</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Par Abonnement</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">200€<small class="text-muted fw-light">/periode</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>3 mois d'affichage</li>
              <li>en top tendance</li>
              <li>En banner</li>
             
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" onclick="addPub('abonnement')">Choisir</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Par nombre de click</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">200€<small class="text-muted fw-light">/100clicks</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Votre publiciter s'affichera jusqu'a avoir été cliquer 100 fois</li>
              <li>Publicité proposer de façon pertinante</li>
             
              <li>pas de limite de temps</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary"onclick="addPub('nbrclick')">Choisir</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="display-6 text-center mb-4">Compare plans</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th style="width: 34%;"></th>
            <th style="width: 22%;">Par Emplacement</th>
            <th style="width: 22%;">Par Abonnement</th>
            <th style="width: 22%;">Par nombre de click</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Pertinance</th>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Limite de temps</th>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">Banner</th>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Coter</th>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Modal</th>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Par nombre de click</th>
            <td></td>
            <td></td>
            <td><i class="bi bi-check" width="24" height="24"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  </div>

</body>
<script>
  function addPub(typePub){
    
     
      localStorage.setItem("Pubchoisis",typePub)
      document.location.href = "Pub.php"
  }
    </script>
</html>