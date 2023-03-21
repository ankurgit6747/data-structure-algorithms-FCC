var lengthOfLongestSubstring = function (s) {
  let arrStr = [];
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[i+1]) {
      if (!arrStr.includes(s[i])) {
        arrStr.push(s[i])
      } 
    } else {
      arrStr.
    }
  }
  return arrStr.length
};

console.log(lengthOfLongestSubstring("pwwkew"));