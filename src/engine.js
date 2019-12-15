let canvas = document.querySelector('canvas');
let ctx = canvas.getContext("2d");

var w = canvas.width
var h = canvas.height

const display_title = () => {
  ctx.save()
  ctx.font = "40px Arial"
  ctx.textAlign = "center"
  ctx.fillText("SpaceCraft", w/2, h * 0.35)
  ctx.restore()
}

display_title()

const drawCircle = (x,y,r,color) => {
  ctx.beginPath()
  ctx.ellipse(x,y,r,r,0,0,2 * Math.PI)
  ctx.fillStyle = color;
  ctx.stroke()
}

const drawDisk = (x,y,r,color) => {
  ctx.beginPath()
  ctx.ellipse(x,y,r,r,0,0,2 * Math.PI)
  ctx.fillStyle = color;
  ctx.fill()
}

const clear = () => {
  ctx.clearRect(0,0,w,h)
}

const bind_mousedown = (f) => {
  canvas.addEventListener('mousedown', (event) => {
    f(event.offsetX, event.offsetY)
  }, false);
}

const bind_mouseup = (f) => {
  canvas.addEventListener('mouseup', (event) => {
    f(event.offsetX, event.offsetY)
  }, false);
}

const bind_mousemove = (f) =>  {
  canvas.addEventListener('mousemove', function(event) {
    f(event.offsetX, event.offsetY)
  }, false);
}

const bind_keydown = (f) => {
  window.addEventListener('keydown', function(event) {
    f(event.key)
  }, false);
}

const bind_button = (selector, f) => {
  document
    .querySelector(selector)
    .addEventListener('click', function(event) { f() }, false);
}
