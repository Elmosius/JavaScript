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

console.info(solution("sumo", "omo"));
