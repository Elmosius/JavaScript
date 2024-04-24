//**** Soal No 1*****//
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  let kata_terbalik = "";

  string.split(" ").forEach((kata) => {
    if (kata.length >= 5) {
      kata_terbalik += kata.split("").reverse().join("") + " ";
    } else {
      kata_terbalik += kata + " ";
    }
  });

  return kata_terbalik.trim();
}

//**** Soal No 2*****//
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function friend(friends) {
  const x = [];
  friends.forEach((nama) => {
    if (nama.length === 4) x.push(nama);
  });

  return x;
}

//**** Soal No 3*****//
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  let hasil = 0;
  if (a === b) {
    return a;
  } else if (b > a) {
    for (let i = a; i <= b; i++) {
      hasil += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      hasil += i;
    }
  }
  return hasil;
}

//**** Soal No 4*****//
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  let x = "";
  s.split("").forEach((e) => {
    if (e > "m") {
      x += e;
    }
  });
  return `${x.length}/${s.length}`;
}

//**** Soal No 5*****//
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
  let hasil = "";
  const vokal = ["a", "i", "e", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (!vokal.includes(x.toLowerCase())) {
      hasil += x;
    }
  }

  return hasil;
}

//**** Soal No 6*****//
// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
function greet(str) {
  str = "hello world!";
  return str;
}

//**** Soal No 7*****//
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

//**** Soal No 8*****//
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
function paperwork(n, m) {
  x = n < 0 || m < 0 ? 0 : n * m;
  return x;
}

//**** Soal No 9*****//
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  let x = 0;
  !arr
    ? 0
    : arr.forEach((e) => {
        e < 0 ? (x += 0) : (x += e);
      });
  return x;
}

//**** Soal No 10*****//
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str) {
  x = str.split("").reverse().join("");
  return x;
}
