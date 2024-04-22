// Write a function to split a string and convert it into an array of words
// Ігор Беспалов  
// def string_to_array(s):
//    return s.split(" ")

// def DNAtoRNA(dna):
//   result = "";
//   dna = list(dna.upper());
//   for nucleotide in dna:
//     if nucleotide == "A":
//       result += "A";
//     if nucleotide == "T":
//       result += "U";
//     if nucleotide == "C":
//       result += "C";
//     if nucleotide == "G":
//       result += "G";
//   return result;

// def DNAtoRNA(dna):
//   result = "";
//   dna = list(dna.upper());
//   for nucleotide in dna:
//     if nucleotide == "T":
//       result += "U";
//     else:
//       result += nucleotide;
//   return result;

// -------------------------------- https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем /
function stringToArray(string){
  return string.split(" ");
}

// Граматович Олександр
function stringToArray(string){
  list = string.split(" ")
  return list
}


// Капиця Іван
stringToArray = (string) => string.split(" ");

//Валько Владислава 
function stringToArray(string){
  return string.split(" ");
}

//Берчак Андрій
function stringToArray(string) {
  return string.split(" ");
}

// Гриців Альбіна
function splitStringIntoWords(str) {
    return str.split(' ');
}
// -------------------------------- https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
// Капиця Іван
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

//Валько Владислава 
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
 }

//Берчак Андрій
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}
// Гриців Альбіна
function DNAtoRNA(dna) {
 return dna.replace( "T ", "U");

}
// -------------------------------- https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
var min = function(list){
  return Math.min.apply(null, list);
}

var max = function(list){
  return Math.max.apply(null, list);
}


//Граматович Олександр
function min(list){
  list.sort(function sorting(a,b){
    return a-b
  })
  return list[0]
}

function max(list){
  list.sort(function sorting(a,b){
    return b-a
  })
  return list[0]
}

// Капиця Іван
min = (list) => Math.min.apply(null,list);
max = (list) => Math.max.apply(null,list);


//Валько Владислава
function min (list) {
  return Math.min(...list);
}
function max (list) {
  return Math.max(...list);
}

//Берчак Андрій
function min(list) {
  return list.sort((a, b) => a - b)[0];
};
function max(list) {
  return list.sort((a, b) => b - a)[0];
};

// -------------------------------- https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function min(arr, toReturn) {
  const minValue = Math.min.apply(null, arr);
  switch(toReturn){
      case "value":
        return minValue;
      case "index":
        return arr.indexOf(minValue);
      default:
        return "Sometext"
  }
}
// Капиця Іван
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//Валько Владислава
function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//Берчак Андрій
function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }
  return;
}

// -------------------------------- https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function warnTheSheep(queue) {
  if(queue.at(-1) === "wolf") return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
}

//Валько Владислава
function warnTheSheep(queue) {
  const message = (queue.pop() === 'wolf') ?
      "Pls go away and stop eating my sheep" :
      "Oi! Sheep number " + (queue.length - queue.indexOf('wolf')) +
        "! You are about to be eaten by a wolf!";
  return message;
  }

//Берчак Андрій
function warnTheSheep(queue) {
  if (queue.pop() === "wolf") {
    return "Pls go away and stop eating my sheep";
  }
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === "wolf") {
      return `Oi! Sheep number ${
        queue.length - i
      }! You are about to be eaten by a wolf!`;
    }
  }
}

// -------------------------------- https://www.codewars.com/kata/beginner-lost-without-a-map --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function maps(x){
  return x.map( num => num * 2 );
}

//Валько Владислава
function maps(x){
  return x.map (x => x*2);
  }

//Берчак Андрій
function maps(x) {
  return x.map((num) => num * 2);
}

// -------------------------------- https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
function firstNonConsecutive (arr) {
  for(let i = 1; i < arr.length; i++)
    if(arr[i] - arr[i-1] != 1) return arr[i];
  return null;
}

//Берчак Андрій
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}




// --------------------------------  https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function doubleInteger(i) {
  return i*2;
}
// Капиця Іван
const doubleInteger = i => i * 2;

//Берчак Андрій
function doubleInteger(i) {
  return i * 2;
}
// -------------------------------- https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Берчак Андрій
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

// -------------------------------- https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function nthEven(n){
  return n * 2 - 2;
}
// Капиця Іван
nthEven = (n) => n * 2 -2;

//Берчак Андрій
function nthEven(n) {
  return n * 2 - 2;
}

// -------------------------------- https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

//Берчак Андрій
function getRealFloor(n) {
  if (n === 1 || n === 0) {
    return 0;
  } else if (n < 0) {
    return n;
  } else if (n >= 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}

// -------------------------------- https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}

//Берчак Андрій
function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

// -------------------------------- https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//Берчак Андрій
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
