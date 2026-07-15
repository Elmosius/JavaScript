function maxRot(n) {
  const hasil = [n]
  
  n = String(n).split('')
  const max = n.length -1
  
  for(let i = 0; i < max; i++){
    n.push(n[i])
    n[i] = null
    n = n.filter((i) => i !== null)
    
    hasil.push(Number(n.filter((i) => i !== null).join('')))
    
  }
  
  
  return Math.max(...hasil)
}