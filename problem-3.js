/* ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। */

/* ---------------------------------------------------------- */

// function oilPrice (dieselQuantity, petrolQuantity, octaneQuantity){
//     if(typeof dieselQuantity !== 'number'){
//         return 'please provide a valid input'
//     }
//     const dieselPrice = 114;
//     const petrolPrice = 130;
//     const octanePrice = 135;

//     let totalDiesel = dieselQuantity * dieselPrice;
//     let totalPetrol = petrolQuantity * petrolPrice;
//     let totalOctane = octaneQuantity * octanePrice;

//     let totalPrice = totalDiesel+totalPetrol+totalOctane;
//     return totalPrice;
//     }
    console.log(oilPrice(1, 1, 1));