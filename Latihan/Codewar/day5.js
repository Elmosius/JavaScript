//**** Soal No 45*****//
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
    let x = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        if (arr[i] !== arr[i + 1]) {
          x = arr[i];
        }
      } else {
        if (arr[i] !== arr[0] && arr[1] !== arr[i]) {
          x = arr[i];
        }
      }
    }
    return x;
  }
  
  //**** Soal No 46*****//
  // https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
  function booleanToString(b) {
    return b === true ? "true" : "false";
  }
  
  //**** Soal No 47*****//
  // https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
  function getGrade(s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3;
    return x >= 70 ? (x >= 80 ? (x >= 90 ? "A" : "B") : "C") : x >= 60 ? "D" : "F";
  }
  
  //**** Soal No 48*****//
  // https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
  function correct(string) {
    let x = "";
    string.split("").map((e) => {
      if (e === "1" || e === "5" || e === "0") {
        if (e === "1") x += "I";
        if (e === "5") x += "S";
        if (e === "0") x += "O";
      } else {
        x += e;
      }
    });
  
    return x;
  }
  
  //**** Soal No 49*****//
  // https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
  function sumMix(x) {
    let hasil = 0;
    x.map((e) => (hasil += Number(e)));
  
    return hasil;
  }
  
  //**** Soal No 50*****//
  // https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript
  function boolToWord(bool) {
    return bool === true ? "Yes" : "No";
  }
  
  //**** Soal No 51*****//
  function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
  }
  
  //**** Soal No 52*****//
  function feast(beast, dish) {
    if (beast.slice(-1) + beast.slice(0, 1) === dish.slice(-1) + dish.slice(0, 1)) {
      return true;
    } else {
      return false;
    }
  }
  
  // atau
  
  function feast(beast, dish) {
    return beast[0] && beast[beast.length - 1] === dish[0] && dish[dish.length - 1] ? true : false;
  }
  
  //**** Soal No 53*****//
  // https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript
  function goals(l, co, ch) {
    return l + co + ch;
  }
  
  //**** Soal No 54*****//
  // https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
  String.prototype.toAlternatingCase = function () {
    let x = "";
    this.split("").map((e) => {
      e === e.toUpperCase() ? (x += e.toLowerCase()) : (x += e.toUpperCase());
    });
    return x;
  };
  
  //**** Soal No 55*****//
  // https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
  function isPalindrome(x) {
    let reverse = x.split("").reverse().join("");
    return x.toUpperCase() === reverse.toUpperCase() ? true : false;
  }
  
  //**** Soal No 56*****//
  // https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
  function switchItUp(number) {
    const text = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return text[number];
  }
  
  //**** Soal No 57*****//
  // https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
  function twiceAsOld(d, s) {
    let x = d - 2 * s;
    return x < 0 ? x * -1 : x;
  }
  
  //**** Soal No 58*****//
  // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
  function lovefunc(flower1, flower2) {
    let x = flower1 - flower2;
    return x % 2 !== 0 ? true : false;
  }
  
  //**** Soal No 59*****//
  // https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
  function sumArray(array) {
    let x = 0;
    if (array && array.length > 2) {
      y = array.sort((a, b) => a - b);
      console.info(y);
      y.map((e, i) => {
        i != 0 && i != y.length - 1 ? (x += e) : (x += 0);
      });
    } else {
      x;
    }
    return x;
  }
  
  //**** Soal No 60*****//
  // https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions/javascript
  function powersOfTwo(n) {
    let x = [];
    for (let i = 0; i <= n; i++) {
      x.push(2 ** i);
    }
    return x;
  }
  
  //**** Soal No 61*****//
  // https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
  function sumStr(a, b) {
    x = Number(a) + Number(b);
    return x.toString();
  }
  
  //**** Soal No 62*****//
  // https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
  function between(a, b) {
    let x = [];
    for (let i = a; i <= b; i++) {
      x.push(i);
    }
    return x;
  }
  
  //**** Soal No 63*****//
  // https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
  