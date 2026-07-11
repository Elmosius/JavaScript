function seven(m) {
  let counter = 0
  let temp;
  let temp2;
  
  while(true){
    if(m <= 99) break
    
    temp = Math.floor(m/10)
    temp2 = 2 * (m % 10)
    m = temp - temp2
    
    counter++
  }
  
  return [m,counter]
}
​
​