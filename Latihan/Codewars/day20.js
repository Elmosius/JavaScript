/**** Soal No 201 *****/
// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
function bump(x){
    let count = 0;

    for(let i of x){
        if(i === "n"){
            count++;
        }
        if(count > 15){
            return "Car Dead"
        }
    }

    return 'Woohoo!'
}

/**** Soal No 202 *****/
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/javascript
function minSum(arr) {
    const newArr = arr.sort((a, b) => b - a );

    let count = 0;

    for(let i = 0; i < newArr.length; i++){
        if(i < arr.length / 2){
            count += newArr[i] * newArr[newArr.length - 1 - i];
        }
    }

    return count;
}

console.info(minSum([12,6,10,26,3,24]));

/**** Soal No 203 *****/
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/javascript
function minValue(values){
    const arr = new Set(values);

    return parseInt(Array.from(arr).sort((a,b) => a-b).join(''));
}
console.info(minValue([4,7,5,7]));

/**** Soal No 204 *****/
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/javascript
function evaporator(content, evapPerDay, threshold){
    let days = 0
    let gas = 100

    while(gas > threshold){
        days++;
        gas = gas * (1 - evapPerDay / 100);
    }

    return days;
}
console.info(evaporator(10, 10, 5));

/**** Soal No 205 *****/
// https://www.codewars.com/kata/58daa7617332e59593000006/javascript
function findLongest(array){
    const max = Math.max(...array.map((e) => e.toString().length))
    const index = (array.findIndex((e) => e.toString().length === max))

    return array[index]
}

console.info(findLongest([111,999]))

/**** Soal No 206 *****/
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/javascript
function generateShape(integer){
    let shape = '';
    for(let i = 0; i < integer; i++){
        if(i === integer - 1){
            shape += '*'.repeat(integer) ;
        }else{
            shape += '*'.repeat(integer) + '\n';
        }
    }

    return shape;
}

console.info(generateShape(3));

/**** Soal No 207 *****/
// https://www.codewars.com/kata/57f759bb664021a30300007d/javascript
function switcheroo(x){
    let result = []

    for(let i of x ){
        if(i === 'a') result.push('b')
        else if(i === 'b') result.push('a')
        else result.push(i)
    }

    return result.join('')
}

/**** Soal No 208 *****/
// https://www.codewars.com/kata/55b051fac50a3292a9000025/javascript
function filterString(value) {
    const filter = value.split('').filter((e) => !isNaN(parseInt(e)))

    return Number(filter.join(''))
}

console.info(filterString('a123'));
console.info(parseInt('a'))

/**** Soal No 209 *****/
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript
function sumTriangularNumbers(n) {
    let result = 0
    let i = 1
    let temp = [] ;

    while(n > 0){
        temp.push(result += i);
        i++, n--;
    }
    return temp.reduce((a,b) => a + b,0);
}

console.info(sumTriangularNumbers(4));

/**** Soal No 210 *****/
// https://www.codewars.com/kata/56484848ba95170a8000004d/javascript
function gps(s, x) {

    if(x.length <= 1) return 0;

    let result = [];
    for (let i = 0; i < x.length; i++) {
        if(i !== x.length - 1){
            result.push((3600 * (x[i+1] - x[i])) / s);
        }
    }

    return Math.max(...result);
}

const x = [0.0]
console.info(gps(15,x))

