//**** Soal No 94*****//
function highAndLow(numbers) {
  let x = [];
  numbers.split(" ").map((e) => x.push(e));
  x.sort((a, b) => b - a);
  return `${x[0]} ${x[x.length - 1]}`;
}

//**** Soal No 95*****//
// https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript
function makeNegative(num) {
  return num > 0 ? -1 * num : num;
}

//**** Soal No 96*****//
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

//**** Soal No 97*****//
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function doubleChar(str) {
  let x = "";

  str.split("").forEach((e) => (x += e + e));

  return x;
}

//**** Soal No 98*****//
//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
function declareWinner(fighter1, fighter2, firstAttacker) {
  let x = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let y = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  return x < y ? fighter2.name : y < x ? fighter1.name : firstAttacker;
}

//**** Soal No 99*****//
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  let x = n
    .toString()
    .split("")
    .sort((a, b) => b - a);

  return parseInt(x.join(""));
}

//**** Soal No 100*****//
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
function roundToNext5(n) {
  return n > -5 && n < 0 ? 0 : Math.ceil(n / 5) * 5;
}

//**** Soal No 101*****//
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/solutions/javascript
function move(position, roll) {
  return position + 2 * roll;
}

//**** Soal No 102*****//
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers) {
  let x = [];
  for (let i = numbers[0]; numbers[numbers.length - 1] >= i; i++) {
    x.push(i);
  }
  return x;
}

//**** Soal No 103*****//
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
