/* 
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .
*/
function balancedNum(number) {

    const arrayDigits = Array.from(String(number), Number);
    const length = arrayDigits.length;
    let leftSide = 0, rightSide = 0;

    // Odd / Even number of digits    
    if (length % 2) {
        leftSide = sumDigits(arrayDigits, 0, Math.floor(length / 2));
        rightSide = sumDigits(arrayDigits, Math.ceil(length / 2), length);
    } else {
        leftSide = sumDigits(arrayDigits, 0, length / 2 - 1);
        rightSide = sumDigits(arrayDigits, length / 2 + 1, length);
    }
    return leftSide === rightSide ? 'Balanced' : 'Not Balanced';
}

function sumDigits(digits, start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += digits[i];
    }
    return sum;
}

console.log(balancedNum(12345));
console.log(balancedNum(123456));

module.exports = balancedNum;