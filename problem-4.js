// Write a function named findingBadData that takes an array of numbers and counts how many elements are less than or equal to 0. If the input is not an array, return an error message.


// A function that counts elements <= 0 in an array

function findingBadData(array) {

    // Validation first
    if (!Array.isArray(array)) {
        // console.log('Not an array...!');
        return 'Please provide an array';
    }

    let count = 0;

    for (const element of array) {
        // console.log('Checking element:', element);
        if (element <= 0) {
            count++;
            // console.log('Bad data found:', count);
        }
    }

    return count;
}

console.log('Final Result:', findingBadData([-4, -9, -5, -33, -55]));
console.log('---------------------------------------');
console.log('Final Result:', findingBadData([3, -1, 0, 7, -5]));
console.log('---------------------------------------');
console.log('Final Result:', findingBadData('array'));