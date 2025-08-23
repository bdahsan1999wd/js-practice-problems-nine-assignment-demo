// Write a function named isLGSeven that takes a number as input. If the number minus 7 is less than 7, return the difference. Otherwise, return double the number. Also validate the input to ensure it is a number.


// A function that checks a number against 7 and returns either the difference or double of the number

function isLGSeven(number) {

    // Validation first
    if (typeof number !== 'number') {
        return 'Please provide a number';
    }

    // Find difference
    const difference = number - 7;
    console.log('Difference:', difference);

    // Check condition
    if (difference < 7) {
        console.log('Difference is less than 7 >', difference);
        return difference;
    }
    else {
        const doubleNumber = number * 2;
        console.log('Doubling the number:', doubleNumber);
        return doubleNumber;
    }
}

console.log("Final Result:", isLGSeven(15));
console.log('---------------------------------------');
console.log("Final Result:", isLGSeven(10));
console.log('---------------------------------------');
console.log("Final Result:", isLGSeven('15'));