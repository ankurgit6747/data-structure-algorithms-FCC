// Kind of like array
// Their is no dublicate items and the values are not in particular order

function mySet() {
  //this collection will hold the sets
  var collection = [];
  // this method will check the presence of an element and return true and false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in sets
  this.values = function () {
    return collection;
  };

  // this method will add an element to the sets
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from the sets
  this.remove = function (element) {
      if(this.has(element)) {
          index = collection.indexOf(element);
          collection.splice(index, 1)
          return true;
      }
      return false;
  }

  // this method will return the size of the collection
  this.size = function () {
      return collection.length;
  }

  // this method will return the union of two sets
  // combine two sets and leave out dublicate 
  this.union = function (otherSet) {
      var unionSet = new mySet();
      var firstSet = this.values();
      var secondSet = otherSet.values();
      firstSet.forEach(e => {
          unionSet.add(e);
      })
      secondSet.forEach(e => {
          unionSet.add(e);
      })
      return unionSet;
    }

    // this method will return the intersection of two sets as a new sets
    // it will return all the item that are available in both sets
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values
        firstSet.forEach(e => {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
            return intersectionSet;
        })
    }

    // this will return the difference of two sets as a new sets
    this.difference = function(otherSet) {
        var differenceSet = new mySet()
        var firstSet = this.values
        firstSet.forEach(e => {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
            return differenceSet
        })
    }

    // this method will test if the set is a subset of a difference set
    this.subset = function(otherSet) {
        var firstSet = this.values()
        return firstSet.every(value => {
            return otherSet.has(value)
        })
    }
}

var setA = new mySet();
var setB = new mySet();
setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
setB.add('d')
setB.add('d')
setB.add('d')
setB.add('d')

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());