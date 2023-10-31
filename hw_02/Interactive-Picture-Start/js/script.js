let blur = document.getElementById("blur");
let padding = document.getElementById("padding");
let backColor = document.getElementById("back-color");
const img = document.querySelector(".img");
// function blurChanged() {
//   img.style["-webkit-filter"] = "blur(" + blur.value + "px)";
// }

padding.addEventListener("input", (e) => {
  console.log("e.target.value");
  img.style.setProperty("padding", `${e.target.value}px`);
});

blur.addEventListener("input", (e) => {
  console.log("e.target.value");
  img.style.setProperty("filter", `blur(${e.target.value}px)`);
});

backColor.addEventListener("input", (e) => {
  console.log(e.target.value);
  img.style.setProperty("background-color", `${e.target.value}`);
});
