const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slidesContainer = document.querySelector(".slides");

let currentIndex = 0;

function updateSlider(index) {
  slidesContainer.style.transform = `translateX(-${index * 500}px)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-index"));
    updateSlider(currentIndex);
  });
});
