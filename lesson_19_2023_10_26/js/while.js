// FOR LOOP - we know how many iteration we need to perform

// WHILE — continue while our condition TRUE

// Additional conditioning for the loops:
// BREAK — stop the loop (FOR LOOP or WHILE LOOP)
// CONTINUE — immediately go to the next iteration
//            (without performing oter actions of the loop)
//            (FOR LOOP or WHILE LOOP)

// let answer = prompt("Tell me your lucky number");

// console.log(`answer = ${answer}`);

// while (!answer || isNaN(answer)) {
//   console.log(`answer = ${answer}`);
//   answer = prompt(`I asked for your lucky number`);
// }

// console.log(`Oh, this is your lucky number! ${answer}`);

/** MISSION
 * Ask your user wich animal has a wide mouth?
 * The right answer is frog or fox
 * Continue asking untill the user will give the right answer
 */

// MISSION
// Use counter or numberOfTries and use BREAK to stop the loop,
// when the number of tries has been reached

// Use IF or TERNARY OPERATOR to decline why we have stopped the loop

//MISSION
//The same but remove BREAK and add the condition about the number of tries to the WHILE LOOP condition

// let animal = prompt("Wich animal has a wide mouth?");
// let counter = 3;

// console.log(`animal = ${animal}`);

// while (animal !== "frog" && animal !== "fox" && animal !== "crocodile") {
//   counter = counter -= 1;
//   animal = prompt("No, you wrong. Try one more time");
//   console.log(`animal = ${animal}`);

//   if (counter <= 0) {
//     break;
//   }
// }

// counter <= 0
//   ? console.log(`YOU LOOSE HAHAHAHHA`)
//   : console.log(`Yes, this is the right animal: ${animal}`);

/** MISSION:
 * Go with "WHILE LOOP" over the array "numbers".
 *
 * If we encounter 0, exit the LOOP.
 *
 * Check if the current number is even. If it is, do nothing,
 * else take it add 1, divide by 2 - and put the result instead of the old number into the array.
 *
 * Use "break" and "continue"
 *
 */
const numbers = [67, -5, 1, 2, 4, 66, 77, 0, 123];
console.log(`Old numbers: ${numbers}`);
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === 0) break;
  if (numbers[i] % 2 === 0) {
    i += 1;
    continue;
  } else {
    numbers[i] = (numbers[i] + 1) % 2;
    i += 1;
  }
}

console.log(`New numbers:\n`, numbers);
