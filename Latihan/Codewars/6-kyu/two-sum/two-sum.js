function twoSum(numbers, target) {
  let result = [];
​
  for (let i = 0; i < numbers.length; i++) {
    let check = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (i === j || j === numbers.length - 1) continue;
​
      if (check + numbers[j] === target) {
        result.push(i, j);
      }
    }
  }
​
  return result;
}