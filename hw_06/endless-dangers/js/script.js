var ammoDani = 140;
var grDani = 4;
var daniIsAlive = true;
var currentScenario = 0;

var gameFlow = [
  "dragons",
  "dragons",
  "carriage",
  "dragons",
  "carriage",
  "carriage",
];

function dragons(dragonNum) {
  var bulletsRequired = dragonNum * 4;
  if (ammoDani >= bulletsRequired) {
    ammoDani -= bulletsRequired;
    return true;
  } else {
    while (dragonNum > 0 && grDani > 0) {
      grDani--;
      dragonNum--;
    }
    if (dragonNum > 0) {
      bulletsRequired = dragonNum * 4;
      if (ammoDani >= bulletsRequired) {
        ammoDani -= bulletsRequired;
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}

function hostileCarriage() {
  if (grDani < 2 || Math.random() < 0.5) {
    return false;
  } else {
    grDani -= 2;
    return true;
  }
}

function gameScenario(dangerType, num) {
  let scenarioText = document.getElementById("scenarioText");
  if (dangerType === "dragons") {
    scenarioText.textContent = `Facing ${num} dragons...`;
    daniIsAlive = dragons(num);
  } else if (dangerType === "carriage") {
    scenarioText.textContent = "Facing a hostile carriage...";
    daniIsAlive = hostileCarriage();
  }

  if (!daniIsAlive) {
    document.getElementById("status").textContent = "Dead";
  }

  updateDisplay();
}

function playGame() {
  if (!daniIsAlive || currentScenario >= gameFlow.length) return;

  let scenario = gameFlow[currentScenario];

  if (scenario === "dragons") {
    let dragonCount = Math.floor(Math.random() * 8);
    gameScenario(scenario, dragonCount);
  } else {
    gameScenario(scenario, null);
  }

  currentScenario++;
}

function updateDisplay() {
  document.getElementById("ammo").textContent = ammoDani;
  document.getElementById("grenades").textContent = grDani;
}

// Initialize the display
updateDisplay();
