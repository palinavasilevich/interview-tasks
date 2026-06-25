function isValidBrackets(str) {
  if (str.length === 0) return true;

  const OPEN_BRACKETS = new Set(["(", "{", "[", "<"]);
  const MATCHING = { ")": "(", "}": "{", "]": "[", ">": "<" };

  const stack = [];

  for (const char of str) {
    if (OPEN_BRACKETS.has(char)) {
      stack.push(char);
    } else if (char in MATCHING) {
      if (stack.at(-1) !== MATCHING[char]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets("()(()())")); // true
console.log(isValidBrackets("(([]{}[<>[{}]]))")); // true
console.log(isValidBrackets("((())")); // false
console.log(isValidBrackets("()))")); // false
console.log(isValidBrackets("[(])")); // false
