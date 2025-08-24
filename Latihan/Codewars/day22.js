/**** Soal No 221 *****/
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/javascript
function multiTable(number) {
    let result = ''
    for(let i = 1; i <= 10; i++){
        result += `${i} * ${number} = ${number * i}\n`
    }

    return result.trim()
}

console.info(multiTable(5))

/**** Soal No 222 *****/
// https://www.codewars.com/kata/5738f5ea9545204cec000155
function countLettersAndDigits(input) {
    let result = 0

    for(let i of input){
        let code = i.toLowerCase().charCodeAt(0) - 96
        if(code >= 1 && code <= 26 || code >= -48 && code <= -39){
            result++
        }
    }
    return result
}

console.info(countLettersAndDigits('n!!_ice!!123'))

/**** Soal No 223 *****/
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/javascript
function getRealFloor(n) {
    if(n < 0) return n
    if(n === 0) return 0
    return n > 13 ? n - 2 : n - 1
}

/**** Soal No 224 *****/
// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/javascript
function countRedBeads(n) {
    if(n < 2) return 0
    return (n * 2) - 2
}

/**** Soal No 225 *****/
// https://www.codewars.com/kata/56d6b921c9ae3fd926000601
Boolean.prototype.toString = function() {
    return `${this.valueOf()}`;
};

Number.prototype.toString = function() {
    return `${this.valueOf()}`;
};

Array.prototype.toString = function() {
    return "[" + this.map(n => String(n)).join(", ") + "]";
};

/**** Soal No 226 *****/
// https://www.codewars.com/kata/56f54d45af5b1fec4b000cce
function isValidHKPhoneNumber(s) {
    if (s.length !== 9) return false;
    for (let i = 0; i < 9; i++) {
        if (i === 4) {
            if (s[i] !== ' ') return false;
        } else {
            if (s[i] < '0' || s[i] > '9') return false;
        }
    }
    return true;
}

function hasValidHKPhoneNumber(s) {
    for (let i = 0; i + 9 <= s.length; i++) {
        if (isValidHKPhoneNumber(s.slice(i, i + 9))) return true;
    }
    return false;
}

console.info(hasValidHKPhoneNumber("3857 4e56' is so close to a valid phone number!"))

/**** Soal No 227 *****/
// https://www.codewars.com/kata/570597e258b58f6edc00230d/javascript
function array(string) {
    const arr = string.split(',')

    if(string.length <= 2) return null

    return arr.filter((_,i) => i !== 0 && i !== arr.length-1)
}
console.info(array('A1,B1'))

/**** Soal No 228 *****/
// https://www.codewars.com/kata/5708f682c69b48047b000e07/javascript
function multiply(number){
    let i = number < 0 ?  String(number).length -1 : String(number).length

    return number * 5 ** i
}

console.info(multiply(5))

