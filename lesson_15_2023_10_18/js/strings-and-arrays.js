/** function toUpperCase() and toLowerCase() */

// var city = "Beer-Sheva";
// var cityLower = city.toLowerCase();
// var cityUpper = city.toUpperCase();

// String() - casting (changing Data type) to string

/** trim(), trimStart(), trimEnd() - remove all the white spaces
 * from the ends of the string
 */
// let str1 = "    Happy and Sweet New Year!   ";
// console.log(`A${str1}B`);

//str1.trim() //- returns new value, but does not change str1
// string (as a primitive value) is immutable, it is only replacable

// let num1 = 345;
// num1 = num1 + 10;

// str1 = str1.trim();
// console.log(`A${str1}B`);

/*
    0  1  2  3  4  5  6  7  8  9  10
    e  n  c  y  c  l  o  p  e  d  y

*/

// let str2 = "encyclopedy";

// console.log(str2[5]);
// console.log(str2[0]);

// let str3 = "Great day";

/** MISSION: show on the console together the last and the 1st
 * characters of str3
 */

// console.log(`${str3[8]}${str3[0]}`);
// console.log(str3[8] + str3[0]);

// console.log(`str2 length: ${str2.length}`);
// console.log(`str3 length: ${str3.length}`);

// let str4 = "Broken crayons still color";
// console.log(`The letter before the last: ${str4[str4.length - 2]}`);

/** MISSION:
 * show together the last character,
 * the second character before the end
 * and the 7th character (7th place, but it's index is 6)
 */

// console.log(
//   "*" + str4[str4.length - 1] + str4[str4.length - 3] + str4[6] + "*"
// );

// str2[4] = "!"; // It does not work! String is IMMUTABLE!!!!

// console.log(str2);

// let str5 = "encyclopedy",
//   str6 = "book",
//   str7 = "postcard",
//   str8 = "";

// console.log(str5.padStart(15, "*"));
// console.log(str6.padStart(15, "*"));
// console.log(str7.padStart(15, "*"));
// console.log(str8.padStart(15, "*"));

/* teudat zehut - 945567831, 004561230 */

/** MISSION: create function that gets 2 string arguments:
 * name and teudat zehut.
 * This function should show on the console or in the document
 * the name padded in the end with " %" up to 16 characters,
 * and tz padded with "0" up to 9 characters,
 * for example:
 * 'Yocheved % % % %007777775'
 *
 * Run this function at least twice with the next input:
 * showNameAndTz('Yocheved','7777775')
 * showNameAndTz('Moshe','887777775')
 *  */

// function showNameAndTz(firstName, tz) {
//   document.write(firstName.padEnd(16, " %") + tz.padStart(9, "0"));
// }

// showNameAndTz("Yocheved", "7777775");
// showNameAndTz("Moshe", "887777775");

// let str9 = "Ann",
//   tz1 = "5555555";
// showNameAndTz(str9, tz1);

/*************************
 *
 * ARRAYS - ordered list of values
 *
 *
 */

/* 0          1          2       3          4          5   */
// const foods = [
//   "falafel",
//   "pelmeni",
//   "shashlik",
//   "risotto",
//   "lasagnia",
//   "dim-sam",
// ];

// console.log(`foods: ${foods}`);

// console.log("foods[0]=" + foods[0]);
// console.log("foods[4]=" + foods[4]);

// console.log(`foods.length = ${foods.length}`);

// console.log(`foods' last element is ${foods[foods.length - 1]}`);

// console.log(`Array data type is ${typeof foods}`);

// foods[2] = "mafrum";

// console.log(`foods: ${foods}`);

// As array is not a PRIMITIVE data type, but a complex DATA TYPE,
// so "foods" is not a simple variable, but a POINTER - a REFERENCE
// to the start of the array in the memory.

// Array is mutable - we exchanged "shashlik" by "mafrum".
// But we declared it as a constant, thus
// we cannot change the POINTER (the REFERENCE)

// foods = ['borsch','kharcho','schi'] - ERROR - assignment to constant variable

/**
 * push() - adds element to the end of array,
 * pop() - removes the last element and returns it,
 * shift() - removes the first element and returns it,
 * unshift() - adds element to the beginning of array
 *
 */

// foods.push("buterbrod");
// foods.push("hot-dog");

// let thisWasTheLastElement = foods.pop(); // removed 'hot-dog' and put it into
// thisWasTheLastElement

// foods.pop(); // removed 'buterbrod'

// let thisWasTheFirstElement = foods.shift(); // removed 'falafel' and put it into
// thisWasTheFirstElement

// foods.shift(); // removed 'pelmeni'

// In the console:

// foods
// (4) ['mafrum', 'risotto', 'lasagnia', 'dim-sam']
// foods.length
// 4
// foods[5]
// undefined

// foods.unshift("pita");
// foods.unshift("sausage");
// foods.unshift("fish and chips");

// const nums = [4.5, 0, 0.0001, -123, 3.14159, -0.005];

// nums.push(4555);
// nums.unshift(3.33);

// array could consist of any combination of data types
// const anyType = [
//   "Beer-Sheva",
//   455,
//   null,
//   undefined,
//   false,
//   pairs,
//   ["a", "b"],
//   { width: 4, color: "green" },
// ];

// console.log(str5.repeat(10));

// document.write("I will never tell lies<br>".repeat(100));

// =============================================================
// Array initialization
// const ar1 = [454, "lalal", true];
// const ar2 = [167, 845, 0.1, "cat", "dog"];
// Almost not used
// const ar3 = new Array(10);

// const ar4 = new Array(8).fill("**");

// =============================================================

// ================================================================
/** MISSION: use array "pairs" and create the output like:
 *
 * ORDER:
 * beer - 5
 * tea - 6
 * vine - ...
 *
 */
// const pairs = ["beer", 5, "tea", 6, "vine", 10, "whiskey", 1, "coffee", 11];
// Option 1:
// newStr = `ORDER:\n`;

// for (let i = 0; i < pairs.length; i += 2) {
//   newStr += pairs[i] + " - " + pairs[i + 1] + "\n";
// }

// console.log(newStr);

// Option2:
// console.log("ORDER:");

// for (let i = 0; i < pairs.length; i += 2) {
//   console.log(pairs[i] + " - " + pairs[i + 1]);
// }
// ================================================================
/** Show foods on the screen as the numbered list:
 *
 *   0. falafel, 1. pelmeni, 2. shashlik ....
 *
 *   Better it be:
 *
 *   1. falafel, 2. pelmeni, 3. shashlik ....
 *
 *
 */
// const foods = [
//   "falafel",
//   "pelmeni",
//   "shashlik",
//   "risotto",
//   "lasagnia",
//   "dim-sam",
// ];

// let newStr = "";
// for (let i = 0; i < foods.length; i += 1) {
//   if (i < foods.length - 1) {
//     newStr += i + 1 + ". " + foods[i] + ", ";
//   } else {
//     newStr += i + 1 + ". " + foods[i];
//   }
// }
// console.log(newStr);

/**
 * MISSION: take one of the arrays - "foods" or "drinks", go over it,
 * and create the next output:
 *
 * milk with falfel
 * whisky with pelmeni
 * beer with shashlik
 * ....
 */

// const drinks = ["milk", "whiskey", "beer", "cola", "tea", "coffee"];
// newStr = "";
// for (let i = 0; i < drinks.length; i += 1) {
//   newStr += `${drinks[i]} with ${foods[i]}\n<br>`;
// }
// document.write(newStr);

// ===============================================================
/** MISSION: go over "drinks" and put only the drinks at the odd places 
 * (human point of view - indexes 0, 2, 4)
   into the new array oddDrinks
*/
// const drinks = ["milk", "whiskey", "beer", "cola", "tea", "coffee"];
// const oddDrinks = [];
// for (let i = 0; i < drinks.length; i += 2) {
//   oddDrinks.push(drinks[i]);
//   drinks[i] = drinks[i].toUpperCase();
// }
// console.log(oddDrinks);

//  ===============================================================
