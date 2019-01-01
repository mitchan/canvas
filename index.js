const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function randomIntBetweenTwoNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class Circle {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.dx = randomIntBetweenTwoNumbers(-3, 3)
    this.dy = randomIntBetweenTwoNumbers(-3, 3)
  }
}

Circle.prototype.update = function() {
  this.x += this.dx
  this.y += this.dy

  // revert dx?
  if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
    // revert
    this.dx = -this.dx
  }

  // revert dy ?
  if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
    // revert
    this.dy = -this.dy
  }

  this.draw()
}

Circle.prototype.draw = function() {
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
  ctx.stroke()
}

resize()

// creating x circles
const circles = []
const baseRadius = 30

for (let i = 0; i < 10; i++) {
  // creating a circle
  const x = randomIntBetweenTwoNumbers(baseRadius, canvas.width - baseRadius)
  const y = randomIntBetweenTwoNumbers(baseRadius, canvas.height - baseRadius)
  circles.push(new Circle(x, y, baseRadius))
}

requestAnimationFrame(update)

// functions
function update() {
  requestAnimationFrame(update)

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // update circles
  circles.forEach(circle => circle.update())
}

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
