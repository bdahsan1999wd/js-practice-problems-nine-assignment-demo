// Write a function named mindGame that takes a number as input. Multiply the number by 3, add 10, divide the result by 2, and then subtract 5. Return the final result. Also validate the input to ensure it is a number.


// A function that takes a number, performs some math operations, and returns the result.

function mindGame(number) {

    // validation first
    if (typeof number !== 'number') {
        return 'Please enter a number';
    }

    // Multiply by 3
    const multiplyNumber = number * 3;
    console.log('multiplyNumber:', multiplyNumber);

    // Add 10
    const sum = multiplyNumber + 10;
    console.log('sum:', sum);

    // Divide by 2
    const division = sum / 2;
    console.log('division:', division);

    // Subtract 5
    const subtract = division - 5;
    console.log('subtract:', subtract);

    return subtract;
}

console.log("Final Result:", mindGame(50));
console.log('-----------------------');
console.log("Final Result:", mindGame('50'));