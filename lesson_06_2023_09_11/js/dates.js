// Ask person when he was bor (year)
// Ask other questions and decide if he could drive a car

let yearOfBirth = prompt("In what is year you was born?");
const startDriveAge = 17;
let age; // declaration

// Class Date
// We are creating "today" as an a object of class "Date"
const today = new Date();

// Primitive Data Types: string, number, null, undefiend
// Complex Data Types: object, function

console.log(`type of "today" is ${typeof today}`);
console.log(`today = ${today}`);

console.log(`year: ${today.getFullYear()}`);
console.log(`day: ${today.getDate()}`);

age = today.getFullYear() - yearOfBirth;
