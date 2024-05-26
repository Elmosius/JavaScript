//**** Soal No 83*****//
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url) {
  return url.split("#")[0];
}

//**** Soal No 84*****//
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
  let x = [];
  l.forEach((e) => {
    if (e === parseInt(e) && e >= 0) x.push(e);
  });
  return x;
}

//**** Soal No 85*****//
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
function nbDig(n, d) {
  let x = 0;
  for (let k = 0; k <= n; k++) {
    let squared = k ** 2;
    let squaredStr = squared.toString();

    for (let char of squaredStr) {
      if (char === d.toString()) x++;
    }
  }
  return x;
}

//**** Soal No 86*****//
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript
const rps = (p1, p2) => {
  x = "";

  if (p1 === p2) {
    x = "Draw!";
  } else {
    if (p1 === "rock") p2 === "paper" ? (x = "Player 2 won!") : (x = "Player 1 won!");
    else if (p1 === "scissors") p2 === "rock" ? (x = "Player 2 won!") : (x = "Player 1 won!");
    else p2 === "scissors" ? (x = "Player 2 won!") : (x = "Player 1 won!");
  }
  return x;
};

//**** Soal No 87*****//
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message) {
  function shift13(char) {
    const charCode = char.charCodeAt(0);
    let shiftedCode;

    if (char >= "a" && char <= "z") {
      shiftedCode = ((charCode - 97 + 13) % 26) + 97;
    } else if (char >= "A" && char <= "Z") {
      shiftedCode = ((charCode - 65 + 13) % 26) + 65;
    } else {
      return char;
    }
    return String.fromCharCode(shiftedCode);
  }
  let result = "";
  for (let char of message) {
    result += shift13(char);
  }

  return result;
}

//**** Soal No 88*****//
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions/javascript
var maxSequence = function (arr) {
  let x = 0;
  let y = 0;

  arr.forEach((e) => {
    y = Math.max(e, y + e);

    x = Math.max(x, y);
  });

  return x;
};

//**** Soal No 89*****//
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  if (input && input.length > 0) {
    let x = 0;
    let y = 0;
    input.forEach((e) => {
      e > 0 ? x++ : (y += e);
    });
    return [x, y];
  } else {
    return [];
  }
}

//**** Soal No 90*****//
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums) {
  return nums && nums.length ? nums.sort((a, b) => a - b) : [];
}

//**** Soal No 90*****//
// https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr) {
  arr.sort((a, b) => a - b);

  return [arr[0], arr[arr.length - 1]];
}

// atau pakai destructuring array
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//**** Soal No 91*****//
// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

//**** Soal No 92*****//
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

//**** Soal No 93*****//
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
  const bmi = weight / height ** 2;
  const x = {
    1: "Underweight",
    2: "Normal",
    3: "Overweight",
    4: "Obese",
  };
  if (bmi <= 18.5) return x[1];
  else if (bmi <= 25) return x[2];
  else if (bmi <= 30) return x[3];
  else return x[4];
}
