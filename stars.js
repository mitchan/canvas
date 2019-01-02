class Star {
  constructor(radius) {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.radius = radius
    this.dx = Math.sin(randomNumberBetweenTwoNumbers(0, 2 * Math.PI))
    this.dy = Math.sin(randomNumberBetweenTwoNumbers(0, 2 * Math.PI))
  }
}

Star.prototype.update = function() {
  this.x += this.dx
  this.y += this.dy

  this.draw()
}

Star.prototype.draw = function() {
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
  ctx.stroke()
}

resize()

// creating stars
const stars = []
const baseRadius = 30

for (let i = 0; i < 100; i++) {
  stars.push(new Star(baseRadius))
}

requestAnimationFrame(starUpdate)

function starUpdate() {
  requestAnimationFrame(starUpdate)

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // update circles
  stars.forEach(circle => circle.update())
}
