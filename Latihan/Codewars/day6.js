//**** Soal No 64*****//
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
function stray(numbers) {
  let x;
  numbers
    .sort((a, b) => a - b)
    .forEach((e, i, arr) => {
      if (i === 0 && e !== arr[i + 1]) {
        x = e;
      } else if (i === arr.length - 1 && e !== arr[i - 1]) {
        x = e;
      } else if (e !== arr[i - 1] && e !== arr[i + 1]) {
        x = e;
      }
    });

  return x;
}

//**** Soal No 65*****//
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {
  let x = 0;
  numbers
    .sort((a, b) => a - b)
    .forEach((e, i) => {
      if (i === 0 || i === 1) x += e;
    });
  return x;
}

//**** Soal No 66*****//
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
  let hasil = numbers.slice();
  let x = Math.min(...hasil);
  let index = hasil.indexOf(x);

  if (index !== -1) {
    hasil.splice(index, 1);
  }

  return hasil;
}

//**** Soal No 67*****//
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  x = s.length / 2;
  return s.length % 2 === 0 ? s.slice(Math.floor(x) - 1, Math.floor(x) + 1) : s.charAt(x);
}

//**** Soal No 68*****//
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
  let x = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      x++;
      if (i !== n / i) {
        x++;
      }
    }
  }
  return x;
}

//**** Soal No 69*****//
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
function opposite(number) {
  return number * -1;
}

//**** Soal No 70*****//
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
function greet(name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`;
}

//**** Soal No 71*****//
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
return s.sort()[0].split("").join("***");

//**** Soal No 72*****//
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
  let check = 0;
  x = array.forEach((e) => (check += e));

  // atau
  // x = s.reduce((a, b) => a + b) % 2 ? "odd" : "even";
  // return x
  return check % 2 === 0 ? "even" : "odd";
}
