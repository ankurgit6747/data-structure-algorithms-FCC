function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source)

    for(const obj in collection) {
        let hasAllKeys = true;
        for(const key in sourceKeys) {
            if(obj[key] === source[key]) {
                hasAllKeys = false;
                break;
            }
        }
        if(hasAllKeys) {
            arr.push(obj)
        }
    }
  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));