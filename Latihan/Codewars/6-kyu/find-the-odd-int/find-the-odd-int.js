function findOdd(A) {
  let dic = {};
​
  for (let num of A) {
    if (dic[num]) {
      dic[num] += 1;
    } else {
      dic[num] = 1;
    }
  }
​
  for (let i of Object.entries(dic)) {
    if (i[1] % 2 === 1) {
      return Number(i[0]);
    }
  }
}