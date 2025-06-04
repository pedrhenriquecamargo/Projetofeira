const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let frames = 0;
const gravity = 0.25;
const jump = 4.6;
let score = 0;

const bird = {
  x: 50,
  y: 150,
  radius: 12,
  velocity: 0,

  draw() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  },

  update() {
    this.velocity += gravity;
    this.y += this.velocity;
  },

  flap() {
    this.velocity = -jump;
  }
};

const pipes = [];
const pipeGap = 120;
const pipeWidth = 50;
const pipeSpeed = 2;

function spawnPipe() {
  const top = Math.floor(Math.random() * 200) + 50;
  pipes.push({ x: canvas.width, top });
}

function drawPipes() {
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
    ctx.fillRect(pipe.x, pipe.top + pipeGap, pipeWidth, canvas.height);
  });
}

function updatePipes() {
  pipes.forEach(pipe => {
    pipe.x -= pipeSpeed;
  });

  if (frames % 100 === 0) spawnPipe();

  pipes.forEach((pipe, i) => {
    if (pipe.x + pipeWidth < 0) {
      pipes.splice(i, 1);
      score++;
      document.getElementById("score").textContent = score;
    }

    if (
      bird.x + bird.radius > pipe.x &&
      bird.x - bird.radius < pipe.x + pipeWidth &&
      (
        bird.y - bird.radius < pipe.top ||
        bird.y + bird.radius > pipe.top + pipeGap
      )
    ) {
      alert("Game Over! Pontuação: " + score);
      document.location.reload();
    }
  });
}

function loop() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bird.update();
  bird.draw();

  updatePipes();
  drawPipes();

  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") bird.flap();
});

loop();
document.querySelector('.modal').style.display = 'flex';
