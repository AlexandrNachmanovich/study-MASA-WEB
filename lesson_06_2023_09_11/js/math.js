// var num1 = "55";
// var num1 = Number(num1);

// var num2 = "333";
// num2 = +num2;
// // + operator —  casting to num

// var num3 = "777.23";
// var num3 = parseInt(num3); //777

// var num4 =

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// var num1 = Number(num1);
// var num2 = Number(num2);

// // console.log("Their sum is " + (num1 + num2));

// // TEMPLATE STRING (ES6 or later)
// console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

// var num1 = +prompt("Enter an even number:");
// if (num1 % 2 === 0) {
//   console.log(`Well done! Number ${num1} is definitely even`);
// } else {
//   console.log(`You\'re wrong. Number ${num1} is odd`);
// }

var num2 = +prompt("Enter a number: ");
if ((num2 % 3 === 0 && num2 % 5 === 0) || (num2 % 7 === 0 && num2 % 11 === 0)) {
  console.log(
    `Well done! Number ${num2} is definitely divisible by 3 and 5 or 7 and 11`
  );
} else {
  console.log(
    `You\'re wrong. Number ${num2} is not divisible by 3 and 5 or 7 and 11`
  );
}

