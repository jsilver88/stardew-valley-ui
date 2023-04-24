const categoryBtn = document.getElementById("category-btn");
const angleDownIcon = document.querySelector(".fa-angle-down");

categoryBtn.addEventListener("click", () => {
  angleDownIcon.style.transform = "rotate(0)";
  categoryBtn.nextElementSibling.classList.toggle("active");

  if (categoryBtn.nextElementSibling.classList.contains("active")) {
    angleDownIcon.style.transform = "rotate(180deg)";
  }
});

// slider
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;
const slideWidth = 300; // Width of each product card

prevBtn.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > 6) {
    // Change 2 to the number of products in your slider
    slideIndex = 6; // Change 2 to the number of products in your slider
  }
  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
});
