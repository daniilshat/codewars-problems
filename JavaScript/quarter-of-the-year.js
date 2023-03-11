/*
SOLVED

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter;
month 6 (June), is part of the second quarter;
and month 11 (November), is part of the fourth quarter.

Constraint:
1 <= month <= 12
 */

const quarterOf = (month) => {
    const firstQ = [1, 2, 3];
    const secondQ = [4, 5, 6];
    const thirdQ = [7, 8, 9];
    const fourthQ = [10, 11, 12];

    if (firstQ.includes(month)) {
        return 1;
    } else if (secondQ.includes(month)) {
        return 2;
    } else if (thirdQ.includes(month)) {
        return 3;
    } else {
        return 4;
    }
}