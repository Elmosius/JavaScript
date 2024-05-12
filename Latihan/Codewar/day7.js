//**** Soal No 73*****//
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//**** Soal No 74*****//
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
function strCount(str, letter) {
  let x = 0;
  str.split("").forEach((e) => (e === letter ? x++ : (x += 0)));

  return x;

  // atau

  // return str.split(letter).length-1
}

//**** Soal No 75*****//
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript
function finalGrade(exam, projects) {
  grade = exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;

  return grade;
}

//**** Soal No 76*****//
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
function smash(words) {
  let x = "";
  words.forEach((e) => (x += e + " "));
  return x.slice(0, x.length - 1);
}

//**** Soal No 77*****//
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
  const vowels = ["a", "i", "u", "e", "o"];
  let x = "";
  string.split("").forEach((e) => {
    if (!vowels.includes(e)) x += e;
  });
  return x;
}

//**** Soal No 78*****//
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
  let i = 0;
  let j = 0;

  if (str.split("o").length === 1 && str.split("x").length === 1) {
    return true;
  } else {
    str
      .toLowerCase()
      .split("")
      .forEach((e) => {
        if (e === "o") i++;
        if (e === "x") j++;
      });

    return i === j;
  }
}

//**** Soal No 79*****//
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    const interestEarned = principal * interest;
    const taxAmount = interestEarned * tax;
    principal += interestEarned - taxAmount;
    years++;
  }

  return years;
}

//**** Soal No 80*****//
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  let x;

  haystack.forEach((e, i) => {
    if (e === "needle") x = `found the needle at position ${i}`;
  });

  return x;
}

//**** Soal No 81*****//
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
String.prototype.isUpperCase = function () {
  let x;
  this == this.toUpperCase() ? (x = true) : (x = false);

  return x;
};

//**** Soal No 82*****//
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
function howMuchILoveYou(nbPetals) {
  const x = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };

  return nbPetals > 6 ? x[nbPetals % 6] : x[nbPetals];
}

//**** Soal No 83*****//