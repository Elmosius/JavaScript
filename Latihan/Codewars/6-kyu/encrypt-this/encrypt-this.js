function encryptThis(text) {
  text = text.split(' ')
  
  let result= []
  let temp;
  let first = ''
  let second = ''
  let last = ''
  
  for(const t of text){
    temp = t.split('')
    first = temp[0].charCodeAt(0)
    second = temp[1] ?? ''
    
    
    if(t.length > 2) {
      last = t[temp.length - 1]
      result.push(`${first}${last ?? ''}${t.slice(2,temp.length - 1)}${second ?? ''}`)
    }else{
      result.push(`${first}${second}`)
    }
    
  }
  
  return result.join(' ')
}
​
​