// Question: Write a function that takes an array of integers and returns the largest integer in the array.

// Here’s an example of what the function should return:

// findLargest([1, 2, 3, 4, 5]) // returns 5

// sollution 1
function findLargest(arr) {
  return arr.reduce((a, b) => a > b ? a : b)
}

// sollution 2
function findLargest2(arr) {
  let largest = 0;
  for(let i=0 ; i<arr.length ; i++) {
    if(arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest;
}

console.log(findLargest([1, 2, 9, 4, 5]))
console.log(findLargest2([1, 2, 9, 4, 5]))