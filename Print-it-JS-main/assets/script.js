const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





console.log("currentSlideIndex");
//   -------------------------------- Modifications --------------------------------
	// Récupère les éléments du carrousel
	const banner = document.getElementById("banner");
	const arrowLeft = document.getElementById("left_arrow");
	const arrowRight = document.getElementById("right_arrow");
	const bannerImg = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");
	const dotsContainer = document.querySelector(".dots");

	// Définit l'index de la diapositive actuelle
	let currentSlideIndex = 0;

	// Fonction pour mettre à jour le carrousel
	function updateCarousel() {
	const currentSlide = slides[currentSlideIndex];
	bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
	tagLine.innerHTML = currentSlide.tagLine;

	// Met à jour les points
	dotsContainer.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === currentSlideIndex) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
	}
	}

	// Fonction pour afficher la diapositive suivante
	function nextSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateCarousel();
	}

	// Fonction pour afficher la diapositive précédente
	function previousSlide() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateCarousel();
	}

	// Gère les clics sur les flèches
	arrowLeft.addEventListener("click", previousSlide);
	arrowRight.addEventListener("click", nextSlide);

	// Met à jour le carrousel pour la première fois
	updateCarousel();

	// Ajoute un écouteur d'événement pour les clics sur les points
	dotsContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("dot")) {
	currentSlideIndex = Array.from(dotsContainer.children).indexOf(event.target);
	updateCarousel();
	}
	});


// 