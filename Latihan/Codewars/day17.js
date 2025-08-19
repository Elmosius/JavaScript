/**** Soal No 170 *****/
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript
function rowWeights(array){
    let t1 = 0
    let t2 = 0

    for(let i in array){
        if(i % 2 === 0 ){
            t1 += array[i]
        }else{
            t2 += array[i]
        }
    }

    return [t1, t2]
}

console.info(rowWeights([100,50]))


/**** Soal No 171 *****/
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 !== 0 ? null : Math.pow(Math.sqrt(sq) + 1, 2)
}

console.info(findNextSquare(null))

/**** Soal No 172 *****/
//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str){
    let arr = str.split(' ')
    let hasil = ''
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(j === arr[i].length-1) hasil += arr[i][j].toLowerCase()
            else hasil += arr[i][j].toUpperCase()
        }
        hasil +=  ' '
    }

    return hasil.trim()
}

console.info(alienLanguage('hello world'))

/**** Soal No 173 *****/
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/javascript
function evenNumbers(array, number) {
    let result = []
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] % 2 === 0) result.push(array[i])
        if(result.length === number) break
    }

    return result.reverse()
}

console.info(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

/**** Soal No 174 *****/
// https://www.codewars.com/kata/57073869924f34185100036d
function randomCase(x) {
    let arr = []

    for(let i of x){
        let random = (Math.round(Math.random()))
        if(random === 0) arr.push(i.toLowerCase())
        else arr.push(i.toUpperCase())
    }

    return arr.join('')
}

console.info(randomCase('hello everyone'))

/**** Soal No 175 *****/
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s){
    let arr = s.split(' ')
    let temp = arr[0].length

    for(let i of arr){
        if(temp > i.length) temp = i.length
    }

    return temp
}

console.info(findShort('bitcoin take over the world maybe who knows perhaps'))

/**** Soal No 176 *****/
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/javascript
function flattenAndSort(array) {
    if(array.length === 0) return []
    return array.reduce((a,b)=>a.concat(b)).sort((a,b)=>a-b)
}

console.info(flattenAndSort([]))

/**** Soal No 177 *****/
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/javascript
function noOdds( values ){
    return values.filter((e) => e % 2 === 0 )
}

/**** Soal No 178 *****/
// https://www.codewars.com/kata/58fa273ca6d84c158e000052/javascript
function digits(n) {
    return n.toString().length
}

console.info(digits(66))

/**** Soal No 179 *****/
// https://www.codewars.com/kata/52f3149496de55aded000410/javascript
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((a,b) => (Number(a) + Number(b)), 0)
}

console.info(sumDigits(-35))

/**** Soal No 180 *****/
// https://www.codewars.com/kata/55b75fcf67e558d3750000a3
class Block{

    constructor(data){
        this.a = data[0]
        this.b = data[1]
        this.c = data[2]
    }

    getWidth() {
        return this.a
    }

    getLength() {
        return this.b
    }

    getHeight(){
        return this.c
    }

    getVolume(){
        return this.a * this.b * this.c
    }

    getSurfaceArea(){
        return 2 * (this.a * this.b + this.a * this.c + this.b * this.c)
    }
}
