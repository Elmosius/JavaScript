/**** Soal No 211 *****/
// https://www.codewars.com/kata/57eaec5608fed543d6000021/javascript
function divCon(x){
    let str = 0
    let int = 0

    for(let i of x){
        if(typeof i === 'number'){
            int += i
        }else{
            str += parseInt(i)
        }
    }

    return int - str
}

console.info(divCon([9,3,'7','3']))

/**** Soal No 212 *****/
// https://www.codewars.com/kata/580755730b5a77650500010c/javascript
function sortMyString(S) {
    const arr = S.split('')

    const odd = []
    const even = []

    arr.filter((e,i ) => {
        if(i % 2 === 0){
            even.push(e)
        }else{
            odd.push(e)
        }
    })

    return `${even.join('')} ${odd.join('')}`
}
console.info(sortMyString('CodeWars'));

/**** Soal No 213 *****/
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
function solve(arr){
    const result = []
    let temp;

    for(let i = 0; i < arr.length; i++){
        temp = 0
        for(let j = 0; j < arr[i].length; j++){
            let code = arr[i][j].toLowerCase().charCodeAt(0) - 96
            if(j + 1 === code) temp++
        }
        result.push(temp)
    }

    return result;
};

console.info(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))

/**** Soal No 214 *****/
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/javascript
function sortGiftCode(code){
    return code.split('').sort().join('')
}

console.info(sortGiftCode('cbadefg'))

/**** Soal No 215 *****/
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/javascript
function wordsToMarks(string){
    let result = 0

    for(let i of string){
        let code = i.toLowerCase().charCodeAt(0) - 96
        result += code
    }

    return result
}
console.info(wordsToMarks('love'))

/**** Soal No 216 *****/
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/javascript
function solve(arr) {
    const newArr = new Set(arr.reverse())
    return [...newArr].reverse()
}

console.info(solve(([3, 4, 4, 3, 6, 3])))

/**** Soal No 217 *****/
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/javascript
function overTheRoad(address, n){
    return (2 * n + 1) - address
}

/**** Soal No 218 *****/
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
function remove (string) {
    return string.split('!').join('') + '!'
}

console.info(remove('Hi'))
/**** Soal No 219 *****/
// https://www.codewars.com/kata/582e0e592029ea10530009ce/javascript
function duckDuckGoose(players, goose) {
    const i = (goose - 1) % players.length
    return players[i].name
}

console.info(9 % 30)

/**** Soal No 220 *****/
// https://www.codewars.com/kata/59441520102eaa25260000bf/javascript
function unusualFive() {
    return 5;
}

console.info('.....'.length)