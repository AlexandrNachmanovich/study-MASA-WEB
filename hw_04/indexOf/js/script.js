function findAll(word, letter) {
  let indices = [];
  let index = word.indexOf(letter);

  while (index !== -1) {
    indices.push(index);
    index = word.indexOf(letter, index + 1);
  }

  return indices;
}

console.log(findAll("archaebacteria", "a")); // [0,4,7,13]
console.log(findAll("abracadabra", "a")); // [0,3,5,7,10]
console.log(findAll("encyclopedy", "m")); // []
console.log(findAll("encyclopedy", "c")); // [2,4]
console.log(findAll("error", "e")); // [0]

//method B in process
