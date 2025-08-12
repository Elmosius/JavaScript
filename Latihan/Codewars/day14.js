/**** Soal No 138 *****/
// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
function alphabetPosition(text) {
    const angka = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26,
    }
    let hasil = ''
    text.toLowerCase().split('').map(e => {
        if(e !== ' ' && angka[e] !== undefined)  hasil += angka[e] + " "
    })

    return hasil.trim()
}

function alphabetPosition2(text) {
    const result = [];
    for (let i of text.toLowerCase()) {
        const code = i.charCodeAt(0);

        // hanya proses huruf a-z (ASCII 97–122)
        if (code >= 97 && code <= 122) {
            result.push(code - 96);
        }
    }

    return result.join(' ');
}

/**** Soal No 139 *****/
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
function duplicateCount(text){
    const t = text.toLowerCase()
    const count = {}

    for (let i of t){
        count[i] = (count[i] || 0) + 1;
    }

    let d = 0
    for (let i in count){
        if(count[i] > 1) d++
    }

    return d
}

/**** Soal No 140 *****/
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript
function testing123(arr){
    return arr.map((e,i) => `${i+1}: ${e}`)
}

/**** Soal No 141 *****/
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
// assert.strictEqual(diamond(1), "*\n")
//     assert.strictEqual(diamond(3), " *\n***\n *\n")
//     assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")

function diamond(n){
    let result = []

    if (n % 2 === 0 || n <= 0 ) return null

    for (let i = 1; i <= n; i += 2) {
        const s = (n - i) / 2;
        result.push(" ".repeat(s) + "*".repeat(i) + "\n");
    }

    for (let i = n - 2; i >= 1; i -= 2) {
        const s = (n - i) / 2;
        result.push(" ".repeat(s) + "*".repeat(i) + "\n");
    }
    return result.join('')
}

/**** Soal No 142 *****/
// https://www.codewars.com/kata/56200d610758762fb0000002/javascript
function addFive(num) {
    return num + 5
}

/**** Soal No 143 *****/
// https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/javascript
function helloWorld(){
    let str = "Hello World!"
    console.log(str)
}

/**** Soal No 144 *****/
// https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript
function angle(n) {
    return n > 2 ? (n-2) * 180 : null
}

/**** Soal No 145 *****/
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/javascript
function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0
}

/**** Soal No 146 *****/
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/javascript
function gimme (triplet) {
    const sorted = [...triplet].sort((a,b)=> a-b)
    const mid = sorted[1]
    return triplet.indexOf(mid)
}

/**** Soal No 147 *****/
// https://www.codewars.com/kata/571effabb625ed9b0600107a/javascript
function getLength(arr){
    //return length of arr
    return arr.length
}
function getFirst(arr){
    //return the first element of arr
    return arr[0]
}
function getLast(arr){
    //return the last element of arr
    return arr[arr.length - 1]
}
function pushElement(arr){
    let el=1;
    //push el to arr
    arr.push(el)
    return arr
}
function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
}

/**** Soal No 148 *****/
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s){
    let b = 0
    let k = 0

    s.split('').map((e) => {
        e === e.toUpperCase() ? b++ : k++
    })

    return b > k ? s.toUpperCase() : s.toLowerCase()
}


// testing
console.info(solve('CODe'))

