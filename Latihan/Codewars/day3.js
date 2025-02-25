//**** Soal No 22*****//
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

//**** Soal No 23*****//
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

//**** Soal No 24*****//
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
  let y = "";
  for (let i = 1; i < str.length - 1; i++) {
    y += str[i];
  }
  return y;
}

//**** Soal No 25*****//
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
function sum(numbers) {
  let x = 0;
  !numbers ? x : numbers.forEach((e) => (x += e));
  return x;
}

//**** Soal No 26*****//
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
let number = function (busStops) {
  let x = 0;
  busStops.map(([o, e]) => {
    x += o - e;
  });

  return x;
};

//**** Soal No 27*****//
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
  let x = "";
  name.split(" ").forEach((e) => {
    x += e.charAt(0).toUpperCase() + ".";
  });
  return x.slice(0, x.length - 1);
}

//**** Soal No 28*****//
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  let y = x.map((e) => e * 2);
  return y;
}

//**** Soal No 29*****//
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
let countSheep = function (num) {
  let x = "";
  for (let i = 1; i <= num; i++) {
    num > 0 ? (x += `${i} sheep...`) : "";
  }
  return x;
};

//**** Soal No 30*****//
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
function areYouPlayingBanjo(name) {
  name.charAt(0).toUpperCase() === "R" ? (name += " plays banjo") : (name += " does not play banjo");
  return name;
}

//**** Soal No 31*****//
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
function addBinary(a, b) {
  let sum = a + b;
  let x = "";

  while (sum > 0) {
    x = (sum % 2) + x;
    sum = Math.floor(sum / 2);
  }

  if (x === "") {
    x = "0";
  }
  return x;
}

//**** Soal No 32****//
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
  let x = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      j === 0 ? (x += s[i].toUpperCase()) : (x += s[i].toLowerCase());
    }
    x += "-";
  }

  return x.slice(0, x.length - 1);
}

//**** Soal No 33****//
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

//**** Soal No 34****//
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
function hero(bullets, dragons) {
  return dragons * 2 <= bullets ? true : false;
}

//**** Soal No 35****//
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending) {
  return str.slice(-ending.length) === ending || ending === "" ? true : false;
}

//**** Soal No 36****//
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
function filter_list(l) {
  x = [];
  l.forEach((e) => {
    if (e >= 0 && e === parseInt(e)) x.push(e);
  });
  return x;
}

//**** Soal No 37****//
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//**** Soal No 38****//
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
  let y = [];
  let x = n.toString().split("");
  x.map((e) => y.push(parseInt(e)));

  return y.reverse();
}

//**** Soal No 39****//
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
const binaryArrayToNumber = (arr) => {
  let x = 0;
  arr.forEach((e, i) => {
    e === 1 ? (x += 2 ** (arr.length - 1 - i)) : (x += 0);
  });

  return x;
};

//**** Soal No 40****//
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = (n) => {
  let x = [];
  for (let i = 0; i < n; i++) {
    x.push(n - i);
  }

  return x;
};

//**** Soal No 41****//
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  x = list.sort((a, b) => a - b);

  return x[0];
};

var max = function (list) {
  x = list.sort((a, b) => a - b);

  return x[list.length - 1];
};

//**** Soal No 42****//
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};
