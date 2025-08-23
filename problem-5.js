// Write a function named gemsToDiamond that converts 3 types of gems to diamonds based on given rates. If total diamonds ≥ 2000, subtract 2000 and return the rest. Otherwise, return total diamonds. Also validate the input.


// A function that converts gems to diamonds based on given rates

function gemsToDiamond(num1, num2, num3) {

    // Input validation first
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return 'Please provide numbers only';
    }

    // Convert gems to diamonds
    const totalDiamonds = (num1 * 20) + (num2 * 40) + (num3 * 60);

    // If total diamonds >= 2000, subtract(-) 2000
    if (totalDiamonds >= 2000) {
        return totalDiamonds - 2000;
    }
    else {
        return totalDiamonds;
    }
}

console.log('Final Result:', gemsToDiamond(100, 5, 1));
console.log('-----------------------------');
console.log('Final Result:', gemsToDiamond(10, 5, 1));
console.log('-----------------------------');
console.log('Final Result:', gemsToDiamond('10', 5, 1));