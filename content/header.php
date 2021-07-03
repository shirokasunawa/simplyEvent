<head>
  <meta charset="utf-8">
  <title>Titre de la page</title>
  
  <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <!-- JavaScript Bundle with Popper -->
 <script src="util.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<style>
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
  </style>
</head>

<header class="p-3 bg-dark text-white"><div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
      <div class="col-sm">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.php" class="nav-link px-2 text-white">Acceuil</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
           <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
           <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>
          
      </div>
     
      <div class="col-sm ">   <i class="bi bi-messenger" id="tchat" style="display : none" ></i> </div>
         
         <div class="col-sm"> <i class="bi bi-person-fill" id="profil" style="display : none" ></i> </div>
      
        <div class="col-sm">
            
          <div class="text-end">
            <button type="button" id="buttunLogin" class="btn btn-warning" onclick="hrefConnexion()">Login</button>
           <button type="button"  id="buttunSignUp" class="btn btn-warning" onclick="hrefInscription()">Sign-up</button>
           
        
        <input type="button" id="buttunDeco" style="display:none" name="buttunDeco"
                class="btn btn-warning" value="Deconnexion" onclick="deco()" />
       
    
      </div>
           </div>
          </div>
          </div>
         </header>
     