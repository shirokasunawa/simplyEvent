<!doctype html>
<html lang="fr">
    <?php 
        include("./content/header.php"); 
        include("./content/footer.html"); 
    ?>
    <head>
        <meta charset="UTF-8">
        <title>Page de payment</title>
        <link rel="stylesheet" href="./style/style.css"/>
    </head>
    <body  onload="testConnexion()"> 
        <div class="container mt-5 text-center">
            <main class="p-5"> 
            <div class="padding align-middle">
                    <div class="row align-items-center">
                    <div class="col-sm-6">
                            <div class="card align-middle">
                                <div class="card-header">
                                    <strong>Information de payment</strong>
                                </div>
                                <div class="card-body">
                                    <p>
                                        Chère Monsieur, erere
                                        Afin d'accéder à notre site et pourvoir profiter de tout. Vous devez payer la somme de 200 €.
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <h6> My Event - Site d'organisation d'évènement</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 p-0">
                            <div class="card">
                                <div class="card-header">
                                    <strong>Carte de Crédit</strong>
                                    <small>entrer vos informations</small>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="name">Nom</label>
                                                <input class="form-control" id="name" name="card" type="text" placeholder="Enter your name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="ccnumber">Numéro de carte</label>
                                                <div class="input-group">
                                                    <input class="form-control" id="number" name="card" type="text" placeholder="0000 0000 0000 0000" autocomplete="email">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="mdi mdi-credit-card"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-sm-4">
                                            <label for="ccmonth">Mois</label>
                                            <select class="form-control" id="ccmonth" name="card">
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-4">
                                            <label for="ccyear">Année</label>
                                            <select class="form-control" id="ccyear" name="card">
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="cvv">CVV/CVC</label>
                                                <input class="form-control" id="cvv" name="card" type="text" placeholder="123">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-sm btn-success float-right" type="submit"onclick="createPaymentMethods();"><i class="mdi mdi-gamepad-circle"></i> Payer 200€</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>  
        </div>
    </body>
</html>