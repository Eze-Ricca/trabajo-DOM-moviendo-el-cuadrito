let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let rectradius = 50;
//
let x = canvas.width / 2;
let y = canvas.height - 170;
let dx = 2;
// let dy = -2;// no estaria necesitando el plano "y"
function drawsQuare() {
  ctx.beginPath();
  ctx.rect(x, y, rectradius, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}
//
//
var paddleHeight = 50;
var paddleWidth = 50;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//==============================================================
let leftButton = document.getElementById("uno");
let rightButton = document.getElementById("dos");

leftButton.addEventListener("mousedown", function () {
  leftPressed = true;
});

rightButton.addEventListener("mousedown", function () {
  rightPressed = true;
});

leftButton.addEventListener("mouseup", function () {
  leftPressed = false;
});

rightButton.addEventListener("mouseup", function () {
  rightPressed = false;
});

//================================================================
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
//
//
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawsQuare();
  drawPaddle();
  x = x + dx;
  //   y = y + dy; // este lo mueve ligeramente hacia arriba
  if (x + dx > canvas.width - rectradius || x + dx < 0) {
    dx = -dx;
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  requestAnimationFrame(draw);
}

function main() {
  draw();
  const bMore = document.querySelector("#bMore");
  const links = document.querySelector("#links");
  bMore.addEventListener("click", (e) => {
    links.classList.toggle("collapsed");
  });
}
main();
