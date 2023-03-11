/*
SOLVED

When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"
 */

const position = (letter) => {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'];

    return 'Position of alphabet: ' + (abc.indexOf(letter.toLowerCase()) + 1);
}
