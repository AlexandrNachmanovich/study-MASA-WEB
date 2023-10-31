// var hairColor = prompt("What color is your hair?");

// if (hairColor === "red") {
//   console.log("Bomba");
// } else {
//   console.log("Ne bomba");
// }

// var shirt = prompt("Is your towel clean? yes/Yes/YES");
// if (shirt.toLowerCase() === "yes") {
//   console.log("You should put it on");
// } else {
//   console.log("You should go to laundry");
// }

var profession = prompt("What is your profession?");
profession = profession.toLowerCase();
if (profession === "cook" || profession === "chef") {
  console.log("You cook delicios soup");
} else if (profession === "programmer" || profession === "developer") {
  console.log("Fix my computer pls");
} else if (profession === "bus driver" || profession === "taxi driver") {
  console.log("You drives many people");
} else {
  console.log("I don't know wtf is " + profession);
}
