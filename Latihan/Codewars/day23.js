/**** Soal No 229 *****/
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? '0' : '1'))
    .join('');
}

/**** Soal No 230 *****/
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

/**** Soal No 231 *****/
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(d) {
  if (d >= 7) return d * 40 - 50;
  if (d >= 3) return d * 40 - 20;

  return d * 40;
}

/**** Soal No 232 *****/
// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let shark = dolphin ? sharkDistance / (sharkSpeed / 2) : sharkDistance / sharkSpeed;
  let me = pontoonDistance / youSpeed;

  return me < shark ? 'Alive!' : 'Shark Bait!';
}

/**** Soal No 233 *****/
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
function maxDiff(list) {
  if (list.length === 0) return 0;

  let x = list.sorted((a, b) => a - b);

  return x[x.length - 1] - x[0];
}

// atau

function maxDiff2(list) {
  if (!list.length) return 0;

  return Math.max(...list) - Math.min(...list);
}

/**** Soal No 234 *****/
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
function isUpper(code) {
  return code >= 65 && code <= 90;
}

function isLower(code) {
  return code >= 97 && code <= 122;
}

function isLetter(code) {
  return isUpper(code) || isLower(code);
}

function sameCase(a, b) {
  a = a.charCodeAt(0);
  b = b.charCodeAt(0);

  if (!isLetter(a) || !isLetter(b)) return -1;

  if ((isUpper(a) && isUpper(b)) || (isLower(a) && isLower(b))) {
    return 1;
  }

  return 0;
}
