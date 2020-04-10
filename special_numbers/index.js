/* 
Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .
*/
function specialNumber(n){
    
    return Array.from(String(n), Number)
        .every(d => [0, 1, 2, 3, 4, 5].includes(d)) ? 'Special!!' : 'NOT!!';
}

module.exports = specialNumber;