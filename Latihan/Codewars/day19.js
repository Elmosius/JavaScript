/**** Soal No 191 *****/
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/javascript
const SequenceSum = (count) =>{
    if(count < 0 ) return count + '<0';
    if(count === 0) return '0=0';

    let result = '';
    let sum = 0;
    for(let i = 0; i <= count; i++){
        sum += i;
        if(i !== count) result += `${i}+`;
        else result += `${i}`;

    }
    return result + ' = ' + sum;
}

console.log(SequenceSum(6));

/**** Soal No 192 *****/
// https://www.codewars.com/kata/534d0a229345375d520006a0/javascript
function isPowerOfTwo(n){
    if(n <= 0) return false;

    return Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(7));


/**** Soal No 193 *****/
// https://www.codewars.com/kata/54e6533c92449cc251001667/javascript
const uniqueInOrder = (iterable) => {
    let result = [];
    let prev;

    for (let i of iterable) {
        if (i !== prev) {
            result.push(i);
            prev = i;
        }
    }

    return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

/**** Soal No 194 *****/
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/javascript
function checkExam(array1, array2) {
   let score = 0;
   let i = 0

    for(let j of array2){
        if(array1[i] === j) score += 4;
        else if (j === '') score += 0;
        else score -= 1;
        i++;
    }

    return score < 0 ? 0 : score;
}

console.log(checkExam(['a', 'b', 'c'], ['a', 'b', 'c']));

/**** Soal No 195 *****/
// https://www.codewars.com/kata/59a8570b570190d313000037/javascript
function sumCubes(n){
    let result = 0
    for(let i = 1; i <= n; i++){
        result += Math.pow(i, 3);
    }
    return result;
}

/**** Soal No 196 *****/
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript
function capitalize(s){
    let r1 = []
    let r2 = []
    s.split('').map((e, i) => {
        if(i % 2 === 0) {
            r1.push(e.toUpperCase())
            r2.push(e.toLowerCase())
        }else{
            r1.push(e.toLowerCase())
            r2.push(e.toUpperCase())
        }
    })

    return [r1.join(''), r2.join('')];
};

console.log(capitalize('hello world'));

/**** Soal No 197 *****/
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/javascript
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

    let result = 0;
    for(let i = 1; i <= 8; i++){
        result += Math.pow(arguments[i-1], 2);
    }

    return Math.floor((Math.floor(Math.sqrt(result)))/2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

/**** Soal No 198 *****/
// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
function isSortedAndHow(array) {

    let hasil = 0
    let temp;
    for(let i = 0; i <= array.length - 1; i++){
        if(i === 0) temp = array[i]
        else if (i !== array.length - 1 && array.length > 2){
            if (array[i] >= temp && array[i] <= array[i + 1]) {
                hasil = 1;
            }
            else if (array[i] <= temp && array[i] >= array[i + 1]){
                hasil = 2;
            }
            else{
                hasil = 0;
                break;
            }
            temp = array[i];
        }
        else if (array.length-1 < 2){
            if (array[i] >= temp) {
                hasil = 1;
            }
            else if (array[i] <= temp){
                hasil = 2;
            }else{
                break
            }
        }
    }
    return hasil === 0 ? 'no' : hasil === 1 ? 'yes, ascending' : 'yes, descending';
}
function isSortedAndHow2(arr) {
    let naik = true, turun = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) naik = false;
        if (arr[i] > arr[i - 1]) turun = false;
    }
    if (naik) return "yes, ascending";
    if (turun) return "yes, descending";
    return "no";
}

console.log(isSortedAndHow([3,2,1,1]));

/**** Soal No 199 *****/
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/javascript
function toNumberArray(stringarray){
    return [...stringarray].map((e) => Number(e))
}

/**** Soal No 200 *****/
// https://www.codewars.com/kata/56f3a1e899b386da78000732/javascript
function partlist(arr) {
    let result = [];
    let temp, temp2;

    for(let i = 1; i < arr.length; i++){
        temp = arr.slice(0, i).join(' ');
        temp2 = arr.slice(i).join(' ');

        result.push([temp, temp2]);

        temp = '', temp2 = '';
    }

    return result;
}

console.info(partlist(["I", "wish", "I", "hadn't", "come"]))