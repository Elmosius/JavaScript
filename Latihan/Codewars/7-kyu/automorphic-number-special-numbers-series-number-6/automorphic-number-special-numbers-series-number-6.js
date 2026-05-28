function automorphic(n){
  let x = n**2
  n = String(n)
  let c = String(x).split('').slice(-n.length) 
  
  return n == c.join("") ? "Automorphic" : "Not!!"
}