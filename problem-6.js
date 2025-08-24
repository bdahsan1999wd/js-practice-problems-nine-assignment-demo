// Write a function named radianToDegree that takes radian (radian) as a parameter. Then convert it to degree (degree) and return the result. While returning, make sure the number is fixed to two decimal places. Also validate the input so that only numbers are accepted.


/* -----------------Method 1: Using pre-calculated multiplier 57.2957795-------------------- */

// function radianToDegreeMultiplier(radian) {

//     // Input validation first: check if input is a number
//     if (typeof radian !== 'number') {
//         return 'Please provide a valid number';
//     }

//     console.log('Input radian:', radian);

//     /* Formula explanation:

//        Degree = Radian × (180 / π)
//        π ≈ 3.141592653589793
//        180 / π ≈ 57.2957795
//        So, Degree = Radian × 57.2957795
//     */

//     let rawDegree = radian * 57.2957795;
//     console.log('Degree before rounding:', rawDegree);

//     // Round to 2 decimals
//     let degree = parseFloat(rawDegree.toFixed(2));
//     console.log('Degree after rounding to 2 decimals:', degree);

//     return degree;
// }

// console.log('Final Result:', radianToDegreeMultiplier(10));
// console.log('-----------------------------------');
// console.log('Final Result:', radianToDegreeMultiplier(25));
// console.log('-----------------------------------');
// console.log('Final Result:', radianToDegreeMultiplier('50'));



/* -----------------Method 2: Using Math.PI-------------------- */
function radianToDegree(radian) {

    // Input validation first: check if input is a number
    if (typeof radian !== 'number') {
        return 'Please provide a valid number';
    }

    console.log('Input radian:', radian);

    /* Formula explanation:

       Degree = Radian × (180 / π)
    */

    // Apply the formula
    const rawDegree = radian * (180 / Math.PI);
    console.log('After applying formula before rounding:', rawDegree);

    // Round to 2 decimal
    const degree = parseFloat(rawDegree.toFixed(2));
    console.log('After rounding to 2 decimals:', degree);

    return degree;
}

console.log('Final Result:', radianToDegree(10));
console.log('-----------------------------------');
console.log('Final Result:', radianToDegree(25));
console.log('-----------------------------------');
console.log('Final Result:', radianToDegree('50'));