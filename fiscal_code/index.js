/* 
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale).

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Notes:

The date format of the Date of Birth (dob) is: d/m/Y for example 25/12/2008.
*/
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

const isConsonant = letter => !['A','E','I','O','U'].includes(letter.toUpperCase());
const isVowel = letter => ['A','E','I','O','U'].includes(letter.toUpperCase());

function fiscalCode(person) {
    let code = '';
    code += treatSurname(person.surname.toUpperCase());
    code += treatName(person.name.toUpperCase());
    code += treatDate(person.dob, person.gender);
    return code;
}

function treatSurname(surname) {  
    consonants = surname.split('').filter(isConsonant).join('');
    vowels = surname.split('').filter(isVowel).join('');
    const code = `${consonants}${vowels}XXX`;
    return code.substring(0,3);
}

function treatName(name) {  
    consonants = name.split('').filter(isConsonant).join('');
    vowels = name.split('').filter(isVowel).join('');
        
    if (consonants.length === 3) return consonants;
    if (consonants.length > 3) return `${consonants[0]}${consonants[2]}${consonants[3]}`;

    const code = `${consonants}${vowels}XXX`;
    return code.substring(0,3);
}

function treatDate(birthdate, gender) {  
    const date = birthdate.split('/');
    const year = date[2].substring(date[2].length-2,date[2].length);
    const letter = months[parseInt(date[1])];
    switch (gender) {
        case 'M':            
            return `${year}${letter}${date[0].length < 2?'0'+date[0]:date[0]}`;
        default:
            return `${year}${letter}${parseInt(date[0])+40}`;
    }
}

console.log(fiscalCode({ name: "Brendan", surname: "Chein", gender: "M", dob: "1/12/1961" }));

module.exports = fiscalCode;