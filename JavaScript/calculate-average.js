/*
SOLVED

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

const findAverage = (array) => {
    let result = 0;

    if (Array.isArray(array) && array.length) {
        for (const number of array) {
            result += number
        }

        return result / array.length;
    } else {
        return 0;
    }
}
