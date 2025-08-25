/*
The function name should be oilPrice. This function will take three parameters: the quantity of diesel, petrol, and octane in liters.

Price per liter of Diesel: 114

Price per liter of Petrol: 130

Price per liter of Octane: 135

The function should calculate the total cost for the given quantities of diesel, petrol, and octane, and return the total amount. Also, validate the input to ensure that all quantities are numbers.
*/


function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

    // Validate all inputs
    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Please provide valid numbers only';
    }

    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalDiesel = dieselQuantity * dieselPrice;
    const totalPetrol = petrolQuantity * petrolPrice;
    const totalOctane = octaneQuantity * octanePrice;

    const totalPrice = totalDiesel + totalPetrol + totalOctane;
    return totalPrice;
}

console.log(oilPrice(1, 1, 1));
console.log(oilPrice(2, 3, 1));
console.log(oilPrice('2', 3, 1));