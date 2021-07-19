<!DOCTYPE html>
<html lang="fr">
    <?php  
        include("./content/header.php");    
        include("./content/footer.html"); 
    ?>
    <script>
            alert(document.cookie);
            /*  document.getElementById("titre").innerHTML = '<h1> Bonjour   <\/h1>';
                document.getElementById("buttunLogin").style.display = 'none';
                document.getElementById("buttunSignUp").style.display = 'none';
                document.getElementById("buttunDeco").style.display = 'block';
                document.getElementById("tchat").style.display = 'block';
                document.getElementById("profil").style.display = 'block';*/
    </script>
    <head>
        <meta charset="UTF-8">
        <title>Page Principale</title>
        <link rel="stylesheet" type="text/css" href="./style/style.css" />
    </head>
    <body onload="testConnexion()">
	    <main class="main">
            <!-- On utilise le slide -->
            <div class="carousel slide m-2" data-bs-ride="carousel" id="myCarousel">
                <div class="carousel-indicators">
                    <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#myCarousel" type="button"></button> <button aria-label="Slide 2" class="" data-bs-slide-to="1" data-bs-target="#myCarousel" type="button"></button> <button aria-label="Slide 3" class="" data-bs-slide-to="2" data-bs-target="#myCarousel" type="button"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveaspectratio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#777" height="100%" width="100%"></rect></svg>
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveaspectratio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#777" height="100%" width="100%"></rect></svg>
                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg aria-hidden="true" class="bd-placeholder-img" height="100%" preserveaspectratio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#777" height="100%" width="100%"></rect></svg>
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#myCarousel" type="button">
                    <span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span>
                </button> 
                <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#myCarousel" type="button">
                    <span aria-hidden="true" class="carousel-control-next-icon"></span> 
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- Fin slide vertical -->
            <!-- Début de cercle rond -->
            <div class="m-4 text-center">
                <h1 class="text-center m-4">Titre de page </h1>
            <div>
            <div class="container">
                <div class="row ">
                    <div class="col-lg-4">
                        <svg aria-label="Placeholder: 140x140" class="bd-placeholder-img rounded-circle" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                            <title>Placeholder</title>
                            <rect fill="#777" height="100%" width="100%"></rect>
                            <text dy=".3em" fill="#777" x="50%" y="50%">140x140</text>
                        </svg>
                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a class="btn btn-secondary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">View details »</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg aria-label="Placeholder: 140x140" class="bd-placeholder-img rounded-circle" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                            <title>Placeholder</title>
                            <rect fill="#777" height="100%" width="100%"></rect>
                            <text dy=".3em" fill="#777" x="50%" y="50%">140x140</text>
                        </svg>
                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a class="btn btn-secondary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">View details »</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg aria-label="Placeholder: 140x140" class="bd-placeholder-img rounded-circle" height="140" preserveaspectratio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                            <title>Placeholder</title>
                            <rect fill="#777" height="100%" width="100%"></rect>
                            <text dy=".3em" fill="#777" x="50%" y="50%">
                                140x140
                            </text>
                        </svg>
                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a class="btn btn-secondary" href="#" style="background-color:#e685b5 ; border-color:#e685b5">View details »</a></p>
                    </div>
                </div>
            </div>
            <!-- Fin de cercle rond -->
            <!-- Début de FEATURETTES -->
			<hr class="featurette-divider">
			<div class="row featurette">
				<div class="col-md-7">
					<h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
					<p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
				</div>
				<div class="col-md-5">
					<svg aria-label="Placeholder: 500x500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg">
                        <title>Placeholder</title>
                        <rect fill="#eee" height="100%" width="100%"></rect>
                        <text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text>
                    </svg>
				</div>
			</div>
			<hr class="featurette-divider">
			<div class="row featurette">
				<div class="col-md-7 order-md-2">
					<h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
					<p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
				</div>
				<div class="col-md-5 order-md-1">
					<svg aria-label="Placeholder: 500x500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg">
                        <title>Placeholder</title>
                        <rect fill="#eee" height="100%" width="100%"></rect>
                        <text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text>
                    </svg>
				</div>
			</div>
			<hr class="featurette-divider">
			<div class="row featurette">
				<div class="col-md-7">
					<h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
					<p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
				</div>
				<div class="col-md-5">
					<svg aria-label="Placeholder: 500x500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" height="500" preserveaspectratio="xMidYMid slice" role="img" width="500" xmlns="http://www.w3.org/2000/svg">
                        <title>Placeholder</title>
                        <rect fill="#eee" height="100%" width="100%"></rect>
                        <text dy=".3em" fill="#aaa" x="50%" y="50%">500x500</text>
                    </svg>
				</div>
			</div>
			<hr class="featurette-divider">
			<!-- Fin de FEATURETTES -->
        </main>
    </body>
</html>