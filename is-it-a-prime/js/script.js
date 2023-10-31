function checkPrime() {
  const num = document.getElementById("numberInput").value;

  // Clear previous output and error messages
  document.getElementById("output").innerHTML = "";
  document.getElementById("error").innerHTML = "";

  // Validation
  if (!num) {
    document.getElementById("error").innerText = "No input provided!";
    return;
  } else if (
    isNaN(num) ||
    parseFloat(num) !== parseInt(num) ||
    parseInt(num) <= 0
  ) {
    document.getElementById("error").innerText =
      "Input error! Please enter a positive integer.";
    return;
  }

  const n = parseInt(num);

  if (n === 1) {
    document.getElementById("output").innerText = "1 is not a prime number.";
    return;
  } else if (n === 2) {
    document.getElementById("output").innerText = "2 is a prime number.";
    return;
  } else if (n % 2 === 0) {
    document.getElementById("output").innerText =
      n + " is divisible by 2, it's not a prime number.";
    return;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      document.getElementById("output").innerText =
        n + " is divisible by " + i + ", it's not a prime number.";
      return;
    }
  }

  document.getElementById("output").innerText = n + " is a prime number.";
}
