/**
 * Requirements:
 * ================================
 * - Output the number of words that are Palindromes in the "words" string array given as the only argument.
 *      Palindromes are words that are the same no matter if one starts reading from the front or the back,
 *      e.g. "Anna" or "Ebbe" or "Tacocat": https://en.wikipedia.org/wiki/Palindrome
 *
 * - The return value of this function is a number.
 *
 * - Capitalization within the words does not matter, so AnnA, aNnA or annA are all counted as Palindromes.
 *
 * - The input array can be empty, but it is always defined.
 *
 * - Each entry in the words array is either an empty line, or one word built from the latin letters from A-Z and a-z - it does not contain any
 *      spaces or special characters. Empty lines are not counted as palindromes.
 *
 * - If a word is in the input array twice it is only counted once as a palindrome, even if the capitalization of the two
 *      entries is different (so ['Anna', 'ANNA', 'aNNa'] is still only 1 palindrome)
 *
 * - You can implement additional helper functions or use additional npm packages if you want - but the "app.js" must not be changed.
 */
function findPalindromes(words) {
  let count = 0;
  let reversedWord = words
    .toLowerCase()
    .split("")
    .reverse("")
    .join("")
    .replace(/[^a-zA-Z]/gi, "");
  if (
    words.toLowerCase().replace(/[^a-zA-Z]/gi, "") ===
    reversedWord.replace(/[^a-zA-Z]/gi, "")
  ) {
    count++;
    console.log("palindromes");
  } else {
    console.log("no palindromes word in the list");
  }
  return count;
  //throw new Error("Please implement this function");
}

module.exports = findPalindromes;
