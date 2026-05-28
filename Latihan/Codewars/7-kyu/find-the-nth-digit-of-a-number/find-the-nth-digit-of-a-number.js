function findDigit(num, nth) {
   if(nth < 0 || nth === 0) return -1
   num = String(num).split('')
​
  
   if(num[num.length - nth] == undefined || num[num.length - nth] === "-") return 0
   else return(Number(num[num.length - nth]))
    
}