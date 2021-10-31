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
}
