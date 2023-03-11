/*
SOLVED

Write a function that checks if a given string (case-insensitive) is a palindrome.
 */

const isPalindrome = (x) => {
    let reverseX = [...x.toLowerCase()].reverse().join('');

    if (x.toLowerCase() === reverseX) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('Abba'));