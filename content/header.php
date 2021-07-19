<head>
    <meta charset="utf-8">
    <title>My Event</title>
    <link rel="icon" type="image/png" sizes="16x16" href="myevent.png">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="util.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script>
        // console.log('toto')
        // var toto = 2
        // if(toto == 2){
        //     document.location.href = "payment.php"
        // }
    </script>


    <!-- A demander -->
<!-- <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style> -->
</head>

<<<<<<< Updated upstream
<header class="p-3 bg-dark text-white"><div class="container">
 
  <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div class="container-fluid">
    <a href="index.php" class="nav-link px-2 text-white">  <img src="myevent.png" style="width:130px;height:auto" class="card-img-top" alt="..."></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.php">Acceuil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item" id="navEspacePrive" style="display:none">
            <a class="nav-link" href="espacePrive.php">Espace Privé</a>
          </li>
          <li class="nav-item" id="navEspace" style="display:none">
            <a class="nav-link" href="espace.php">Espace Privé</a>
          </li>
        </ul>
        <form>
        <div style ="col-12" class="row align-items-center"> 
        <div class="col-4"> <i class="bi bi-chat" id="tchat" style="display : none;font-size: 2rem; color: cornflowerblue;"></i></div>
        <div class="col-4">  <i class="bi bi-person"  id="profil" style="display:none;font-size: 2rem; color: cornflowerblue;"></i></div>
        <div class="col-4"> <input style="background-color:#e685b5 ;  border-color:#e685b5; display:none" class="btn btn-primary" type="button" id="buttunDeco" name="buttunDeco"
                value="Deconnexion" onclick="deco()" /></div>
=======
<header onload="test();" class="p-3 bg-dark text-white">
    <div class="container">
        <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
            <div class="container-fluid">
                <a href="index.php" class="nav-link px-2 text-white">  <img src="myevent.png" style="width:130px;height:auto" class="card-img-top" alt="..."></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.php">Acceuil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pricing.php">Pricing</a>
                        </li>
                        <li class="nav-item" id="navEspacePrive" style="display:none">
                            <a class="nav-link" href="espacePrive.php">Espace Privé</a>
                        </li>
                        <li class="nav-item" id="navEspace" style="display:none">
                            <a class="nav-link" href="espace.php">Espace Privé</a>
                        </li>
                    </ul>
                    <form>
                        <div style ="col-12" class="row align-items-center"> 
                        <div class="col-4"> <i class="bi bi-chat" id="tchat"  style="display : none;font-size: 2rem; color: cornflowerblue;"></i></div>
                        <div class="col-4">  <i class="bi bi-person"  id="profil" onclick="tolocationprofil()" style="display:none;font-size: 2rem; color: cornflowerblue;"></i></div>
                        <div class="col-4"> <input style="background-color:#e685b5 ;  border-color:#e685b5; display:none" class="btn btn-primary" type="button" id="buttunDeco" name="buttunDeco"value="Deconnexion" onclick="deco()" /></div>
                        </div>
                        <button type="button" id="buttunLogin" style="background-color:#e685b5 ;  border-color:#e685b5" class="btn btn-primary" onclick="hrefConnexion()">Login</button>
                        <button type="button"  id="buttunSignUp" style="background-color:#e685b5 ; border-color:#e685b5" class="btn btn-primary" onclick="hrefInscription()">Sign-up</button>  
                    </form>
>>>>>>> Stashed changes
                </div>
            </div>
        </nav>
    </div>
</header>
