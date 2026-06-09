function menFromBoys(arr){
  const odd = []
  const even = []
  
  arr = [...new Set(arr)]
  
  arr.map((a) => a % 2 === 0 ? even.push(a) : odd.push(a))
  
  return [...even.sort((a,b) => a-b), ...odd.sort((a,b) => b-a)]
  
}