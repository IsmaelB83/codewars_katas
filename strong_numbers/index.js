/* 
Task:
Given a number, Find if it is Strong or not. 

Definition:
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.
*/
function strong(n) {
    let sumFactorials = 0;
    Array.from(String(n), Number).forEach(n => {
        sumFactorials += calculateFactorial(n);
    });
    return sumFactorials === n ? 'STRONG!!!!':'Not Strong !!'
}

function calculateFactorial(n) {
    let factorial = 1;
    for (i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(strong(145));
console.log(strong(146));

module.exports = strong;