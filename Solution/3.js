
let age = 12;
let student = true;

(age < 10) ? console.log('Free')
    : (student) ? console.log('50% discount')
        : (age >= 60) ? console.log('15% discount')
            : console.log('No discount!')
