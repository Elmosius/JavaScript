function dataReverse(data) {
  let r = [];
​
  while (data.length > 0) {
    const chunk = data.splice(-8, 8);
    r = [...r, ...chunk]; 
  }
​
  return r;
}