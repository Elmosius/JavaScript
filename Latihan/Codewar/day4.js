//**** Soal No 43*****//
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function (l, w) {
  return l !== w ? (l + w) * 2 : l * w;
};

//**** Soal No 44*****//
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  let x = 0;

  games.forEach((e) => {
    y = e.split(":");
    y[0] > y[1] ? (x += 3) : y[0] < y[1] ? (x += 0) : (x += 1);
  });

  return x;
}

//**** Soal No 45*****//
//https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

//**** Soal No 46*****//
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : (employed === true && vacation === true) || (employed === false && vacation === true) || (employed === false && vacation === false) ? false : true;
}

//**** Soal No 47*****//
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
  let indexGenap = [];
  let hasil = [];
  let x = 0;
  let y = 0;
  let ganjil = array.filter((i) => i % 2 !== 0).sort((a, b) => a - b);

  array.forEach((e, i) => {
    if (e % 2 === 0) indexGenap.push(i);
  });

  array.forEach((e, i) => {
    if (indexGenap[x] === i) {
      hasil.push(e);
      x++;
    } else {
      hasil.push(ganjil[y]);
      y++;
    }
  });

  return hasil;
}

//**** Soal No 48*****//
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1 / (1 + (i - 1) * 3);
  }
  return total.toFixed(2);
}

//**** Soal No 49*****//
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

//**** Soal No 50*****//
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x) {
  return x.map((e, i) => e * e[i + 1]);
}

//**** Soal No 51*****//
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript
function grow(x) {
  return x.reduce((i, j) => i * j);
}

//**** Soal No 52*****//
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
const quarterOf = (month) => {
  return month >= 1 && month <= 6 ? (month > 3 && month <= 6 ? 2 : 1) : month > 6 && month <= 9 ? 3 : 4;
};

// atau //
const quarterOf2 = (month) => {
  return Math.ceil(month / 3);
};

//**** Soal No 53*****//
// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
function countSheeps(sheep) {
  x = 0;
  sheep.forEach((e) => (e === true ? (x += 1) : (x += 0)));
  return x;
}
