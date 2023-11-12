// var a = 25; // my SCOPE if a whole program

/* ERROR: cannot access b before initialization */
/* console.log(b); */

// console.log(d);
//
// let b; - declaration
// let b = 33; - declaration together with initialization
// b = 33; - initialization after the declaration
// b = "thirty three";
// let b = 33;

// const c = "green";

/* ERROR: assignment to constant variable 
c = 'red';
*/

// var d = "lalala";

// console.log(d);

// =================================================================

// showA();
// showB(); // var is hoisted, but here it's value is undefined
//             and it is yet not a function
// showC(); // not initialized yet

// function showA() {
//   console.log(`I am showing A`);
// }

// var showB = () => {
//   console.log(`I am showing B`);
// };
// const showC = () => {
//   console.log(`I am showing C`);
// };

// =================================================================

// for (var i = 0; i < 3; i += 1) {
//   console.log(`inside the loop: i = ${i}`);
// }

// console.log(`After the loop:`);
// console.log(`i = ${i}`);

// for (let j = 0; j < 3; j += 1) {
//   console.log(`inside the loop: j = ${j}`);
// }

// console.log(`After the loop:`);
// console.log(`j = ${j}`);

// ************* SCOPE ****************

// Where our variable is defined

// SCOPE of VAR is a program or a function

// SCOPE of LET is a program or a block of commands
// for (let j = 0; j < 3; j += 1) {
//   console.log(`inside the loop: j = ${j}`);
// }

function showGlobalVariables() {
  console.log(`I am global a: ${a}, my scope is the whole program`);
  console.log(`I am global b: ${b}, my scope is the whole program`);
  a += 1;
  b += 1;
}

function showLocalVariables() {
  var a = ":Da";
  let b = ":Db";
  console.log(`I am local a: ${a}, my scope is yhe function showLocalVariables`);
  console.log(`I am local b: ${b}, my scope is yhe function showLocalVariables`);
}

showGlobalVariables();
showLocalVariables();
showGlobalVariables();
