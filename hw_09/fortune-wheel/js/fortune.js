const container = document.querySelector(".container");
const btn = document.getElementById("spin");
const renewBtn = document.getElementById("renew");
const spinSound = document.getElementById("spinSound");
const wheelSectors = document.querySelectorAll(".container div");

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

function adjustTextDirection() {
  let rotation = currentDegrees % 360;
  wheelSectors.forEach((sector, index) => {
    let offset = index * 45;
    let textRotation = rotation + offset;
    let adjustedRotation = -textRotation;
    sector.querySelector("span").style.transform = `rotate(${adjustedRotation}deg)`;
  });
}

setInterval(adjustTextDirection, 1000);

renewBtn.addEventListener("click", function () {
  const shuffledResponses = [...responses].sort(() => 0.5 - Math.random());

  wheelSectors.forEach((sector, index) => {
    const spanElem = sector.querySelector("span");
    if (index < shuffledResponses.length) {
      spanElem.textContent = shuffledResponses[index];
    } else {
      spanElem.textContent = "";
    }
  });
});
