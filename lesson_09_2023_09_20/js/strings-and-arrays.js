/** function toUpperCase() and toLowerCase() */

var city = "Beer-Sheva";
var cityLower = city.toLowerCase();
var cityLower = city.toUpperCase();

const food = [
  "falafel",
  "pelmeni",
  "shashlyk",
  "rizotto",
  "lazagna",
  "dim-sam",
];

// push() – adds element to the end of array
// pop() – removes the last element from the array and returns it
// shift() – removes the first element from the array and returns it
// unshift() – adds element to the beginning of the array

food.push("buterbrod");
food.push("hot-dog");

console.log(`food: ${food}`);

let thisWasTheFirstElement = food.shift();

food.unshift("butt");
food.inshift("pita");
food.unshift("losos");
