
// Ajoute ou supprime la classe dot_selected en fonction de l'index de l'image affichée
function changedot (index)  {
    var dots = document.querySelectorAll(".dot"); 
    dots.forEach(function(dot) {
        dot.classList.remove("dot_selected");   
    }); 
    dots[index].classList.add("dot_selected");
}

// Récupération des différents élements 
var bannerImg = document.getElementById("banner-img");
var arrowLeft = document.getElementById("arrowleft");
var arrowRight = document.getElementById("arrowright");

// Tableau chemin source des différentes images
var imageSources = [
    "./assets/images/slideshow/slide1.jpg",
    "./assets/images/slideshow/slide2.jpg",
    "./assets/images/slideshow/slide3.jpg",
    "./assets/images/slideshow/slide4.png"
];

// Défini l'index de l'image actuelle
var currentIndex = 0;

// Fonction changement d'image vers la prochaine
function nextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    bannerImg.src = imageSources[currentIndex];
    changedot(currentIndex)
}

// Fonction changement d'image pour revenir a la précédente
function previousImage() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    bannerImg.src = imageSources[currentIndex];
    changedot(currentIndex)
}

// Action qui déclenche la fonction de changement d'image
arrowRight.addEventListener("click", function() {
    nextImage();
});

// Action qui déclenche la fonction de changement d'image
arrowLeft.addEventListener("click", function() {
    previousImage();
});