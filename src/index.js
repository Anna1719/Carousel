const images = [
  "../assets/1.jpg",
  "../assets/2.jpg",
  "../assets/3.jpg",
  "../assets/4.jpg",
];
let currentPic = 0;
const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
  carouselImage.src = images[currentPic];
}

function prevImage() {
  currentPic = (currentPic - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentPic = (currentPic + 1) % images.length;
  updateImage();
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// Автоматическая смена изображений
let autoChange = setInterval(nextImage, 3000);

updateImage();
