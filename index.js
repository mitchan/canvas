const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

resize();

requestAnimationFrame(update);

// functions
function update() {
  console.log("updating");
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
