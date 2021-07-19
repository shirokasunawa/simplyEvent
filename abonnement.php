<!doctype html>
<html lang="fr">
    <?php 
        include("./content/header.php"); 
        include("./content/footer.html"); 
    ?>
    <head>
        <meta charset="UTF-8">
        <title>Abonnement</title>
        <link rel="stylesheet" href="./style/style.css"/>
    </head>
    <body onload="testConnexion()"> 
        <main class="text-center align-items-center" style="height: 100%;"> 
            <div class="mt-4">
                <h3>Abonnement Publicitaire</h3>
            </div>
            <div class="mt-4">
                </h6>Vous n'avez souscrit à aucun abonnement</h6>
            </div>
            <div class="align-items-center">
                <button type="button" class="btn btn-outline-dark" style="width: 18rem;margin: 1.5rem 1.5rem;height:10rem; background-color:#e685b5;  border-color:#e685b5;" onclick="abonné();">S'abonner +</button>
            </div>
        </main>
    </body>
</html>