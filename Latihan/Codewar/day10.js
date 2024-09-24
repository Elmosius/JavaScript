//**** Soal No 104*****//
// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/train/javascript
function main(verb, noun) {
  return verb + noun;
}

//**** Soal No 105*****//
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
function binToDec(bin) {
  let x = bin.length;
  let y = x - 1;
  let hasil = 0;
  for (let i = 0; i < x; i++) {
    if (bin[i] == "1") {
      hasil += 2 ** y;
    }
    y--;
  }

  return hasil;
}

//**** Soal No 106*****//
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
  // ...
  return "";
}
