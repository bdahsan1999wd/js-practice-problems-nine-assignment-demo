// Write a function named evenOdd that takes a string as input and checks whether the length of the string is even or odd. Return 'even' if the length is even and 'odd' if the length is odd. Also validate the input to ensure it is a string.


// A function that checks if the length of a string is even or odd

function evenOdd(string) {

    // Validation first
    if (typeof string !== 'string') {
        return 'Please provide a string';
    }

    // Find length
    let length = string.length;
    console.log('string length:', length);

    // Check even or odd
    if (length % 2 === 0) {
        // console.log('Length is even');
        return 'even';
    }
    else {
        // console.log('Length is odd');
        return 'odd';
    }
}

console.log("Final Result:", evenOdd('Batch9'));
console.log('---------------------------');
console.log("Final Result:", evenOdd('Batch10'));
console.log('---------------------------');
console.log("Final Result:", evenOdd(123));