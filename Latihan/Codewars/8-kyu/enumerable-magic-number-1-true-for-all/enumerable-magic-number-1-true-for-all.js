function all(arr, fun) {
  let r = 0;
​
  for (const i of arr) {
    if (fun(i)) r++;
  }
​
  return r === arr.length;
}