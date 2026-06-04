function balancedNum(number) {
  let digits = String(number).split('');
​
  if (digits.length <= 2) return "Balanced";
​
  let middle = Math.floor(digits.length / 2);
​
  let left;
  let right;
​
  if (digits.length % 2 === 0) {
    left = digits.slice(0, middle - 1);
    right = digits.slice(middle + 1);
  } else {
    left = digits.slice(0, middle);
    right = digits.slice(middle + 1);
  }
​
  let leftSum = left.reduce((a, b) => Number(a) + Number(b), 0);
  let rightSum = right.reduce((a, b) => Number(a) + Number(b), 0);
​
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}