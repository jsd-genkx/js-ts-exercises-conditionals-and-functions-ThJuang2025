// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"   20NOV25: แก้ Condition จาก 11 เป็น 10

const password = "pass1234";
const len = password.length;

if (typeof password === 'string') {
    if (len < 6)
        {
        console.log(`Your passowrd 's lengh: ${len} is Too short.`);
        }
    else if (len >= 6 && len <= 10 )
        {
        console.log(`Your passowrd 's lengh: ${len} is Moderate.`);
        }
    else if (len > 10)
        {
          console.log(`Your passowrd 's lengh: ${len} is Strong.`);
        }
else if (typeof password === 'number')
        {
         console.log("Please input strong password. It should more than 11 characters.");
        }
}

// ref. from 03_Chalisa(Mae)
// const password = "pass1234567";
// const len = len;
// if (len > 10) {
//     console.log("This password is strong.");
// } else if (len <= 10 && len > 6){
//     console.log("This password is moderate.");
// } else {
//     console.log("This password is too short.");
// }

// ref. from  12_Na-eem Use Comment to give test example
// Password < 6 chars → "Too short" (pass)
// 6–10 chars → "Moderate" (pass123)
// 11+ chars → "Strong" (pass1234567)
// const password = "pass12345678";
// const len = password.length;
// if ( len < 6 ) {
//     console.log("Too short")}
//     else if ( len <= 10 ){
//         console.log("Moderate")}
//         else {
//             console.log("Strong")
//         }