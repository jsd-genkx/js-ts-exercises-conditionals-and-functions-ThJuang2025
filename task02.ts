// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)
// Try changing to "hello", 10, null, NaN
//  ------------------------ Genmate F' Code ------------------------
// const userInput = NaN;
// if (typeof Number(userInput) === "number" && !isNaN(Number(userInput)) ) {
//     console.log("it's a number");
// }
// else
//     {console.log("***You NOT input number na ka!***");
// }
// //  ------------------------ Genmate F' Code ------------------------
// <<< K.ITT's SOLUTION >>>
// Test: 4 Value "hello", 10, null, NaN
const userInput = NaN;
if (typeof userInput === 'number' && !isNaN(userInput)){
    console.log(`True :${userInput} <- YES! This is Number`);
}else{
    console.log(`False! You have not entered number naja, your input is a ${typeof(userInput)} : ${userInput} `);
}