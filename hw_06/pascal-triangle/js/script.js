function generatePascalsTriangle(n) {
  if (n <= 0) return [];

  let triangle = [[1]];

  for (let i = 1; i < n; i++) {
    let previousRow = triangle[i - 1];
    let newRow = [1];

    for (let j = 1; j < previousRow.length; j++) {
      newRow.push(previousRow[j - 1] + previousRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

function printPascalsTriangle(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    let spacing = " ".repeat(triangle.length - i);
    console.log(spacing + triangle[i].join(" "));
  }
}

// Example
let triangle = generatePascalsTriangle(7);
printPascalsTriangle(triangle);
