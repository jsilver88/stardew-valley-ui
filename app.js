const categoryBtn = document.getElementById("category-btn");
const angleDownIcon = document.querySelector(".fa-angle-down");

categoryBtn.addEventListener("click", () => {
  angleDownIcon.style.transform = "rotate(0)";
  categoryBtn.nextElementSibling.classList.toggle("active");

  if (categoryBtn.nextElementSibling.classList.contains("active")) {
    angleDownIcon.style.transform = "rotate(180deg)";
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// slider
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let sliderIndex = 0;
const slideWidth = 300; // Width of each product card

prevBtn.addEventListener("click", () => {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = 0;
  }
  slider.style.transform = `translateX(-${slideWidth * sliderIndex}px)`;
});

nextBtn.addEventListener("click", () => {
  sliderIndex++;
  if (sliderIndex > 6) {
    // Change 2 to the number of products in your slider
    sliderIndex = 6; // Change 2 to the number of products in your slider
  }
  slider.style.transform = `translateX(-${slideWidth * sliderIndex}px)`;
});
