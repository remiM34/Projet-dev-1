/*const images = document.querySelectorAll(".images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showImage(i) {
  images.forEach((img) => img.classList.remove("active"));
  images[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

// Afficher la première image au chargement
showImage(index);
*/

/* Burger */

const burger = document.getElementById("burger");
const nav = document.getElementById("menu");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-closed");
});
