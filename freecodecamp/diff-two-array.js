function diffArray(arr1, arr2) {
    // const union = [];

    // for(const ell of arr1) {
    //     if(!union.includes(ell)) {
    //         union.push(ell)
    //     }
    // }
    // for(const ell of arr2) {
    //     if(!union.includes(ell)) {
    //         union.push(ell)
    //     }
    // }

    // you can also use es6 set to get the unique array

    const union = new Set([...arr1, ...arr2])
    console.log("union arr is:", typeof(union))
    const symmDiff = []
    for(const currentElem of union) {
       if(arr1.includes(currentElem) && !arr2.includes(currentElem)) {
        symmDiff.push(currentElem)
       } else if(!arr1.includes(currentElem) && arr2.includes(currentElem)) {
        symmDiff.push(currentElem)
       }
    }
    
    return symmDiff;
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  