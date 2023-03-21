var mergeTwoLists = function (list1, list2) {
  let sortArr = []
  for(let i=0 ; i<list2.length ; i++) {
    sortArr.push(list2[i])
  }
  for (let i = 0; i < list1.length; i++) {
    sortArr.push(list1[i])
  }
  return sortArr.sort();
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))