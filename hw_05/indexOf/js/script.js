// METHOD A

function findAll(word, letter) {
  let result = [];
  let position = word.indexOf(letter);

  while (position !== -1) {
    result.push(position);
    position = word.indexOf(letter, position + 1);
  }

  return result;
}

// Test
console.log(findAll("archaebacteria", "a"));
console.log(findAll("abracadabra", "a"));
console.log(findAll("encyclopedy", "m"));
console.log(findAll("encyclopedy", "c"));
console.log(findAll("error", "e"));

// METHOD B
function findAllAlt(word, letter) {
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      result.push(i);
    }
  }

  return result;
}

// Test
console.log(findAllAlt("archaebacteria", "a"));
console.log(findAllAlt("abracadabra", "a"));
console.log(findAllAlt("encyclopedy", "m"));
console.log(findAllAlt("encyclopedy", "c"));
console.log(findAllAlt("error", "e"));
