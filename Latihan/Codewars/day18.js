/**** Soal No 180 *****/
// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
function adjacentElementsProduct(array) {
    let hasil = array[0] * array[1]

    array.reduce((a, b) => {
        if (a * b > hasil) {
            hasil = a * b
        }
        return b
    })

    return hasil
}

console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]))

/**** Soal No 181 *****/
// https://www.codewars.com/kata/539de388a540db7fec000642/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode) return false

    const current = new Date(Date.parse(currentDate))
    const expiration = new Date(Date.parse(expirationDate))

    return current <= expiration
}

console.log(checkCoupon('123','123','September 5, 2014','September 1, 2014'))

/**** Soal No 182 *****/
// https://www.codewars.com/kata/556196a6091a7e7f58000018/javascript
function largestPairSum (numbers) {
    const sorted = numbers.sort((a, b) => a - b)

    return sorted[sorted.length - 1] + sorted[sorted.length - 2]
}

/**** Soal No 183 *****/
// https://www.codewars.com/kata/535474308bb336c9980006f2/javascript
const greet = (name) => {
    const nama = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello, ${nama}!`
};

console.log(greet('riley'))

/**** Soal No 184 *****/
// https://www.codewars.com/kata/5680781b6b7c2be860000036/javascript
function vowelIndices(word){
    const vowels = ['a','e','i','o','u','y']
    const result = []

    for(let i in word){
        if(vowels.includes(word[i].toLowerCase())) result.push(Number(i) + 1)
    }

    return result
}

console.log(vowelIndices('YoMama'))

/**** Soal No 185 *****/
// https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript
function alphabetWar(fight){
    const left = {
        w: 4, p: 3, b:2 , s:1, result: 0
    }

    const right = {
        m: 4, q:3, d:2 , z:1, result: 0
    }

    for(let i of fight){
        if(left[i]) left.result += left[i]
        else if (right[i]) right.result += right[i]
    }

    if(left.result > right.result) return 'Left side wins!'
    else if(left.result < right.result) return 'Right side wins!'
    else return "Let's fight again!"
}

console.info(alphabetWar('kjptbp'))

/**** Soal No 186 *****/
// https://www.codewars.com/kata/59c633e7dcc4053512000073/javascript
// z o d ia c => 26
// kalau bukan c dia taruh di result lalu tambahin tuh jumlahin dari code charnya misalnya z = 26

function solve(s) {
    const c = ['a', 'i', 'u', 'e', 'o']
    let result = {}
    let j = 1

    for(let i in s){
        let code = s[i].charCodeAt(0) - 96
        if(!c.includes(s[i])){
            result[`hasil-${j}`] = (result[`hasil-${j}`] || 0) + (code)
        }else{
            j++
        }
    }
    j = 0
    for (let i in result) {
        if(result[i] > j) j = result[i]
    }

    return j
};

console.info(solve('saeiueeiiioeeeeiaoiaieeiouaomcynadnuffaquuujpuebaqmumqzikaaptuoecioxoiiciicieqeqipiimeoeuunlfaobqolennosrarqoimuuaorwsfiauimxgau'))

/**** Soal No 187 *****/
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript
// write the function isAnagram
const isAnagram = (test, original) => {

    const word = test.toLowerCase().split('').sort().join('')
    const word2 = original.toLowerCase().split('').sort().join('')

    return word === word2
};

console.info(isAnagram("Buckethead", "DeathCubeK"))

/**** Soal No 188 *****/
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
function longest(s1, s2) {
    const c = s1 + s2
    const u = new Set(c)
    return Array.from(u).sort().join('')
}

function longest2(s1, s2) {
    const c = s1 + s2
    return [...new Set(c)].sort().join('')
}

console.info(longest('abc', 'abc'))

/**** Soal No 189 *****/
// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
function arrayDiff(a, b) {
    const newA = a.filter(e => !b.includes(e))

    return newA
}

function arrayDiff2(a, b) {
    const setB = new Set(b);
    return a.filter(e => !setB.has(e));
}
console.info(arrayDiff([1,2,2,2,3], [2]))

/**** Soal No 190 *****/
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"
//
// # list of categories:
// "A", "B", "C", "W"
//
// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
//https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript
function stockList(books, categories) {

    if(categories.length === 0 || books.length === 0) return ''

    const list = {}

    for (let i of books){
        let [book, price] = i.split(' ')
        if(categories.includes(book[0])){
            list[book[0]] = (list[book[0]] || 0) + Number(price)
        }
    }

    return `${categories.map(c => `(${c} : ${list[c] || 0})`).join(' - ')}`;
}

const books = ['ABART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60']
const categories = ['A', 'B', 'C', 'W']

console.info(stockList(books, categories))