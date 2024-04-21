/********************************/
/* Event Handler */
/********************************/
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

function ubahWarna(x) {
  x.style.backgroundColor = "gray";
}

p2.onclick = ubahWarna;

/********************************/
/* add event listener */
/********************************/

const p4 = document.querySelector("section#b p");
const ul = document.querySelector("section#b ul");
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Teks Li Baru");
liBaru.appendChild(teksLiBaru);
p4.addEventListener("click", () => ul.append(liBaru));

/********************************/
/* Daftar Event */
/********************************/

// https://developer.mozilla.org/en-US/docs/Web/Events

// Mouse Event
// Keyboard Event
// Resources Event
// Focus Event
// View Event
// Form Event
// CSS Animation & Transition Event
// Drag & Drop Event
