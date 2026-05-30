function order(words){
  words = words.split(' ')
  let r = []
  let temp;
  
  for(const i in words){
    temp = words[i].toLowerCase().replace(/[a-z]/g, '')    
    r[temp] = i
  }
  
​
  return(r.map((e) => words[e]).join(' ').trim())
    
}