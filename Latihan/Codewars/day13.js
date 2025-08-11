/**** Soal No 127 *****/
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

/**** Soal No 128 *****/
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;

    while (population < p) {
        population += Math.floor(population * (percent / 100)) + aug;
        years++;
    }

    return years;
}

/**** Soal No 129 *****/
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript
// [1,2,3,4,3,2,1]
// left itu index = 0 yang berarti 1 karena ga dinggap jadi 0
// sedangkan right itu sisa nya berarti selain 0 yaitu sum dari index 1 sampai 5
// abis itu kita check apakah left = right

function findEvenIndex(arr) {
    let final = -1
    for (let i = 0; i < arr.length; i++) {
        let l = 0
        let r = 0

        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                l += arr[j]
            }
        }

        for (let k = i + 1; k < arr.length; k++) {
            r += arr[k]
        }

        if (l === r) {
            final = i
            break
        }
    }

    return final
}

function findEvenIndex2(arr){
    let l = 0
    let r = arr.reduce((a,b)=>a+b)

    for (let i = 0; i < arr.length; i++) {
        r -= arr[i]
        if(l === r) return i
        l += arr[i]
    }
    return -1
}

/**** Soal No 130 *****/
// https://www.codewars.com/kata/57e1e61ba396b3727c000251/javascript
function stringClean(s){
    let hasil = ''
    s.split('').forEach((e)=>{
        if(isNaN(Number(e)) || e === ' '){
            hasil += e
        }
    })

    return hasil
}

function stringClean2(s){
    return s.split('').filter((e) => isNaN(Number(e)) || e === ' ').join('')
}

/**** Soal No 131 *****/
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? 'small' : 'wide'
}

/**** Soal No 132 *****/
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// ada 4 arah dimana north south east west
// kalau misalnya sebaliknya kaya north dan south (itu kan mereka berlawanan) kita bisa hapus dalam arraynya
// berarti harus dicheck satu satu dalam array kiri ke kanan


function dirReduc(arr){
    let status = false

    let i = 0
    while(!status){

        if(i === arr.length){
            status = !status
        }

        if(arr[i] === 'NORTH' && arr[i+1] === 'SOUTH' || arr[i] === 'SOUTH' && arr[i+1] === 'NORTH'){
            arr.splice(i, 2)
            i = 0
        }else if(arr[i] === 'EAST' && arr[i+1] === 'WEST' || arr[i] === 'WEST' && arr[i+1] === 'EAST'){
            arr.splice(i, 2)
            i = 0
        }else{
            i++
        }
    }

    return arr
}

function dirReduc2(arr){
    const kebalikan = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    }

    let hasil = []

    for(let i of arr){
        if(hasil.length > 0 && hasil[hasil.length-1] === kebalikan[i]){
            hasil.pop()
        }else{
            hasil.push(i)
        }
    }

    return hasil
}


/**** Soal No 133 *****/
// https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
function chromosomeCheck(sperm) {
    return sperm === 'XY' ? "Congratulations! You're going to have a son." :"Congratulations! You're going to have a daughter."
}

/**** Soal No 134 *****/
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/javascript
function stringToArray(string){
    return string.split(' ')
}

/**** Soal No 135 *****/
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript
function invert(array) {
    return array.map((e) => e*-1)
}

/**** Soal No 136 *****/
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
function reverseWords(str) {
    let hasil = ''
    let temp = []

    for (let i of str.split('')) {
        if(i !== ' '){
            temp.push(i)
        }else{
            temp = temp.reverse()
            temp.push(' ')
            hasil += temp.join('')
            temp = []
        }
    }

    hasil += temp.reverse().join('')
    return hasil
}

function reverseWords2(str) {
    let hasil = '';
    let temp = [];

    for (let i of str) {
        if (i !== ' ') {
            temp.push(i);
        } else {
            hasil += temp.reverse().join('') + ' ';
            temp = [];
        }
    }
    hasil += temp.reverse().join('');
    return hasil;
}

/**** Soal No 137 *****/
// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
function plural(n) {
    return n === 1 ? false : true
}

// simplenya menjadi gini
function plural(n) {
    return n !== 1
}


// testing
const x = 0.5
console.info((x))
