var isValid = function (s) {
  let stack = [];
  let param = "() [] {}";
  let i = 0;

  while(i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    console.log("open", open, close)

    let combineParam = open + close;

    if(param.includes(combineParam)) {
      stack.pop()
      stack.pop()
    }
  }

  return stack.length === 0;

};

console.log(isValid("()[]{}"));
