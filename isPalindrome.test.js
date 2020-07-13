const isPalindrome = require('./isPalindrome');

it('the empty string is a palindrome',
  () => {
    // AAA pattern
    // Arrange, Act, Assert

    const toTest = '';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('false for "ab"',
  () => {
    const toTest= 'ab';
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('a string constituted only by a single character is a palindrome',
  () => {
    const toTest = 'z';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);

  }
);

it('"aa" is a palindrome',
  () => {
    const toTest = 'aa';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"dad" is a palindrome', 
  () => {
    const toTest = 'dad';
    const result = isPalindrome(toTest);

    expect(result).toBe(true);
  });

it('"sad" is not a palindrome',
  () => {
    const toTest = 'sad';
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

it('"drad" is not a palindrome',
  () => {
    const toTest = 'drad';

    debugger;
    const result = isPalindrome(toTest);

    expect(result).toBe(false);
  }
);

// 'dad'
// 'sad'
// 'drad'