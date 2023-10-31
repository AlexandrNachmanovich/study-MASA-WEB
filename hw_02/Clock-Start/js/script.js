const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const tick = document.querySelector("#second-tick");

function nowDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  secHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
  setInterval(tick.play(), 1000);

  let minutes = now.getMinutes();
  minHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;

  let hours = now.getHours();
  hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
}

setInterval(nowDate, 1000);
nowDate();
