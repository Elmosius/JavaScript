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

console.info(getCount("abracadabra"));
