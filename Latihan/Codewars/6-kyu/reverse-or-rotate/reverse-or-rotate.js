function revrot(str, sz) {
  if(sz <= 0 || str == "") return ""
  if(sz > str.length) return ""
  
  str = str.match(new RegExp(`.{1,${sz}}`, "g"))
  let r = ''
  let temp;
  let sum;
  
  for (const i of str){
    if(i.length !== sz) continue
    
    temp = i.split('')
    
    sum = temp.reduce((a,b) => Number(a)+Number(b), 0) 
        
    if(sum % 2 === 0){
      r += temp.reverse().join('')
    }else{
      r += `${[...temp.slice(1, temp.length), temp[0]].join('')}`
    }
  }
  
  return r
  
}
​
// 73304 99108 72815 764
// 33047 91089 28157 647
​