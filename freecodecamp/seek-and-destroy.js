function destroyer(arr) {
    const argsArr = [...arguments].slice(1);
    const filterArgs = [];

    // 1st way
    // for(let i=0 ; i<arr.length ; i++) {
    //     if(!argsArr.includes(arr[i])) {
    //         filterArgs.push(arr[i])
    //     }
    // }

    // 2nd way
    // for(const currentElem of arr) {
    //     if(!argsArr.includes(currentElem)) {
    //         filterArgs.push(currentElem)
    //     }
    // }
    return arr.filter((item) => !argsArr.includes(item))
    // return filterArgs;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));