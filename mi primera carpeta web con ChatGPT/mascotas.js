const images = [
    "images/perr.jpeg",
    "images/imag2.avif",
    "images/imag3.avif",
    "images/imag4.avif",
    "images/imag5.avif",
    "images/imag6.avif",
    "images/imag7.avif",
    "images/imag8.avif",
    "images/imag9.avif",
    "images/im1.jpeg",
    "images/img1.jepg",
    "images/img2.jpeg",
    "images/img3.jepg",
    "images/img4.jpeg",
    "images/img5.jepg",
    "images/cat.jpeg",
    "images/dog.jpeg",
  ];
  let currentImageIndex = 0;
  
  function showImage(index) {
    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = images[index];
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }
  
  document.getElementById("prevButton").addEventListener("click", prevImage);
  document.getElementById("nextButton").addEventListener("click", nextImage);
  
  document.getElementById("toggleButton").addEventListener("click", function() {
    const sliderContainer = document.getElementById("sliderContainer");
    const galleryContainer = document.getElementById("galleryContainer");
    const toggleButton = document.getElementById("toggleButton");
  
    if (sliderContainer.style.display === "none") {
      sliderContainer.style.display = "flex";
      galleryContainer.style.display = "none";
      toggleButton.textContent = "Ver vista galería de imágenes";
    } else {
      sliderContainer.style.display = "none";
      galleryContainer.style.display = "flex";
      toggleButton.textContent = "Ver vista deslizador de imágenes";
    }
  });
  
  showImage(currentImageIndex);
