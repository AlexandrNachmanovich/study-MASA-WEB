let n1 = 455,
  n2 = 4;

n1 = n1 * 3;
n1 = n1 ** 2;
n1 = n1 + 1;

/* short arithmetic notation */
n2 += 10; // the same as n2 = n2 + 10;

n2 = n2 * 3;
n2 *= 3;

n2++; // the same as n2 = n2 + 1; or n2 += 1;

n2 = n2 - 1;
n2 -= 1;
n2--;

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
for (let i = -13; i <= 42; i += 5) {
  console.log(`i = ${i}`);
}
