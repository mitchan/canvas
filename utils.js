const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function randomIntBetweenTwoNumbers(min, max) {
  return Math.floor(randomNumberBetweenTwoNumbers(min, max))
}

function randomNumberBetweenTwoNumbers(min, max) {
  return Math.random() * (max - min + 1) + min
}

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
