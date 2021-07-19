<!doctype html>
<html lang="fr">
    <?php 
        include("./content/header.php"); 
        include("./content/footer.html");
        //test envoie de formulaire
    ?>
    <head>
        <meta charset="UTF-8">
        <title>Page d'inscription</title>
        <link rel="stylesheet" href="./style/style.css"/>
    </head>
    <body class="text-center">
        <main class="form-signin">
            <div class = "mb-4">
                <h1>Inscription</h1>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRclientCheckadios" id="clientCheck" value="client" onchange="afficheForm();">
                <label class="form-check-label" for="clientCheck">Je suis un particulier</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRclientCheckadios" id="societyCheck" value="society" onchange="afficheForm();">
                <label class="form-check-label" for="societyChecks">Je suis une entreprise</label>
            </div>
        </main>
        <span id="formInscription"></span>
    </body>
</html>