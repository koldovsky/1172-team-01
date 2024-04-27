// -------------------------------- https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript --------------------------------
// Рішення:
stringToArray = (string) => string.split(" ");


// -------------------------------- https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript --------------------------------
// Рішення:
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");


// -------------------------------- https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript --------------------------------
// Рішення:
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


// -------------------------------- https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript --------------------------------
// Рішення:
function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}


// -------------------------------- https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript --------------------------------
// Рішення:
function warnTheSheep(queue) {
  if (queue.at(-1) === "wolf") return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${
    queue.length - queue.indexOf("wolf") - 1
  }! You are about to be eaten by a wolf!`;
}


// -------------------------------- https://www.codewars.com/kata/beginner-lost-without-a-map --------------------------------
// Рішення:
function maps(x) {
  return x.map((num) => num * 2);
}


// -------------------------------- https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript --------------------------------
// Рішення:
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] != 1) return arr[i];
  return null;
}


// --------------------------------  https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript --------------------------------
// Рішення:
doubleInteger = (i) => i << 1;


// -------------------------------- https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript --------------------------------
// Рішення:
twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);


// -------------------------------- https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript --------------------------------
// Рішення:
nthEven = (n) => n * 2 -2;


// -------------------------------- https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript --------------------------------
// Рішення:
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


// -------------------------------- https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript --------------------------------
// Рішення:
past = (h, m, s) => 3600000 * h + 60000 * m + 1000 * s;


// -------------------------------- https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript --------------------------------
// Рішення:
isDivisible = (n, x, y) => n % x === 0 && n % y === 0;