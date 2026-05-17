/**** Soal No 235 *****/
// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
function remainder(n, m) {
  return n > m ? n % m : n === 0 ? NaN : m % n;
}

/**** Soal No 236 *****/
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
function nameShuffler(str) {
  str = str.split(' ');
  let first = str[0];
  let last = str[str.length - 1];
  let hasil = [];

  str.forEach((s, i) => {
    console.info(s, i);
    if (i === 0) {
      hasil.push(last);
    } else if (i === str.length - 1) {
      hasil.push(first);
    } else {
      hasil.push(s);
    }
  });

  return hasil.join(' ');
}

function nameShuffler2(str) {
  return str.split(' ').reverse().join(' ');
}

/**** Soal No 236 *****/
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

/**** Soal No 237 *****/
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
function addLength(str) {
  return str.split(' ').map((s) => `${s} ${s.length}`);
}

console.log(addLength('you will win'));

/**** Soal No 238 *****/
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
function toBinary(n) {
  return Number(n.toString(2));
}

console.info(toBinary(2));

/**** Soal No 239 *****/
// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {}

class Man extends Human {}

class Woman extends Human {}

/**** Soal No 240 *****/
// https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec
function per(n) {
  n = String(n).split('');

  if (n.length === 1) return [];
  let hasil = [n.reduce((prev, curr) => prev * curr)];
  let stop = false;
  let i = 0;

  while (!stop) {
    if (hasil[i] === 0) break;

    let temp = String(hasil[i]).split('');

    hasil.push(temp.reduce((prev, curr) => prev * curr));
    i++;
  }

  return hasil;
}

function per2(n) {
  const result = [];

  while (n >= 10) {
    n = String(n)
      .split('')
      .reduce((prev, curr) => prev * curr);

    result.push(n);
  }

  return result;
}

console.info(per2(69));

/**** Soal No 240 *****/
// https://www.codewars.com/kata/57a6633153ba33189e000074/javascript
const orderedCount = (text) => {
  if (!text) return [];

  text = text.split('');
  let result = [[text[0], 1]];

  for (let i = 1; i < text.length; i++) {
    let m = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j][0] === text[i]) {
        result[j][1] += 1;
        m = true;
        break;
      }
    }

    if (!m) result.push([text[i], 1]);
  }

  return result;
};

const orderedCount2 = (text) => {
  const count = {};

  for (const char of text) {
    count[char] = (count[char] || 0) + 1;
  }

  return Object.entries(count); // ubah object jadi bentuk array dengan keynya
};

const orderedCount3 = (text) => {
  const result = new Map();

  for (const char of text) result.set(char, (result.get(char) || 0) + 1);

  return [...result];
};

console.info(orderedCount3('abracadabra'));

/**** Soal No 241 *****/
// https://www.codewars.com/kata/596fba44963025c878000039/javascript
function contamination(text, char) {
  if (!text) return '';

  return text
    .split('')
    .map((_) => char)
    .join('');
}

console.info(contamination('abc', 'z'));

/**** Soal No 242 *****/
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
function toCsvText(array) {
  let result = '';

  for (let i = 0; i < array.length; i++) {
    result += array[i].join(',');

    if (i !== array.length - 1) result += '\n';
  }

  return result;
}

console.info(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ]),
);

/**** Soal No 242 *****/
// https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

function isLetter(code) {
  return isUpper(code) || isLower(code);
}

function isUpper(code) {
  return code >= 65 && code <= 90;
}

function isLower(code) {
  return code >= 97 && code <= 122;
}

function isNumber(code) {
  return code >= 48 && code <= 57;
}

function password(str) {
  const rules = {
    uppercase: false,
    lowercase: false,
    minimumNumber: false,
    totalChar: str.length,
  };

  for (const s of str) {
    const code = s.charCodeAt(0);

    if (isUpper(code)) rules.uppercase = true;
    if (isLower(code)) rules.lowercase = true;
    if (isNumber(code)) rules.minimumNumber = true;
  }

  return rules.uppercase && rules.lowercase && rules.minimumNumber && rules.totalChar >= 8;
}

console.info(password('abcd1234'));

/**** Soal No 243* *****/
// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
function printArray(array) {
  return array.toString();
}

/**** Soal No 244 *****/
// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

/**** Soal No 245 *****/
// https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript
function getASCII(c) {
  return c.charCodeAt(0);
}

/**** Soal No 246 *****/
// https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
function reverse(string) {
  return string.split(' ').reverse().join(' ');
}

/**** Soal No 247 *****/
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
function replace(s) {
  const v = ['a', 'i', 'u', 'e', 'o'];

  return s
    .split('')
    .map((e) => (v.includes(e.toLowerCase()) ? '!' : e))
    .join('');
}
