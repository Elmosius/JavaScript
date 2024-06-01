// getElementById() : element
const judul = document.getElementById("judul");
judul.style.color = "Blue";
judul.style.backgroundColor = "gray";
judul.innerHTML = "Hello Elmo!";

// getElementsByTagName() : HTMLCollection
const p = document.getElementsByTagName("p");
p.item(0).innerHTML = "Ini index 0";

for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = `Ini index ke ${i}`;
}
// getElemetsByClassName() : HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1.item(0).innerHTML = "p1 index 0";

// querySelector() : element
const li1 = document.querySelector("li:nth-child(1)");
li1.style.backgroundColor = "gray";

// querySelectorAll() : nodeList
const section = document.querySelectorAll("section");
section.item(1).style.color = "blue";

section.forEach((e) => (section.item(e).innerHTML = "HAHAH"));
