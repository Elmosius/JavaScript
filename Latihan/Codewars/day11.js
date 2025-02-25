//**** Soal No 107*****//
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending) {
  result = str.slice(str.length - ending.length);

  if (result === ending) {
    return true;
  } else {
    return false;
  }
}

/**** Soal No 108*****/
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function take(arr, n) {
  return arr.slice(0, n);
}

/**** Soal No 109*****/
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  let count = 0;
  str.forEach((e) => {
    if (vowels.includes(e)) {
      count++;
    }
  });

  return count;
}

/**** Soal No 110*****/
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/javascript
function getAge(inputString) {
  return parseInt(inputString[0]);
}

/**** Soal No 111*****/
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript
function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0);
}

/**** Soal No 112*****/
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript
function arithmetic(a, b, operator) {
  let operators = {
    add: "add",
    subtract: "subtract",
    multiply: "multiply",
    divide: "divide",
  };

  let result;

  if (operator === operators.add) {
    result = a + b;
  } else if (operator === operators.subtract) {
    result = a - b;
  } else if (operator === operators.multiply) {
    result = a * b;
  } else if (operator === operators.divide) {
    result = a / b;
  }

  return result;
}

/**** Soal No 112*****/
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript
function count(string) {
  string = string.split("");
  let result = {};

  string.forEach((e, i) => {
    result = {
      ...result,
      [e]: result[e] ? result[e] + 1 : 1,
    };
  });

  return result;
}

/**** Soal No 113*****/
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript
var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

/**** Soal No 114*****/
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
function hoopCount(n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

/**** Soal No 115*****/
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/javascript
function distinct(a) {
  return a.filter((e, i) => a.indexOf(e) === i);
}

/**** Soal No 116*****/
// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript
var capitals = function (word) {
  let result = [];

  word.split("").forEach((e, i) => {
    if (e === e.toUpperCase()) {
      result.push(i);
    }
  });

  return result;
};

/**** Soal No 117*****/
// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return `Your plant has had more than enough water for today!`;
  }
}

/**** Soal No 118*****/
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript
function high(x) {
  x = x.split(" ");
  let result = 0;
  let word;

  x.forEach((e) => {
    let temp = 0;
    alphabet = e.split("");
    alphabet.forEach((e) => {
      temp += e.charCodeAt() - 96;
    });

    if (temp > result) {
      result = temp;
      word = e;
    }
  });

  return word;
}

/**** Soal No 119*****/
// https://www.codewars.com/kata/58649884a1659ed6cb000072/javascript
function updateLight(current) {
  let lights = ["green", "yellow", "red"];
  return current === "red" ? "green" : lights[lights.indexOf(current) + 1];
}

/**** Soal No 120*****/
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/javascript
function updateLight(current) {
  let lights = ["green", "yellow", "red"];
  return current === "red" ? "green" : lights[lights.indexOf(current) + 1];
}

/**** Soal No 121*****/
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/javascript
function findDifference(a, b) {
  a = a.reduce((a, b) => a * b);
  b = b.reduce((a, b) => a * b);

  return Math.abs(a - b);
}



