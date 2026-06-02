function factorial(num) {
  
  num = String(num).split('')
  let result = 0
  
  for (let i = 0; i < num.length; i++){
    let temp = 1;
    for (let j = 1; j <= num[i]; j++) {
      temp *= j;
    } 
    result += temp
  }
  return result;
}
​
function strong(n) {
  return factorial(n) === n ? "STRONG!!!!" : "Not Strong !!"
}