/*

You need to write a function named publicBusFare. This function will take one parameter, which represents the number of people going on a picnic.

There are buses and microbuses available:

Each bus can carry 50 people.

Each microbus can carry 11 people.

If fewer than 11 people are left, they cannot go by microbus.

The public bus fare is 250 Taka per person.

The function should calculate how many people will have to take the public bus and return the total public bus fare.

Examples:

If 117 people go on a picnic:

2 buses will be needed

1 microbus will be needed

The remaining people will go by public bus

The function should return the total fare for those remaining people.

If 235 people go on a picnic:

4 buses will be needed

3 microbuses will be needed

The remaining people will go by public bus

The function should return the total fare for those remaining people.

*/





// Method 1:--------------------------------------------------

// function publicBusFare(people) {
//     // Validate input: must be a positive number
//     if (typeof people !== "number" || people < 0) {
//         return "Invalid input!";
//     }

//     const busSeatCapacity = 50;     // Each bus can carry 50 people
//     const microSeatCapacity = 11;   // Each microbus can carry 11 people
//     const fare = 250;               // Public bus fare per person

//     // Calculate how many buses are needed
//     const buses = Math.floor(people / busSeatCapacity);
//     const afterBuses = people % busSeatCapacity;
//     console.log(`Buses: ${buses}, Remaining after buses: ${afterBuses}`);

//     // Calculate how many microbuses are needed
//     const microbuses = Math.floor(afterBuses / microSeatCapacity);
//     const afterMicro = afterBuses % microSeatCapacity;
//     console.log(`Microbuses: ${microbuses}, Remaining after microbuses: ${afterMicro}`);

//     // Remaining people must go by public bus
//     const publicPassengers = afterMicro;
//     const totalFare = publicPassengers * fare;
//     console.log(`Public bus passengers: ${publicPassengers}, Total fare: ${totalFare}`);

//     // Final result: total fare
//     return totalFare;
// }

// console.log('Result:', publicBusFare(112));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(117));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(235));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(14));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare('100'));





// Method 2:--------------------------------------------------

// function publicBusFare(people) {
//     // Validate input: must be a positive number
//     if (typeof people !== "number" || people < 0) {
//         return "Invalid input!";
//     }

//     const busCapacity = 50;      // Each bus can carry 50 people
//     const microCapacity = 11;    // Each microbus can carry 11 people
//     const fare = 250;            // Public bus fare per person

//     // Remaining after buses
//     let remaining = people % busCapacity;

//     // Remaining after microbuses
//     remaining = remaining % microCapacity;

//     // Remaining must go on public buses
//     return remaining * fare;
// }

// console.log('Result:', publicBusFare(112));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(117));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(235));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare(14));
// console.log('--------------------------------------');
// console.log('Result:', publicBusFare('100'));





// Method 3:--------------------------------------------------

function publicBusFare(people) {
    // Validate input: must be a positive number
    if (typeof people !== "number" || people < 0) {
        return "Invalid input!";
    }

    // (people % 50) → remaining after buses
    // (remaining % 11) → remaining after microbuses
    // Multiply by 250 to get total fare
    return (people % 50 % 11) * 250;
}

console.log('Result:', publicBusFare(112));
console.log('--------------------------------------');
console.log('Result:', publicBusFare(117));
console.log('--------------------------------------');
console.log('Result:', publicBusFare(235));
console.log('--------------------------------------');
console.log('Result:', publicBusFare(14));
console.log('--------------------------------------');
console.log('Result:', publicBusFare('100'));