/**** Soal No 149 *****/
// https://www.codewars.com/kata/5208f99aee097e6552000148/javascript
function solution(string) {
    return string.split("").map((e) =>{
        if(e === e.toUpperCase()) {
            return " " + e
        }
        return e
    }).join("")
}

/**** Soal No 150 *****/
// https://www.codewars.com/kata/5663f5305102699bad000056/javascript
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1;

    let maxa1 = Math.max(...a1.map((e) => e.length));
    let mina1 = Math.min(...a1.map((e) => e.length));

    let maxa2 = Math.max(...a2.map((e) => e.length));
    let mina2 = Math.min(...a2.map((e) => e.length));

    return Math.abs(maxa1 - mina2) > Math.abs(maxa2 - mina1) ? Math.abs(maxa1 - mina2) : Math.abs(maxa2 - mina1);
}

/**** Soal No 151 *****/
// https://www.codewars.com/kata/5761a717780f8950ce001473/javascript
function  calculateAge(a,b) {
    if(b-a === 1) return `You are 1 year old.`
    if(b>a) return `You are ${b-a} years old.`
    if(a-b === 1) return `You will be born in ${a-b} year.`
    if(b<a) return `You will be born in ${a-b} years.`

    return "You were born this very year!"
}

/**** Soal No 152 *****/
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript
function encrypt(text, n) {
    if(!text) return text

    let hasil = text
    for (let i = 0; i < n; i++) {
        let ganjil = []
        let genap = []

        hasil.split('').map((e, i) => {
            if(i%2 === 0) {
                ganjil.push(e)
            } else {
                genap.push(e)
            }
        })

        hasil = genap.join('') + ganjil.join('')
    }
    return hasil
}

function decrypt(encryptedText, n) {
    if(!encryptedText) return encryptedText

    let hasil = encryptedText
    let panjang = encryptedText.length
    let ganjil = Math.floor(panjang/2)
    let genap = Math.ceil(panjang/2)

    for (let i = 0; i < n; i++) {
        let kiri = hasil.slice(0, ganjil)
        let kanan = hasil.slice(ganjil)

        let temp = ''
        for(let j = 0; j < ganjil; j++) {
            temp += kanan[j]
            temp += kiri[j]
        }

        if(genap > ganjil){
            temp += kanan[ganjil]
        }

        hasil = temp
    }

    return hasil
}

/**** Soal No 153 *****/
// https://www.codewars.com/kata/586f6741c66d18c22800010a/javascript
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0

    let hasil = 0

    for(let i = begin; i <= end; i += step) hasil += i

    return hasil
};

// console.info(sequenceSum(1,5,1))


/**** Soal No 154 *****/
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

function incrementString (str) {
    for(let i of str){
    }
}

console.info(incrementString('foo'))

/**** Soal No 155 *****/
//

/**** Soal No 156 *****/
//
/**** Soal No 157 *****/
//
/**** Soal No 158 *****/
//
/**** Soal No 159 *****/
//


