/**** Soal No 160 *****/
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/javascript
function reverseLetter(str) {
    let hasil =[]

    for(let i of str){
        let code = i.charCodeAt(0)
        if (code >= 97 && code <= 122) {
            hasil.push(i);
        }
    }

    return hasil.reverse().join('')
}

// console.info(reverseLetter('ultr53o?n'))

/**** Soal No 161 *****/
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/javascript
function sumOfMinimums(arr) {
    let hasil = 0

    arr.map((e)=> {
        let min = Math.min(...e)
        hasil += min
    })

    return hasil
}

function sumOfMinimums2(arr){
    return arr.reduce((a,b) => a + Math.min(...b),0)
}

// const arr = [[3, 2, 1], [4, 5, 6], [7, 8, 9]];
// console.info(sumOfMinimums(arr))

/**** Soal No 162 *****/
// https://www.codewars.com/kata/5a40c250c5e284a76400008c
function bouncingBall(initial, proportion) {
    let hasil = 0

    while((initial) > 0){
        if(initial <= 1) break
        initial *= proportion
        hasil++
    }
    return hasil
};

// console.info(bouncingBall(435, 0.6408623247574674))

/**** Soal No 163 *****/
// https://www.codewars.com/kata/583952fbc23341c7180002fd
function orderFood(list) {
    const hasil = {}

    for(let i of list){
        hasil[i.meal] = (hasil[i.meal] || 0) + 1
    }

    return hasil
}
// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//         meal: 'vegetarian' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//         meal: 'standard' },
//     { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//         meal: 'vegan' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//         meal: 'vegetarian' },
// ];
// console.info(orderFood(list1))

/**** Soal No 164 *****/
// https://www.codewars.com/kata/5a8059b1fd577709860000f6
function alphabetic(s) {
    for(let i = 0; i < s.length - 1; i++) {
        let code = s[i].charCodeAt(0)
        let code2 = s[i+1].charCodeAt(0)
        if(code > code2) return false
    }

    return true
}

// console.info(alphabetic('kata'))

/**** Soal No 165 *****/
// https://www.codewars.com/kata/6402205dca1e64004b22b8de
function findCaterer(budget, people){
    const paket = {
        1 : 15*people,
        2 : 20*people,
        3 : 30*people,
        4 : 30*people*0.8,
    }

    if(people <= 0 || budget < paket[1]) return -1;

    if(budget >= paket[4] && people > 60) return 3
    if(budget >= paket[3] ) return 3
    if(budget >= paket[2]) return 2
    if(budget >= paket[1]) return 1

}
/**** Soal No 166 *****/
// https://www.codewars.com/kata/566efcfbf521a3cfd2000056
// 012345
// 543210 => 5 | 0 1 2 3 4


// 0 1 2 3 4 = > 4 0 3 1 2
// 1 2 3 4 5 6 7
// 43210, 4 0123, 40 321, 403 12
function flipNumber(s) {
    const arr = [...s];
    let i = 0, j = arr.length - 1;
    const result = [];

    while (i <= j) {
        result.push(arr[j]);
        if (i !== j) result.push(arr[i]);
        i++;
        j--;
    }
    return result.join('');
}

// const str = '0123'
// console.info(flipNumber(str))

/**** Soal No 167 *****/
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168
function reverse(n) {
    let s = n < 0 ? -1 : 1;
    n = Math.abs(n);
    let temp = 0;

    while (n > 0) {
        let digit = n % 10;
        temp = temp * 10 + digit;
        n = Math.trunc(n / 10);
    }

    return s * temp;
}

let num = 9832
console.info(reverse(num))

/**** Soal No 168 *****/
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n)
{
    if(n < 0 || n > 12) throw RangeError('Input must be between 0 and 12')

    let hasil = 1

    for(let i = 1; i <= n; i++) {
        hasil *= i
    }

    return hasil
}

/**** Soal No 169 *****/
// https://www.codewars.com/kata/57fafd0ed80daac48800019f
function remove (string) {
    let x = 0
    string.split('').map((e) => {
        if(e === '!') x++
        console.info(x)
    })

    return string.split('').filter((e) => e !== '!').join('') + '!'.repeat(x)
}

console.info(remove('"Hi! Hi!! Hi!"'))

/**** Soal No 170 *****/
// https://www.codewars.com/kata/586e1d458cb711f0a800033b
// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.
function processData(data){
    let hasil = 1
    let temp;

    for (let i of data){
        temp = i[0] - i[1];
        hasil *= temp
        temp = 0
    }

    return hasil
}

function processData2(data){
    return data.reduce((a,b) => a * (b[0] - b[1]), 1);
}

console.info(processData([[2, 5], [3, 4], [8, 7]]))