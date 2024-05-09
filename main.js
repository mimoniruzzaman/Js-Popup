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

// Same Work !
document.getElementById("btn").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "flex";
});
document.querySelector(".close-icon").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
});
document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
});


// document.getElementById("click-btn").style.color = "white";
// document.getElementById("click-btn").style.backgroundColor = "green";
// document.getElementById("click-btn").style.padding = "20px";

// document.querySelector(".popup-body h1").style.backgroundColor = "green";
// document.querySelector(".popup-body h1").style.height = "500px";
