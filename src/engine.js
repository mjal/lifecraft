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

let set_state_js = undefined
const bind_set_state_to_js = (f) => {
  console.log(f)
  set_state_js = f
}

const clear_left_side = () => {
  document.getElementById("left-side").innerHTML = '';
}

const add_seed = (name, seed) => {
  parent = document.getElementById("left-side")
  link = document.createElement('a')
  link.innerHTML = name
  link.href = ""
  link.addEventListener('click', (event) => {
    event.preventDefault();
    set_state_js(seed)
    /*
    set_state_js(`[
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0]
    ]`)
    */
  })
  p = document.createElement('p')
  p.appendChild(link)
  parent.appendChild(p)
}

const set_html_size = (x, y) => {
  document.getElementById("size").innerHTML =
    "Size: " + x + "x" + y
}

const set_html_population = (pop) => {
  document.getElementById("population").innerHTML =
    "Population: " + pop
}

add_seed("Starter", "[[0,0,0,0],[0,1,1,0],[0,0,0,0]]")
add_seed("Starter2", "[[0,0,0],[0,1,0],[0,1,0],[0,0,0]]")
