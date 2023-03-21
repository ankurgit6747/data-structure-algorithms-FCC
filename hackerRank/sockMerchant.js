function sockMerchant(n, ar) {
  // Write your code here
 let socks = {}
 let pair = 0;

 for(let i=0 ; i<ar.length ; i++) {
  socks[ar[i]] = socks[ar[i]] + 1 || 1;
  if(socks[arr[i]] % 2 === 0) {
    pair += 1
  }
 }
 return pair;
}

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let n = 9
console.log(sockMerchant(n, arr))
