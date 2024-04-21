/********************************/
/* Manipulasi Element */
/********************************/

// element.innerHTML
const h1 = document.getElementById("judul");
h1.innerHTML = "<em>Hellow ELmo!</em>";

const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "HIHIHHIHIHI";

// element.style.<property>
const p4 = document.querySelector("section#b p");
p4.style.color = "red";

// element.setAttribute
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "elmo");

const link = document.querySelector("a");
link.setAttribute("href", "http://instagram.com/elmosius");

// element.classList.?
const p2 = document.querySelector(".p2");
p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label");
document.body.classList.add("warna");

/********************************/
/* Manipulasi Node */
/********************************/
// document.createElement()
const tambahP = document.createElement("p");

// document.createTextNode()
const tambahText = document.createTextNode("Paragraf Baru");

// node.appendChild()
tambahP.appendChild(tambahText);
sectionA.appendChild(tambahP);

// node.insertBefore()
const tambahLi = document.createElement("li");
const tambahTextLi = document.createTextNode("item baru");
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
tambahLi.appendChild(tambahTextLi);

ul.insertBefore(tambahLi, li2);

// parentNode.removeChild()
const p3 = document.getElementsByClassName("p3")[0];
sectionA.removeChild(p3);

// parentNode.replaceChild()
sectionA.replaceChild(tambahP, p2);

// parentNode.append()
sectionA.append(p2);

// parentNode.before()
sectionA.before(tambahLi);
