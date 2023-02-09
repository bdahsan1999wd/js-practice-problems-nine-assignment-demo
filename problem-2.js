/* ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */

/* ------------------------------------------- */

// function isJavaScriptFile(fileName){
//     // validation
//     if(typeof fileName !== 'string' || fileName.length === 0){
//         return 'Please provide a valid input'
//     }
//     if(fileName.endsWith('.js')){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
console.log(isJavaScriptFile(''));

/* ------------------other way----------------- */

// function isJavaScriptFile(fileName){
//     // validation
//     if(typeof fileName !== 'string' || fileName.length === 0){
//         return 'Please provide a valid input'
//     }
//     return fileName.endsWith('.js');
// }
// console.log(isJavaScriptFile('index.js'));

/* -----------------------other way----------------------*/

// function isJavaScriptFile(fileName){
//     if(fileName[fileName.length - 1] =='s'){
//         if(fileName[fileName.length - 2] == 'j'){
//             if(fileName[fileName.length-3] == '.')
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isJavaScriptFile('index.js'));