function isPalindrome(str: string): boolean {
  const normalized = str.toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}

function isPalindromeV2(str: string): boolean {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
