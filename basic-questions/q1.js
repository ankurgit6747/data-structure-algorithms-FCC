// Question: Write a function that takes an array of integers and returns the sum of all the integers in the array.

// Here’s an example of what the function should return:

// sumArray([1, 2, 3, 4, 5]) // returns 15


// sollution 1
function sumArray(arr) {
  let sum = 0
  for(let i=0 ; i < arr.length ; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// sollution 2
function sumArray2(arr) {
  return arr.reduce((a, b) => a+b);
}

console.log(sumArray([1, 2, 3, 4, 5, 5]))
console.log(sumArray2([1, 2, 3, 4, 5, 5, 2]))