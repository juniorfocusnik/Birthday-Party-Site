function createSprinkles() {
  const sprinklesContainer = document.getElementById ("container");
  for (let i = 0; i < 400; i++) {
    const sprinkle = document.createElement("div");
    sprinkle.className = "sprinkle";
    sprinkle.style.backgroundColor = "rgb(" + 
 Math.floor(Math.random() * 254 + 1) + ", " + Math.floor(Math.random() * 254 + 1) + ", " + Math.floor(Math.random() * 254 + 1) + ")";
    sprinkle.style.left = Math.random() * window.innerWidth + "px";
    sprinkle.style.animationDuration = (Math.random() * 4 + 2) + "s";
    sprinklesContainer.appendChild(sprinkle);
  }
}

createSprinkles();
