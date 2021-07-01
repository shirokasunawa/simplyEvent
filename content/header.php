
  <?php
        if(array_key_exists('buttunDeco', $_POST)) {
            session_destroy();
            header('Location: ./index.php');
        }
        
    ?>
<header class="p-3 bg-dark text-white"><div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.php" class="nav-link px-2 text-white">Acceuil</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
           <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
           <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>

       

          <div class="text-end">
            <a  href="connexion.php"><button type="button" id="buttunLogin" class="btn btn-warning">Login</button></a>
           <button type="button"  id="buttunSignUp" class="btn btn-warning">Sign-up</button>
           
         <form method="post">
        <input type="submit" id="buttunDeco" style="display:none" name="buttunDeco"
                class="btn btn-warning" value="Deconnexion" />
       
    </form>

           </div>
          </div>
          </div>
         </header>
     