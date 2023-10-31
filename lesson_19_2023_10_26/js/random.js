const btnFrom0To1 = document.querySelector(".from0to1 button");
const outFrom0To1 = document.querySelector(".from0to1 .output");

const btnFrom0To10 = document.querySelector(".from0to10 button");
const outFrom0To10 = document.querySelector(".from0to10 .output");

const btnFrom1To5 = document.querySelector(".from1to5 button");
const outFrom1To5 = document.querySelector(".from1to5 .output");

const btnColor = document.querySelector(".color button");
const outColor = document.querySelector(".color .output");

function randFrom0To1() {
  outFrom0To1.innerText = Math.random().toFixed(4);
}

// function randFrom1To5() {
//   outFrom1To5.innerText = Math.floor(Math.random() * 5) + 1;
// }

// ARROW FUNCTION
const randFrom1To5 = () => {
  outFrom1To5.innerHTML = Math.floor(Math.random() * 5) + 1;
};

const setColor = () => {
  outColor.style.backgroundColor = `rbg(${randFrom0To255()})
  ${randFrom0To255()}
  ${randFrom0To255()}`;
};

const randFrom0To255 = () => {
  return Math.floor(Math.random() * 256);
};
// LISTENERS

btnFrom0To1.addEventListener("click", randFrom0To1);

btnFrom0To10.addEventListener("click", function () {
  outFrom0To10.innerText = Math.floor(Math.random() * 11);
});

btnFrom0To10.addEventListener("click", randFrom1To5());

btnColor.addEventListener("click", setColor);
