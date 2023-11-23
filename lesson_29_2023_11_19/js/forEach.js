const drinks = ["water", "cola", "coffee", "cacao", "tee", "milk", "beer", "whiskey"];

// Goal: go over the array and show each drink and it's first letter

/* for (let i = 0; i < drinks.length; i++) {

    console.log(`${drinks[i]} - ${drinks[i][0]}`)

} */

/* const showFirstLetter = (word) => {
    console.log(`${word} - ${word[0]}`)
}

for (let i = 0; i < drinks.length; i++) {

    showFirstLetter(drinks[i]);

} */

/* const showFirstLetter = (word) => {
    console.log(`${word} - ${word[0]}`)
}

// forEach() passes to it's callback function
// element of the array
drinks.forEach(showFirstLetter); */

drinks.forEach((element) => {
  console.log(`${element} - ${element[0]}`);
});

const numAr1 = [55, 7, -1.2, 123, 1024, 2.45];
/** MISSION:
 *
 * Use forEach() - go over numAr1,
 * show each number, enlarged by 10
 *
 */

numAr1.forEach((num) => {
  console.log(num + 10);
});

// GOAL: using forEach, show only the drinks with an even index

drinks.forEach((drink, ix) => {
  if (ix % 2 === 0) console.log(drink);
});

/** MISSION:
 *
 *  Show each drink, but with it's number as index+1
 *
 *  1. water
 *  2. cola
 *  3. coffee
 * ........
 *
 */

drinks.forEach((el, idx) => {
  console.log(`${idx + 1}. ${el}`);
});

const foods = ["shuarma", "sabih", "haCHApuri", "arais", "FALafeL", "hUMus", "pelmeni", "oladushki"];

/** MISSION:
 *
 *  Use forEach to run over foods and to show together element from foods and from drinks,
 *  for example:
 * 1. water and shuarma
 * 2. cola and sabih
 *
 */

foods.forEach((el, ix) => {
  console.log(`${ix + 1}. ${el} and ${drinks[ix]}`);
});

// const numAr1 = [55, 7, -1.2, 123, 1024, 2.45]

// GOAL: to find the sum of all the numbers with forEach (later we should do it with "reduce")

/* let sum = 0;

numAr1.forEach((num) => {

    sum += num;

});

console.log(sum); // 1210.25 */

// When ARROW FUNCITON gets only one argument, we could omit the braces around this argument.

/* let sum = 0;

numAr1.forEach(num => {

    sum += num;

});

console.log(sum); // 1210.25 */

// When ARROW FUNCITON has only one command in it's body,
// we could omit the curly braces around the body.

let sum = 0;

numAr1.forEach((num) => (sum += num));

console.log(sum); // 1210.25

/** MISSION:
 *  const foods = ['shuarma','sabih','hachapuri','arais','falafel','humus','pelmeni','oladushki'];
 *
 *   use forEach and create a string that will be comprised of all the foods with comma
 *   between them, like this:
 *
 * 'shuarma, sabih, hachapuri, ...'
 */

/* let str = '';

foods.forEach((food,idx) => {

    str += food;
    if (idx < foods.length-1) str += ',';

});

console.log(str); */

let str = "";

foods.forEach((food) => (str += food + ","));

// If there was a SPACE in the end we could remove it by trim() or trimEnd()

// Option 1 - the best option for removing the last character
str = str.slice(0, -1);

// Option 2
// str = str.substring(0,str.length-1);

// Option 3 - not really any good option for this mission, but to remind that we've got
// these functions

/* const tmpArr = str.split(',');
tmpArr.pop();
str = tmpArr.join(','); // Actually we could just perform this without any loop */

console.log(str);

// GOAL: Replace each food in "foods" by itself capitalized

/* foods.forEach((food,ix) => {

    foods[ix] = food[0].toUpperCase() + food.slice(1).toLowerCase();
    // We should get to the array itself to replace it's elements

}) */

// The THIRD ARGUMENT is a pointer (reference) to the array itself.
// foods and ar point to the same array
foods.forEach((food, ix, ar) => {
  ar[ix] = food[0].toUpperCase() + food.slice(1).toLowerCase();
});

/** MISSION:
 * const numAr1 = [55, 7, -1.2, 123, 1024, 2.45]
 *
 * use forEach and the 3rd argument, and replace all the numbers in numAr1
 * by their squares
 */

numAr1.forEach((num, ix, ar) => (ar[ix] = num ** 2));

/************** */
/** MAP() - creates new array using "return" from the callback function      */
/************* */

// GOAL: create new array - drinksCapitalized

/* const drinksCapitalized = [];

drinks.forEach(drink => {

    drinksCapitalized.push(drink[0].toUpperCase() + drink.slice(1).toLowerCase());    

}); */

/* const drinksCapitalized = drinks.map(drink => {

    return drink[0].toUpperCase() + drink.slice(1).toLowerCase();  
    // Callback function of map() have to have "return"  

}); */

const drinksCapitalized = drinks.map((drink) => drink[0].toUpperCase() + drink.slice(1).toLowerCase());

// When we write the only command without the curly braces - it is "returned"

/** MISSION:
 * const numAr1 = [55, 7, -1.2, 123, 1024, 2.45]
 *
 * use map() to create array numAr1By10 which will contain the number
 * the elements of numAr1 multiplied by 10
 *
 */

const numAr1By10 = numAr1.map((el) => el * 10);

// GOAL: create new array sumNumAr1 - of the sums of the corresponding elements
//     of numAr1 and numAr1By10

const sumNumAr1 = numAr1.map((num1, idx) => num1 + numAr1By10[idx]);

/** MISSION:
 *
 * Create array menu from drinksCapitalized and from foods, it should
 * look like
 * ['1. Water and Shuarma','2. Cola and Sabih', ....]
 *
 */

const menu = drinksCapitalized.map((drink, ix) => `${ix + 1}. ${drink} and ${foods[ix]}`);

/** MISSION:
 *
 * Create new array greaterLesser from numAr1 - when the number is less than 100
 * there should be "false", otherwise "true", and by the way add 100 to the elements
 * of numAr1 - use for this the 3rd argument of the map() callback function
 *
 */

/* numAr1.forEach((el,ix,ar) => {

    ar[ix] = el + 100;
    console.log(`In the array: ${ar[ix]}, el: ${el}`)

}) */

const greaterLesser = numAr1.map((el, ix, ar) => {
  ar[ix] = el + 100;
  return el >= 100;
});

/** MISSION:
 * Use map() to create a shallow copy of array foods
 */

const foodsCopy = foods.map((el) => el);

/***
 *  filter() — 1. creates new array
 *             2. it's a callback function should return "true" or "false",
 *             3. and if it is "true", then corresponding element is
 *                being added to the new array
 */

// goal: create new array "foods" with food names longer than 6 characters
const longFoods = foods.filter((food) => food.length > 6);

const numAr2 = [0, 2, 3, 3, 4, 11, 10, 7, 8, 30, 10];

/** MISSION: create numAr2Filtered from numAr2,
 *  it should consist only of the elements that were equal to their index
 *  in the old array
 */
const numAr2Filtered = numAr2.filter((el, idx) => el === idx);
