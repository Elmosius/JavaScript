/**** Soal No 122*****/
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript
function dnaStrand(dna) {
  let hasil = "";
  dna.split("").forEach((e) => {
    if (e === "A") {
      hasil += "T";
    } else if (e === "T") {
      hasil += "A";
    } else if (e === "G") {
      hasil += "C";
    } else {
      hasil += "G";
    }
  });
  return hasil;
}
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

/**** Soal No 123*****/
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
function multiplicationTable(size) {
  let hasil = [];
  for (let i = 1; i <= size; i++) {
    let temp = [];
    for (let j = 1; j <= size; j++) {
      temp.push(i * j);
    }
    hasil.push(temp);
  }
  return hasil;
}

// 3 ->
// 1 2 3
// 2 4 6
// 3 6 9
// [[1,2,3],[2,4,6],[3,6,9]]

/**** Soal No 124*****/
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/**** Soal No 125*****/
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/javascript
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((e) => e !== "!")
    .join("");
}

/**** Soal No 126*****/
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {
  let hasil = "";
  let i = num.toString().split("").length - 1;
  let sisa;

  for (let j = 1; j <= i; j++) {
    console.log(j);
    temp = 10 ** j;
    if (j !== i - 1) {
      hasil += Math.floor(num / temp) * 10 + " + ";
    } else {
      hasil += Math.floor(num / temp) * 10;
    }
  }

  console.log(hasil);
}

// 12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

console.info(expandedForm(6002));
