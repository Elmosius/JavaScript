function highestRank(arr){
  let map = {}
  for(const i of arr){
    map[i] = (map[i] ?? 0) + 1
  }
  
  let maxKey = null
  let maxValue = 0
​
  for (const [key, value] of Object.entries(map)) {
    if (value >= maxValue) {
      maxKey = key
      maxValue = value
    }
  }
  
  return Number(maxKey)
  
  
}