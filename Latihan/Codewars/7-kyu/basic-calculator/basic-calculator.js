function calculate(a, operator, b) {
  
  if(operator === '+') return a +b
  else if(operator === '-') return a-b
  else if(operator === '*') return a*b
  else if(operator === '/') return b === 0 ? null : a/b
  else return null
 
}