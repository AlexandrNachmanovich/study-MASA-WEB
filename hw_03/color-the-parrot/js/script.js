// for example

let colors = [
  "#cd0000",
  "#f03800",
  "#ffb64c",
  "#ff9100",
  "#0095ff",
  "#1fbf66",
  "#ff4380",
  "#deecf1",
  "#714c2f",
  "#7fe881",
  "#f7006a",
];

let colorPickerActivated = false;

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelector(".controls");
  let mode = 0;
  let currentColorIndex = 0;
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  let lastClickedElement = null;

  function getNextColor() {
    switch (mode) {
      case 0:
        if (currentColorIndex >= colors.length) {
          currentColorIndex = 0;
        }
        return colors[currentColorIndex++];
      case 1:
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      case 2:
        if (!colorPickerActivated) {
          colorPickerActivated = true;
          colorInput.click();
        } else {
          colorPickerActivated = false;
          return colorInput.value;
        }
        break;
      default:
        return "#FFFFFF";
    }
  }

  controls.addEventListener("click", function (event) {
    if (!event.target.matches("button")) return;

    lastClickedElement = event.target.id;
    let color = getNextColor();

    if (mode !== 2 && color) {
      applyColorToElement(color, lastClickedElement);
    }
  });

  colorInput.addEventListener(
    "change",
    function () {
      if (lastClickedElement) {
        applyColorToElement(colorInput.value, lastClickedElement);
      }
    },
    false
  );

  function applyColorToElement(color, elementId) {
    switch (elementId) {
      case "body-btn":
        document.querySelectorAll(".body-clr").forEach((part) => {
          part.style.backgroundColor = color;
        });
        break;
      case "main-wing-btn":
        document.querySelector(".wing").style.backgroundColor = color;
        break;
      case "sub-wing-btn":
        document.querySelector(".wing-color1").style.backgroundColor = color;
        document.querySelector(".wing-color2-inner").style.backgroundColor =
          color;
        break;
      case "upper-beak-btn":
        document.querySelector(".beak-upper").style.backgroundColor = color;
        break;
      case "lower-beak-btn":
        document.querySelector(".beak-lower").style.backgroundColor = color;
        break;
      case "claw-btn":
        document.querySelector(".leg").style.backgroundColor = color;
        break;
      case "tail-wing-btn":
        document.querySelectorAll(".tail-wing").forEach((part) => {
          part.style.backgroundColor = color;
        });
        break;
      case "head-wing-btn":
        document.querySelector(".feather").style.backgroundColor = color;
        break;
      case "eye-patch-btn":
        document.querySelector(".eye-patch").style.backgroundColor = color;
        break;
      case "eye-btn":
        document.querySelector(".eye").style.backgroundColor = color;
        break;
      default:
        console.warn("Unknown button pressed");
    }
  }

  controls.addEventListener("click", function (event) {
    if (!event.target.matches("button")) return;

    lastClickedElement = event.target.id;
    let color = getNextColor();

    if (mode !== 2) {
      applyColorToElement(color, lastClickedElement);
    }
  });

  colorInput.addEventListener(
    "change",
    function () {
      if (mode === 2 && lastClickedElement) {
        applyColorToElement(colorInput.value, lastClickedElement);
      }
    },
    false
  );

  document.querySelectorAll('input[name="colorMode"]').forEach((radio) => {
    radio.addEventListener("change", function (event) {
      mode = parseInt(event.target.value, 10);
    });
  });
});
