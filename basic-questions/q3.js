// Question: Write a function that takes an array of integers and returns the sum of all the even integers in the array.

// Here’s an example of what the function should return:

// sumEven([1, 2, 3, 4, 5]) // returns 6

function sumEven(arr) {
  let sumEve = 0;
  for(let i=0 ; i<arr.length ; i++) {
    if(arr[i] % 2 == 0) {
      sumEve += arr[i]
    }
  }

  return sumEve;
}

console.log(sumEven([1, 2, 3, 4, 5]))