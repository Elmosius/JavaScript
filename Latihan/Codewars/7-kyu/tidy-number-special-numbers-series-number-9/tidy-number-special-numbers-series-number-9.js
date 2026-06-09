function tidyNumber(n){
  n = String(n).split('')
  
  let j = 0
  let result = true
  for(let i = 1; i < n.length; i++){
    if(n[j] > n[i]){
      result = false
      break
    }
    
    j++
  }
  
  return result
}