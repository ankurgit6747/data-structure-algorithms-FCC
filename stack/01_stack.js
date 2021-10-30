console.log("stack.js");

var letter = [];
var word = "racecar";
var rword = "";

for (let i = 0; i < word.length; i++) {
  letter.push(word[i]);
}

for (let j = 0; j < word.length; j++) {
  rword += letter.pop(); // pop will remove element form end
}

if (word === rword) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
