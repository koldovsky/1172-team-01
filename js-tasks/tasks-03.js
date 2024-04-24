// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2

// Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//   def find_smallest_int(arr):
//   smallest = arr[0];
//   for num in arr:
//     if num < smallest:
//       smallest = num;
//   return smallest;

// In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:
// function showObjectKeys(obj){
//   for (let key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (let key in obj){
//     console.log(obj[key]);
//   }
// }
// let arr=["one","two","three"];
// console.log("keys of arr:")
// showObjectKeys(arr);
// console.log("values of arr:")
// showObjectValues(arr);

// -------------------------------- https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript --------------------------------
// Рішення:

// Всі запропонованні рішення:
// Карандашов Артем
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// -------------------------------- https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript --------------------------------
// Рішення:

// Всі запропонованні рішення:
// Карандашов Артем
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// Albina Hrytsiv
function circleCircumference(circle) {
return 2 * Math.PI * circle.radius;
}

// -------------------------------- https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript --------------------------------
// Рішення:

// Всі запропонованні рішення:
// Карандашов Артем
function giveMeFive(obj) {
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}
//Albina Hrytsiv
function giveMeFive(obj) {
  let resultArray = [];
  for (let key in obj) {
    if (key.length === 5) {
      resultArray.push(key);
    }
    if (obj[key].toString().length === 5) {
      resultArray.push(obj[key]);
    }
  }
  return resultArray;
}

// -------------------------------- https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript --------------------------------
// Рішення:

// Всі запропонованні рішення:
// Карандашов Артем
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}

// -------------------------------- https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript --------------------------------
// Рішення:

// Всі запропонованні рішення:
// Карандашов Артем
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
