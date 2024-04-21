// Event Handling
// =================================
// const card = document.querySelector(".card");
// const close = document.querySelector(".close");

// close.addEventListener("click", (e) => {
//   card.classList.toggle("d-none");
// });

// DOM Tranversal
// ================================
// parentNode: Node
// parentElement: Element
// nextSibling : Node
// nextElementSibling : Element
// previousSibling : Node
// previousElementSibling : Element

// const close = document.querySelectorAll(".close");

// close.forEach((i) => {
//   i.addEventListener("click", (e) => {
//     e.target.parentNode.parentNode.classList.add("d-none");

//     // Prevent Default
//     e.preventDefault();

//     // method mengatasi event Bubbling
//     e.stopPropagation();
//   });
// });

// Event Bubbling
// const card = document.querySelectorAll(".card");
// card.forEach((i) => {
//   i.addEventListener("click", (e) => {
//     alert("coba");
//   });
// });

// cara 2 - versi efektifnya
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  e.target.classList.contains == "close" ? "True" : (e.target.parentElement.parentElement.style.display = "none");
  e.preventDefault();
});
