const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

Circle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
  ctx.stroke()
}

resize();

// creating a circle
const circle = new Circle(canvas.width / 2, canvas.height / 2, 30);

requestAnimationFrame(update);

// functions
function update() {
  requestAnimationFrame(update);

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw a circle
  circle.draw();
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
