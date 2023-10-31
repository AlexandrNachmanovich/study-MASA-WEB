// function calc(n1, n2, n3) {
//   let result = ((n1 + n2) * n3) ** 2;
//   console.log(`For ${n1}, ${n2}, ${n3} the result is: ${result}`);
//   document.write(`<br>For ${n1}, ${n2}, ${n3} the result is: ${result}`);
// }

// calc(5, -2, 3);
// calc(45, 32, 0);

// function names(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`);
//   console.log(`${lastName} ${firstName}`);
//   document.write(`${firstName} ${lastName}<br>`);
//   document.write(`${lastName} ${firstName}<br>`);
// }

// function getAge(firstName, yearOfBirth) {
//   const currDate = new Date();

//   let age = currDate.getFullYear() - yearOfBirth;

//   console.log(`${firstName} is ${age} years old`);
//   document.write(`${firstName} is ${age} years old<br>`);

//   return age;
// }

// let yourName = prompt("Enter your name");
// let yourYearOfBirth = +prompt("Enter your year of birth");
// const drinkAge = 18;

// let age1 = getAge(yourName, yourYearOfBirth);

// age1 >= drinkAge ? console.log("Drink as you wish") : console.log("Alas");

/** MISSION: create function getCircleArea that gets 1 argument - radius.
 *
 * Use Math.PI (3.14) to calculate and return circle area:
 *
 * π x R**2
 *
 * Get radius by prompt,and get by prompt the color of the circle, and
 * use the circle area to write smth "green circle has area 75"
 */

// function getCircleArea(rad) {
//   let area = Math.PI * rad ** 2;
//   return area;
// }

// function compareTwoCircles() {
//   let radius1 = +prompt("Enter the radius of the first circle");
//   let radius2 = +prompt("Enter the radius of the second circle");
//   let color1 = prompt("Enter the color of the first circle");
//   let color2 = prompt("Enter the color of the second circle");

//   let area1 = getCircleArea(radius1);
//   let area2 = getCircleArea(radius2);

//   if (area1 > area2) {
//     console.log(`${color1} circle is bigger than ${color2} circle`);
//   } else {
//     console.log(`${color1} circle is no bigger than ${color2} circle`);
//   }
// }

// compareTwoCircles();

// Examole for stopping function form running by 'return'

// function doItThreeTimes() {
//   document.write("Tsima<br>");
//   document.write("Tsima<br>");
//   document.write("Tsima<br>");
//   return;
//   document.write("Tsima<br>");
// }

// doItThreeTimes();

let str5 = "encyclopedy",
  str6 = "book",
  str7 = "postcard",
  str8 = "";
console.log(str5.padStart(15, "*"));
console.log(str6.padStart(15, "*"));
console.log(str7.padStart(15, "*"));
console.log(str8.padStart(15, "*"));

/* teudat zehut — 945564365, 004563765 */

function showNameAndTz(name, teudat) {
  console.log(`${name.padEnd(16, " %")}${teudat.padStart(9, "0")}`);
  document.write(`${name.padEnd(16, " %")}${teudat.padStart(9, "0")}<br>`);
}
showNameAndTz("Yocheved", "7777775");
showNameAndTz("Moshe", "887777775");
