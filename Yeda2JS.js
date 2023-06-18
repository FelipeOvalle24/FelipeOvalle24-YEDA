const BotonReiniciar = document.getElementById("reiniciar")

BotonReiniciar.addEventListener("click", reiniciar)


const carouselContainer = document.querySelector('.carousel-container');
const carouselSlide = document.querySelector('.carousel-slide');

let slideIndex = 0;

function showSlide(index) {
  carouselSlide.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= carouselSlide.children.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function startCarousel() {
  setInterval(nextSlide, 5000); // Cambia el valor 3000 para ajustar la velocidad de transición
}

startCarousel();


function reiniciar () {
  location.reload()
}











