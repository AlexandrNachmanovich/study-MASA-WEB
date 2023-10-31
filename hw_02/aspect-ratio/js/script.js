let height = document.getElementById("height");
let width = document.getElementById("width");
let ratioHeight = document.getElementById("ratio-height");
let ratioWidth = document.getElementById("ratio-width");

let calculateHeight = () => {
  let aspectRatio = ratioWidth.value / ratioHeight.value;
  height.value = parseFloat((width.value / aspectRatio).toFixed(2));
};

let calculateWidth = () => {
  let aspectRatio = ratioWidth.value / ratioHeight.value;
  width.value = parseFloat((height.value * aspectRatio).toFixed(2));
};

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);
ratioHeight.addEventListener("input", calculateHeight);
ratioWidth.addEventListener("input", calculateHeight);
