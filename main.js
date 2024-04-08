const btn = document.getElementById("btn");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".colse-icon");

btn.addEventListener("click", () => {
  overlay.style.display = "flex";
});
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
close.addEventListener("click", () => {
  overlay.style.display = "none";
});
