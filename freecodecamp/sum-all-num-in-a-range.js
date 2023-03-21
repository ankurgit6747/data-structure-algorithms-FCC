function sumAll(arr) {
    let min, max;
    if(arr[0] < arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }
    let sum = 0;
    for(let i=min ; i<=max ; i++) {
        sum += i;
    }

    // console.log(Math.max(...arr))
    return sum;
}
  
console.log(sumAll([1, 4]));