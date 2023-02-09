/* ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে। */

// 1rad × 180/π = 57.296°

/* -----------------radian to degree-------------------- */

// function radianToDegree(radian){
//     // validation
//     if(typeof radian !== 'number'){
//         return 'Provide a valid number'
//     }
//     const PI = 3.14159265359;

//     // const degree = (radian * (180/PI)).toFixed(2);
//     // console.log(degree);

//     const degree = parseFloat((radian * (180/PI)).toFixed(2));
//     console.log(degree);
//     return degree;
// }
// let result = radianToDegree(10);
// console.log(result);

/* ---------------other way----------------- */

// function radianToDegree(radian){
//     // validation
//     if(typeof radian !== 'number'){
//         return 'Provide a valid number'
//     }
//     let degree = radian * 57.2957795;
//     degree = parseFloat(degree.toFixed(2));
//     // console.log(degree);
//     return degree;
// }
console.log(radianToDegree(10));