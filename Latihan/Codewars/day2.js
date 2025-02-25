//**** Soal No 11*****//
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
const stringToNumber = function (str) {
  return Number(str);
};

//**** Soal No 12*****//
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  return Math.ceil(year / 100);
}

//**** Soal No 13*****//
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
function numberToString(num) {
  return num.toString();
}

//**** Soal No 14*****//
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

//**** Soal No 15*****//
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
var summation = function (num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += num - i;
  }
  return result;
};

//**** Soal No 16*****//
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
  let x = 0;
  array.forEach((e) => (x += e));
  return x === 0 ? x : x / array.length;
}

//**** Soal No 17*****//
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
function check(a, x) {
  return a.includes(x);
}

//**** Soal No 18*****//
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data) {
  const x = [];
  data.forEach((e) => {
    e[0] >= 55 && e[1] > 7 ? x.push("Senior") : x.push("Open");
  });
  return x;
}

// **** Soal No 19 ****//
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
  // ^ awal string
  // $ akhir string
  //  \d digit 0-9
  // {4} | {6} angka 4 atau 6
}

// **** Soal No 20 ****//
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
function rowSumOddNumbers(n) {
  return n ** 3;
}

//  **** Soal No 21 ****//
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  let x = 0;
  let y = 0;
  input.forEach((e) => {
    e > 0 ? x++ : (y += e);
  });

  return !input ? [] : [x, y];
}
