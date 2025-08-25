/*

You need to write a function that takes a single parameter named fileName (a string representing a file name).
The function should validate the input to ensure it is a non-empty string.
If the input is not valid, return the message: 'Please provide a valid input'.

*/

function validateFileName(fileName) {

    // Validation: check if input is a string and not empty
    if (typeof fileName !== 'string' || fileName.length === 0) {
        return 'Please provide a valid input';
    }

    return 'Valid input';
}

console.log(validateFileName('index.js'));
console.log(validateFileName(''));
console.log(validateFileName(123));
console.log(validateFileName(null));
console.log(validateFileName('Hello World'));