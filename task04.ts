// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

let num = 0;


const fizzBuzz = (number:number) => {
if(Number === 0){
  console.log("Zero is not acceptable.")
} else if ((number % 3 === 0) && (number % 5 === 0)) {
  console.log(`Your number:${number} is "FizzBuzz".`);
} else if ((number % 3 === 0) ) {
    console.log(`Your number:${number} is "Fizz".`);
} else if ((number % 5 === 0) ) {
    console.log(`Your number:${number} is "Buzz".`);
} else {
  console.log("Not divisible by 3 or 5");
}
}
fizzBuzz(15)

const fizzBuzz2 = fizzBuzz
fizzBuzz2(12)

fizzBuzz(1)
fizzBuzz(2)
fizzBuzz(3)
fizzBuzz(4)
fizzBuzz(5)
fizzBuzz(6)
fizzBuzz(7)
fizzBuzz(8)
fizzBuzz(9)
fizzBuzz(10)
fizzBuzz2(15)



