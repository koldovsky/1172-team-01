Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2

Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
  def find_smallest_int(arr):
  smallest = arr[0];
  for num in arr:
    if num < smallest:
      smallest = num;
  return smallest;

In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:
function showObjectKeys(obj){
  for (let key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (let key in obj){
    console.log(obj[key]);
  }
}
let arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
