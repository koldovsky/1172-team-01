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
// Карандашов Артем
function stringToArray(string){
  return string.split(" ");
}

// -------------------------------- https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
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

// -------------------------------- https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function warnTheSheep(queue) {
  if(queue.at(-1) === "wolf") return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
}


// -------------------------------- https://www.codewars.com/kata/beginner-lost-without-a-map --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function maps(x){
  return x.map( num => num * 2 );
}


// -------------------------------- https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
function firstNonConsecutive (arr) {
  for(let i = 1; i < arr.length; i++)
    if(arr[i] - arr[i-1] != 1) return arr[i];
  return null;
}






// --------------------------------  https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function doubleInteger(i) {
  return i*2;
}

// -------------------------------- https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// -------------------------------- https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function nthEven(n){
  return n * 2 - 2;
}

// -------------------------------- https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


// -------------------------------- https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}


// -------------------------------- https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript --------------------------------
// Рішення:


// ------------ Всі запропонованні варіанти рішень:
// Карандашов Артем
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}