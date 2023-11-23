/**
 * 1."while" loop.
   a) Only even. User is prompted for an integer. 
      The app asks him to continue
      to enter integers untill he enters an even number. 

*/

let evenInt = prompt('Enter an even intger: ');

while (!evenInt || isNaN(evenInt) || Number(evenInt)%2 !== 0) {

    evenInt = prompt(`It was not even integer. Enter an even intger: `);

}

console.log(`Your even integer is ${evenInt}`)

/*

   b) Right password. The app asks the user to enter a password.
      It stops only when the user enters the word "Password"
      or "password".

*/

let passwd = prompt('Enter a password');

while(passwd != 'Password' && passwd != "password") {

    passwd = prompt('Nuuuu, enter a password:');

}

console.log(`You've enetered "${passwd}"`);


/*

   c)  Create a function checkMultiplication() 
       that gets 2 numbers as parameters 
       and asks the user (with prompt())
       the result of multiplication of these 2 numbers.

       If the answer is wrong, the function starts the loop
       "while" which will stop when there is right answer, 
       or "stop" or no answer.

       Examples: 
       checkMultiplication(11,11);
       checkMultiplication(1,1045);
       checkMultiplication(-45.3,0);
*/
    const checkMultiplication = (n1,n2) => {

        let userAnsw = prompt(`Multiply ${n1} by ${n2}:`);

        while(!userAnsw || Number(userAnsw) !== n1*n2) {

            userAnsw = prompt(`Multiply ${n1} by ${n2}:`)

        }

        console.log(`Eventually! You've said: ${userAnsw}`)

    } 

    checkMultiplication(11,11);
    checkMultiplication(1,1045);
    checkMultiplication(-45.3,0);

/*
    d) Create a function showUpper() that gets an array of words, 
       goes over it, shows each word in upper case
       and stops when there is an empty string.

       Arrays for example:
       const words1 = ['stone','water','sand','oil','fire','','mist','rain'];
       const words2 = ['stand','dance','run','jump',''];
       const words3 = ['','stupid','smart','swift'];
       const words4 = [''];
       const words5 = [];
       const words6 = ['code','letter','digit','number','cifer'];
       
       Run the function at least 6 times - with each of 
       the previous arrays as a parameter.
*/

function showUpper(wordAr) {

    let i = 0;

    while(wordAr[i] !== '' && i < wordAr.length) {

        console.log(wordAr[i].toUpperCase());
        i++;

    }

}

const words1 = ['stone','water','sand','oil','fire','','mist','rain'];
const words2 = ['stand','dance','run','jump',''];
const words3 = ['','stupid','smart','swift'];
const words4 = [''];
const words5 = [];
const words6 = ['code','letter','digit','number','cifer'];

showUpper(words1);
showUpper(words2);
showUpper(words3);
showUpper(words4);
showUpper(words5);
showUpper(words6);

/*
    e) Create a function sumUntilMax() that gets an array of 
       numbers and a maximal sum, goes over the array,
       sums the numbers, stops when the sum is equal 
       or greater than the maximum and shows the current sum.

       const nums1 = [10, 15, 6, 5, 4, 100, 21];
       const nums2 = [0, 1, 3, 0, 7, 7];
       const nums3 = [];
       const nums4 = [12];

       Examples: 
       sumUntilMax(nums1, 33)
       Output: 36

       sumUntilMax(nums1, 141)
       Output: 161

       sumUntilMax(nums2, 33)
       Output: 18

       sumUntilMax(nums2, 0)
       Output: 0

       sumUntilMax(nums3, 33)
       Output: 0

       sumUntilMax(nums4, 33)
       Output: 12

       sumUntilMax(nums4, 11)
       Output: 12
 */

function sumUntilMax(numAr, max) {

    let sum = 0, i = 0;

    while(sum < max && i < numAr.length) {

        sum += numAr[i];
        i++;

    }  
    
    console.log(`The sum is ${sum} and i now is ${i}`)

}

const nums1 = [10, 15, 6, 5, 4, 100, 21];
const nums2 = [0, 1, 3, 0, 7, 7];
const nums3 = [];
const nums4 = [12];

sumUntilMax(nums1, 33)
//Output: 36

sumUntilMax(nums1, 141)
//Output: 161

sumUntilMax(nums2, 33)
//Output: 18

sumUntilMax(nums2, 0)
//Output: 0

sumUntilMax(nums3, 33)
//Output: 0

sumUntilMax(nums4, 33)
//Output: 12

sumUntilMax(nums4, 11)
//Output: 12

