// Palidrome definition:
// the empty string is a palindrome;
// a string constituted only by a single character is a palindrome;
// a string c s d is a palindrome, if s is a palindrome and c is a character equal to d;
// nothing else is a palindrome.
// RED, GREEN, REFACTOR

const isPalindrome = (test) => {
  for(let i = 0; i < Math.floor(test.length / 2); i++) {
    if (test[i] !== test[test.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
