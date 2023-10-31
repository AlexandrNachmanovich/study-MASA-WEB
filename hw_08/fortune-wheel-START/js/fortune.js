const container = document.querySelector(".container");
const btn = document.getElementById("spin");
const renewBtn = document.getElementById("renew");
const spinSound = document.getElementById("spinSound");

/* the array comes from responses.js */
console.log(responses);

let currentDegrees = 0;

btn.addEventListener("click", function () {
  let spins = Math.floor(Math.random() * 10) + 5;
  let randomSection = Math.floor(Math.random() * 8);
  let degreesToStopAt = randomSection * 45;
  let totalRotation = spins * 360 + degreesToStopAt;

  currentDegrees += totalRotation;
  container.style.transition = "transform 4.5s";
  container.style.transform = `rotate(${currentDegrees}deg)`;
  spinSound.play();
});

renewBtn.addEventListener("click", function () {
  const wheelSectors = document.querySelectorAll(".container div");
  const shuffledResponses = [...responses].sort(() => 0.5 - Math.random());

  wheelSectors.forEach((sector, index) => {
    if (index < shuffledResponses.length) {
      sector.textContent = shuffledResponses[index];
    } else {
      sector.textContent = "";
    }
  });
});
