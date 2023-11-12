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
// (4) ['mafrum', 'risotto', 'lasagnia', 'dim-sam']
// foods.length
// 4
// foods[5]
// undefined

// foods.unshift("pita");
// foods.unshift("sausage");
// foods.unshift("fish and chips");

// const nums = [4.5, 0, 0.0001, -123, 3.14159, -0.0006];

// nums.push(4555);
// nums.unshift(3.33);

// const pairs = ["beer", 5, "tea", 6, "vine", 10, "wiski", 1, "coffee", 11];

// array could consist of any compination of data types

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

/** MISSION: write instead Harry Potter 100 times using repeat()
 * "I will never tell lies"
 */

/* console.log("I will never tell lies".repeat(100))

let str10 = "I will never tell lies";

console.log((str10+"\n").repeat(100))

document.write((str10+'<br>').repeat(100)) */

// console.log(anyType[0].repeat(5));

/********
 * Array initialization:
 *
 */

// const ar1 = [454, "lalal", true];

// const ar2 = new Array(167, 845, 0.1, "cat", "dog");
// Almoust not used

// const ar3 = new Array(10);

// const ar4 = new Array(8).fill("**");

// ar3[4] = "cow";

/********************
 * array.includes()
 */

// const ar = ["Beer-Sheva", "Tel-Aviv", "Eilat", "Jerusalem"];

// if (ar.includes("Ashdod")) {
//   console.log("It includes Ashdod");
// } else {
//   console.log(`It doesn't include Ashdod`);
// }

/****************************************************************
 *
 * string.split(' ')
 * array.join('%%')
 *
 */

// let str33 = `When arabs will put down the arms there will be no war when iraelis will put down the arms there will be no Israel state`;

// const ar33 = str33.split(" ");

// /*let str2 = 'encyclopedy';*/

// const ar34 = str2.split("");

// let str34 = ar33.join("🙃");

/* let str4 = 'Broken crayons still color'; */
/** MISSION:
 * Take str4, split it into words, and join again with a new delimeter,like
 * 'Broken***crayons***still ***color'
 *
 * Use split() and join() and try to do it in one line
 */

// console.log(str4.split(" ").join("***"));

/** Problem: create a string of all the inputs with commas between */

/* const ar35 = [];

while(true) {

    let inp = prompt('Enter smth');

    if (inp === 'stop') break;

    ar35.push(inp);

}


let str35 = ar35.join(', '); */
let str2 = "encyclopedy";
let ch = "e";
let lastIndex = str2.indexOf(ch);

console.log(str2.indexOf(ch)); // 0

lastIndex = str2.indexOf(ch, lastIndex + 1); // starting for 2 = 4
lastIndex = str2.indexOf(ch, lastIndex + 1); // starting from 5 = -1

const cities = [
  "Beer-Sheva",
  "Holon",
  "Bat-Yam",
  "Holon",
  "Holon",
  "Beer-Sheva",
  "Jerusalem",
  "Holon",
];

// our goal is to find all the indexes of 'Holon', using indexO()

lastIndex = 0;
let city = "Holon";
const HolonIndexes = [];

while (true) {
  lastIndex = cities.indexOf(city, lastIndex ? lastIndex + 1 : 0);
  if (lastIndex === -1) {
    break;
  }
  HolonIndexes.push(lastIndex);
}

let str40 = "Phillips likes phylosophy";

// MISSION :
// 1. Find the first occurence of 'll' (not using the 2nd argument)
// 2. Find the first occurence of 'phy' and after that the second,
//    and after that show that there is no 3rd occurence of 'phy'

console.log(str40);
console.log(`The first occurence of 'll' is ${str40.indexOf("ll")}`);
lastIndex = str40.indexOf("phy");
console.log(`The first occurence of 'phy' is ${lastIndex}`);
