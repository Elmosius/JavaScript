function tidyNumber(n){
  n = String(n).split('')
  
  let result = true
  for(let i = 0; i < n.length; i++){
    if(n[i] > n[i+1]){
      result = false
      break
    }
    
  }
  
  return result
}