function isPalindrome(str: string): boolean {
  const normalized = str.toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}
