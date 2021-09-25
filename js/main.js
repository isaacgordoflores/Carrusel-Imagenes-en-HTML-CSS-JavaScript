// Grab DOM elements
const images = document.querySelector(".images");
const imagesCollection = document.querySelectorAll(".image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Utility parts
let index = 0;

// Set Interval
let interval = setInterval(startInterval, 5000);

function startInterval() {
  index++;
  moveCarrusel();
}

function resetInterval() {
  clearInterval(interval);
}

function moveCarrusel() {
  if (index > imagesCollection.length - 1) {
    //Si he llegado a la última. Vuelve a inicio.
    index = 0;
  } else if (index < 0) {
    index = imagesCollection.length - 1;
  }
  images.style.transform = `translateX(-${index * 400}px)`;
}

// Nav buttons
function prevSlide() {
  index--;
  moveCarrusel();
}

function nextSlide() {
  index++;
  moveCarrusel();
}
