const gameContainer = document.getElementById("game-container");
const bird = document.getElementById("bird");
const scoreDisplay = document.getElementById("score");

const gameHeight = gameContainer.clientHeight;
const gameWidth = gameContainer.clientWidth;

let birdY = 150;
let velocity = 0;
const gravity = 0.5;
const jump = -10;
let score = 0;
let gameStarted = false;

let pipes = [];
const pipeWidth = 52;
const pipeGap = 200;  // aumentei para facilitar o jogo
const pipeSpeed = 2;

let gameInterval;
let pipeInterval;

function startGame() {
  birdY = 150;
  velocity = 0;
  score = 0;
  scoreDisplay.textContent = score;

  pipes.forEach(pipe => gameContainer.removeChild(pipe.top));
  pipes.forEach(pipe => gameContainer.removeChild(pipe.bottom));
  pipes = [];

  if (gameInterval) clearInterval(gameInterval);
  if (pipeInterval) clearInterval(pipeInterval);

  gameInterval = setInterval(gameLoop, 20);
  pipeInterval = setInterval(createPipe, 2000);

  gameStarted = true;
}

function gameLoop() {
  velocity += gravity;
  birdY += velocity;

  if (birdY + bird.clientHeight > gameHeight) {
    birdY = gameHeight - bird.clientHeight;
    gameOver();
  }

  if (birdY < 0) {
    birdY = 0;
    velocity = 0;
  }

  bird.style.top = birdY + "px";

  // move pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    let p = pipes[i];
    p.top.style.left = (p.top.offsetLeft - pipeSpeed) + "px";
    p.bottom.style.left = (p.bottom.offsetLeft - pipeSpeed) + "px";

    // colisão
    if (
      50 + bird.clientWidth > p.top.offsetLeft &&
      50 < p.top.offsetLeft + pipeWidth &&
      (birdY < p.top.offsetHeight || birdY + bird.clientHeight > gameHeight - p.bottom.offsetHeight)
    ) {
      gameOver();
    }

    // marcar ponto
    if (!p.passed && p.top.offsetLeft + pipeWidth < 50) {
      score++;
      scoreDisplay.textContent = score;
      p.passed = true;
    }

    // remove canos fora da tela
    if (p.top.offsetLeft + pipeWidth < 0) {
      gameContainer.removeChild(p.top);
      gameContainer.removeChild(p.bottom);
      pipes.splice(i, 1);
    }
  }
}

function createPipe() {
  const pipeTopHeight = Math.floor(Math.random() * (gameHeight - pipeGap - 100)) + 50;
  const pipeBottomHeight = gameHeight - pipeTopHeight - pipeGap;

  const topPipe = document.createElement("div");
  topPipe.classList.add("pipe", "top");
  topPipe.style.height = pipeTopHeight + "px";
  topPipe.style.left = gameWidth + "px";

  const bottomPipe = document.createElement("div");
  bottomPipe.classList.add("pipe", "bottom");
  bottomPipe.style.height = pipeBottomHeight + "px";
  bottomPipe.style.left = gameWidth + "px";

  gameContainer.appendChild(topPipe);
  gameContainer.appendChild(bottomPipe);

  pipes.push({ top: topPipe, bottom: bottomPipe, passed: false });
}

function gameOver() {
  clearInterval(gameInterval);
  clearInterval(pipeInterval);
  alert("Game Over! Sua pontuação foi: " + score);
  gameStarted = false;
  resetBird();
}

function flap() {
  if (!gameStarted) {
    startGame();
  }
  velocity = jump;
}

function resetBird() {
  birdY = 150;
  velocity = 0;
  bird.style.top = birdY + "px";
}

// eventos de controle
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault(); // evitar scroll da página
    flap();
  }
});

bird.addEventListener("click", flap);

// posição inicial do pássaro
resetBird();
