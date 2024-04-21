const img = document.querySelector("img");
const row = document.querySelector(".row");
const thumbs = document.querySelectorAll(".thumb");

function removeActiveClass() {
  thumbs.forEach((thumb) => {
    thumb.classList.remove("active");
  });
}

row.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    removeActiveClass();
    e.target.classList.add("active");
    img.setAttribute("src", e.target.getAttribute("src"));
    img.classList.add("fade");
    setTimeout(() => img.classList.remove("fade"), 500);
  }
});
