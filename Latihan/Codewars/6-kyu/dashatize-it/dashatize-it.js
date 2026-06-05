function dashatize(num) {
  return String(Math.abs(num))
    .split("")
    .map(digit => digit % 2 === 1 ? `-${digit}-` : digit)
    .join("")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
}