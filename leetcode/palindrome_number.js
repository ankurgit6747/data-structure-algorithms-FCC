var isPalindrome = function (x) {
  // return x % 10;
  // let arr = [];
  // if (x < 0) {
  //   return false
  // }
  // while (x > 0) {
  //   arr.push(x % 10); // return last value
  //   x = Math.floor(x / 10); // remove the last value
  // }
  // console.log(arr)
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== arr[arr.length - 1 - i]) {
  //     return false;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  // sol 2 =>
  // if(x<0) return false;
  // let number = x;
  // let reversed = 0;
  // while(number > 0) {
  //   reversed = (reversed * 10) + (number % 10);
  //   number = parseInt(number/10);
  // }
  // return reversed;

  // sol 3 =>
  let stringX = String(x)
  let reverse = "";
  for(let i=stringX.length -1 ; i>= 0 ;  i--) {
    reverse += stringX[i]
  }
  return stringX === reverse
};
                                                   

console.log(isPalindrome(123454321))