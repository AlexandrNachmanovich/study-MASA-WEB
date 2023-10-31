// var answer = prompt("Ты с полотенцем? Yes or no:");

// if (answer === "yes") {
//   // {} — contain  block of commands
//   console.log("Посмотрите на него!");
//   console.log("С полотенцем ходит. Купи салфетки");
// } else {
//   console.log("Молодец");
// }
// console.log("Твой ответ был >" + answer + "<");
// console.log("It's type was " + typeof answer);
// if (answer === "") {
//   console.log("loh");
//   console.log('choose "yes" or "not"');
// }

var numOfTeeth = prompt("How many teeth do you have?");
var numOfLegs = prompt("How many  legs your octopus has?");

if (numOfTeeth > 20) {
  console.log("Now you definitely brush your teeth");
} else {
  console.log("Pffff");
}

console.log("Data  type of numOfTeeth: " + typeof numOfTeeth);
console.log(
  "Num of your teeth + num of your octopus legs is " + (numOfTeeth + numOfLegs)
);
// we get concatenation and not the sum because the Data Type of the prompt input is STRING
