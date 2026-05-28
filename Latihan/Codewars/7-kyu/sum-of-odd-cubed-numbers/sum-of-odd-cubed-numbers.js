function cubeOdd(arr) {
  
  let r = 0
  for(const i in arr){
    if(arr[i] % 2 === 0) continue
    
    if(typeof(arr[i]) !== "number") return undefined
    
    r += arr[i]**3
  }
  
  return r
}