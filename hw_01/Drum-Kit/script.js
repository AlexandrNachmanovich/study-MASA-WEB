window.addEventListener("keydown", (e) => {
  const key = document.getElementById(e.key);

  key.children[0].play();
});

// до элегантного способа с мышью не дошёл :(
