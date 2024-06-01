// buat button ubah warna

const button = document.querySelector("button");
const body = document.body;
button.addEventListener("click", () => body.classList.toggle("warna-hijau"));

// buat button acak warna
const buatButtonAcak = document.createElement("button");
const textButton = document.createTextNode("Acak Warna");
buatButtonAcak.appendChild(textButton);
buatButtonAcak.setAttribute("type", "button");
button.after(buatButtonAcak);

buatButtonAcak.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// buat slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

function changeColor() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

sMerah.addEventListener("input", changeColor);
sHijau.addEventListener("input", changeColor);
sBiru.addEventListener("input", changeColor);
