
  <?php
        if(array_key_exists('buttunDeco', $_POST)) {
            session_destroy();
            header('Location: ./index.php');
        }
        
    ?>
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
            <a  href="connexion.php"><button type="button" id="buttunLogin" class="btn btn-warning">Login</button></a>
            <a  href="inscription.php">  <button type="button"  id="buttunSignUp" class="btn btn-warning">Sign-up</button></a>
           
         <form method="post">
        <input type="submit" id="buttunDeco" style="display:none" name="buttunDeco"
                class="btn btn-warning" value="Deconnexion" />
       
    </form>
      </div>
           </div>
          </div>
          </div>
         </header>
     