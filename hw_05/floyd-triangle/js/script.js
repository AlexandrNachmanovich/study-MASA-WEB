function triangle(rows) {
  let num = 1;
  let result = "";
  for (let i = 1; i <= rows; i += 1) {
    for (let n = 1; n <= i; n += 1) {
      result += num + " ";
      num++;
    }
    result += "\n";
  }
  return result;
}

const rows = 9;
console.log(triangle(rows));
