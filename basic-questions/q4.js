// Question: Write a function that takes an array of integers and returns the second largest integer in the array.

// Here’s an example of what the function should return:

// findSecondLargest([1, 2, 3, 4, 5]) // returns 4

function findSecondLargest(arr) {
  let fistLargest = 0;

  let newArr = [...arr];

  for(let i=0 ; i<arr.length ; i++) {
    if(arr[i] > fistLargest) {
      fistLargest = arr[i];
    }
  }

  let filterArr = newArr.filter((el) => el !== fistLargest)
  
  let secondLargest = 0
  for (let i = 0; i < filterArr.length ; i++) {
    if (filterArr[i] > secondLargest) {
      secondLargest = filterArr[i]
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([1, 2, 9, 4, 5]))