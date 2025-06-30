let currentImageIndex = 0;
let imageElements = [];

document.addEventListener("DOMContentLoaded", () => {
  imageElements = Array.from(document.querySelectorAll(".gallery .image img"));
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  currentImageIndex = imageElements.indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageElements.length;
  document.getElementById("lightbox-img").src = imageElements[currentImageIndex].src;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length;
  document.getElementById("lightbox-img").src = imageElements[currentImageIndex].src;
}

function filterImages(category) {
  const images = document.querySelectorAll(".gallery .image");
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
