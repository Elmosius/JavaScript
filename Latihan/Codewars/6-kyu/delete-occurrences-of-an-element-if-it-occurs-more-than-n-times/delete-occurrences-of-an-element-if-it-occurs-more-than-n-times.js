function deleteNth(arr,n){
  let map = {}
  let result = []
  
  for(const num of arr){
    if(map[num] < n || (!map[num])){
      map[num] = (map[num] ?? 0) + 1
      result.push(num)
    }
      
  }
  
  return result
}
​
​