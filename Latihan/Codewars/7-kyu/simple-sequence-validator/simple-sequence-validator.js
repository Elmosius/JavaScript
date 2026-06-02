function validateSequence(x) {
  const sum = x[1] - x[0]
  let result = true;
  
  for(let i = 1; i < x.length - 1; i++){
    if(x[i+1] - x[i] !== sum){
      result = false
      break
    }
  }
  
  return result
  
}