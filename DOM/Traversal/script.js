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

const close = document.querySelectorAll(".close");

close.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.add("d-none");
  });
});
