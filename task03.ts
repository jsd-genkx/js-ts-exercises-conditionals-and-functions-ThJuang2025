// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";

if (typeof password === 'string') {
    if (password.length < 6)
        {
        console.log(`Your passowrd 's lengh: ${password.length} is Too short.`);
        }
    else if (password.length >= 6 && password.length <= 10 )
        {
        console.log(`Your passowrd 's lengh: ${password.length} is Moderate.`);
        }
    else if (password.length > 11)
        {
          console.log(`Your passowrd 's lengh: ${password.length} is Strong.`);
        }
else if (typeof password === 'number')
        {
         console.log("Please input strong password. It should more than 11 characters.");
        }
}