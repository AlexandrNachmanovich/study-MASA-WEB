// let n1 = 455,
//   n2 = 4;

// n1 = n1 * 3;
// n1 = n1 ** 2;
// n1 = n1 + 1;

// /* short arithmetic notation */
// n2 += 10; // the same as n2 = n2 + 10;

// n2 = n2 * 3;
// n2 *= 3;

// n2++; // the same as n2 = n2 + 1; or n2 += 1;

// n2 = n2 - 1;
// n2 -= 1;
// n2--;

// WE NEED "FOR" loop when we should perform some actions the know amount of times

// i — iterator
// for (let i=0 — first part of the head, start counting from this value)
// for (let i=0; i<=9; — second part of the head, while this expression is "true" – we continue)
// for (let i=0; i<=9, i+=1) – third part of the head, change the counter

// for (let i = 1; i <= 5; i += 1) {
//   console.log("Zaichik vyshel pogulyat");
// }

// for (let i = 1; i <= 100; i += 1) {
//   document.write(`I will tell no lies<br>`);
// }

//we will go from 33 to -33 and show each 3rd number
// for (let i = 33; i >= -33; i -= 3) {
//   console.log(`i = ${i}`);
// }

/** MISSION: show each 5th number, starting from -13 until 42 */
// for (let i = -13; i <= 42; i += 5) {
//   console.log(`i = ${i}`);
// }

// let str1 = "synchrophasotron";

// for (let i = 0; i < str1.length; i += 1) {
//   console.log(str1[i].toLowerCase() + " " + str1[i].toUpperCase());
// }

// for (let i = str1.length; i > 0; i -= 1) {
//   console.log(str1[i - 1]);
// }

// ================================================================
// let str2 = "strawberry";

// for (let i = 0; i < str2.length; i += 2) {
//   console.log(str2[i] + " " + str2[str2.length - 1 - i]);
// }

// ================================================================

//  We are going to find the sum of all the numbers from 6 up to 17
// let sum = 0;
// for (let i = 6; i <= 17; i += 1) {
//   sum += i;
// }
// console.log(sum);

// =================================================================

// MISSION: 1. find the product (result of multiplication) of all
//                 the numbers, starting from 11 to 20

// let product = 1;
// for (let i = 11; i <= 20; i += 1) {
//   product *= i;
// }
// console.log(`The product of all the numbers from 11 to 20 is ${product}`);

// let newStr = "";
// for (let i = str1.length - 1; i >= 0; i -= 1) {
//   newSrt += str1[i];
// }

// =================================================================

// MISSION. from -5 to 5 (not sure that we need a LOOP for this)

// let product = 1;
// for (let i = -5; i <= 5; i += 1) {
//   if (i) product *= i;
// }
// console.log(`The product of all the numbers from -5 to 5 is ${product}`);

// =================================================================

str3 = "It is gReat That cOWs dO not fly";
str3 = str3.toLowerCase();
newStr3 = "";
let counter = 0;
for (let i = 0; i < str3.length; i += 1) {
  if (str3[i] === "i" || str3[i] === "o" || str3[i] === "t") {
    newStr3 += str3[i];
    counter += 1;
  }
}
console.log(newStr3 + " - " + counter + " letters");

// ================================================================
