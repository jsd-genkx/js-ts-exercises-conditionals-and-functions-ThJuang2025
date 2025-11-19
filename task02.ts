// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = NaN;
// Try changing to "hello", 10, null, NaN
if (typeof Number(userInput) === "number" && !isNaN(Number(userInput)) ) {
    console.log("it's a number");
}
else
    {console.log("***You NOT input number na ka!***");
}