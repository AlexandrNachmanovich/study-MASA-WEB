for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    console.log(`i = ${i}, j = ${j}`);
  }
  console.log(`End of inner loop`);
}

// step 1: i = 0, j = 0
// step 2: i = 0, j = 1
// step 3: i = 0, j = 2
// step 4: i = 0, j = 3
// step 5: i = 0, j = 4
// step 6: i = 1, j = 0
// step 7: i = 1, j = 1
// step 8: i = 1, j = 2
// ...................
// step 25: i = 4, j = 4

// TIK-TAK-TOE
// Each step of a game is written into 2-dimensional array

const step8 = [
  ["x", "o", "x"],
  ["o", "x", "x"],
  ["o", "", "o"],
];
const game = document.querySelector(".game");

for (let i = 0; i < step8.length; i += 1) {
  console.log(step8[i]);
  for (let j = 0; j < step8[i].length; j += 1) {
    console.log(step8[i][j]);
    game.innerText += "\xa0" + step8[i][j].padEnd(2, "\xa0") + "\xa0|";
  }

  game.innerText = game.innerText.slice(0, -1);

  if (i < step8.length - 1) game.innerText += "\n" + "-".repeat(step8[i].length * 4 - 1) + "\n";
}

// MISSiON:
// 1. Go over the outer array and the inner array with for loops
//    and sum all the number
// 2. Do the same, but use forEach for the outer and the inner loops
const arrInArr = [[8, 5, 2, 4], [5, 6], [-1, 125, 40], []];
let sum = 0;
for (let i = 0; i < arrInArr.length; i += 1) {
  for (let j = 0; j < arrInArr[i].length; j += 1) {
    sum += arrInArr[i][j];
  }
}
console.log(sum);

let sum2 = 0;
arrInArr.forEach((ar) => {
  ar.forEach((num) => (sum2 += num));
});
console.log(sum2);
