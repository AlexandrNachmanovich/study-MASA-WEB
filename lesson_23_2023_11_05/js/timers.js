const blinkTimeout = document.querySelector(".blink.timeout");
const blinkInterval = document.querySelector(".blink.interval");
const secInterval = document.querySelector(".seconds.interval");

const timeoutSpan = document.querySelector(".blink.timeout span");
const blinkSecSpan = document.querySelector(".blink.interval .sec");
const blinkTimesSpan = document.querySelector(".blink.interval .times");

/**   
 *    <button class="stop-change-color salmon">Stop Change Color</button>
      <button class="stop-blinking wheat">Stop Blinking</button>
      <button class="stop-blinking-after-times blue">
        Stop Blinking After&nbsp;<span class="times"></span>&nbsp;Times
      </button>
      <button class="stop-after-seconds limegreen">
        Stop After&nbsp;<span class="sec">Seconds</span>&nbsp;
      </button>
 */

const btnStopChangeColor = document.querySelector(".stop-change-color");
const btnStopBlinking = document.querySelector(".stop-blinking");
const btnStopBlinkingAfterTimes = document.querySelector(".stop-blinking-after-times");
const btnStopAfterSeconds = document.querySelector(".stop-after-seconds");

const spanStopBlinkingAfterTimes = document.querySelector(".stop-blinking-after-times span");
const spanStopAfterSeconds = document.querySelector(".stop-after-seconds span");

const timeout = 4; // sec
const interval = 0.7; // sec
const times = 15;
const stopChangeColorAfterTimes = 6;
const stopChangeColorAfterSeconds = 7;

let timer1, timer2, timer3;

timeoutSpan.innerText = timeout;
blinkSecSpan.innerText = interval;
blinkTimesSpan.innerText = times;

spanStopBlinkingAfterTimes.innerText = stopChangeColorAfterTimes;
spanStopAfterSeconds.innerText = stopChangeColorAfterSeconds;

const colors = ["blue", "wheat", "limegreen", "salmon"];
let cntColors = 0;
let cntSeconds = 0;
let cntChangedColors = 0;
let flagStopChangeColors = false;
let flagStopAfterSeconds = false;

/** MISSION:
 *
 * Set timer setTimeout() for "timeout" seconds (change them to msec)
 * and change the color of the first div from limegreen to blue,
 * and change the text to "The color has alredy changed"
 *
 */

timer1 = setTimeout(() => {
  blinkTimeout.classList.replace("limegreen", "blue");
  blinkTimeout.innerText = "The color has already been changed";
}, timeout * 1000);

// setInterval() and also setTimeout() returns a number,
// and this number is a unique identifier of the timer.
timer2 = setInterval(() => {
  cntChangedColors += 1;
  console.log(`ctnChangedColors = ${cntChangedColors}`);

  let oldCnt = cntColors;
  cntColors < colors.length - 1 ? (cntColors += 1) : (cntColors = 0);
  blinkInterval.classList.replace(colors[oldCnt], colors[cntColors]);
  if (flagStopChangeColors && cntChangedColors >= stopChangeColorAfterTimes) {
    clearInterval(timer2);
  }
}, interval * 1000);

/** MISSION:
 * 1. Create setInterval() — it will run it's callback after each sec.
 *
 * 2. Count how many passed from the load (create counter before).
 *
 * 3. Show these seconds in the 3rd div
 */

timer3 = setInterval(() => {
  cntSeconds += 1;
  secInterval.innerText = cntSeconds + " sec";
  if (flagStopAfterSeconds && cntSeconds >= stopChangeColorAfterSeconds) {
    clearInterval(timer3);
  }
}, 1000);

btnStopBlinking.addEventListener("click", () => {
  // clearInterval() gets id of the timer as an argument.
  clearInterval(timer2);
});

/**
 * MISSION:
 * 1. Make timer1 to contain the identifier of the first timer
 * 2. Show it's value to the console
 * 3. Add listener to btnStopChangeColor and in the callback function
 *    — Change the text og the 1st div to: "The color won't be changed"
 * 4. Stop the timer (hence stop changing the color)
 */

btnStopChangeColor.addEventListener("click", () => {
  blinkTimeout.innerText = "The color won't be changed";
  clearTimeout(timer1);
  console.log(timer1);
});

btnStopBlinkingAfterTimes.addEventListener("click", () => {
  flagStopChangeColors = true;
});

/**
 *  MISSION:
 * Make the counter of the seconds to stop after stopAfterSeconds
 * by clicking on btnStopAfterSeconds.
 */

btnStopAfterSeconds.addEventListener("click", () => {
  flagStopAfterSeconds = true;
});
