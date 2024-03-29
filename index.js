// DOM elements
const board = document.getElementById("game_board");
const instructions = document.querySelector(".instructions");
const logo = document.querySelector("#logo");
const score = document.querySelector("#score");
const highScoreText = document.querySelector("#high_score");

// Game variables
let gameStart = false;
const sizeGameBoard = 30;
let gameSpeedDelay = 150;

// Snake and food initialization
let snake = [{ x: 15, y: 15 }];
let food = generateFood();
let direction = "right";
let points = 0;
let highScore = 0;

// Game loop interval variable
let gameInterval;

// Event listener for arrow keys
document.addEventListener("keydown", pressArrows);

// Main drawing function
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
  updateHighScore();
}

// Snake drawing functions
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

function drawFood() {
  const foodElement = createGameElement("img", "food");
  foodElement.src = "./images/logo.svg";
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

// Functions related to movement and game logic
function move() {
  const headSnake = { ...snake[0] };
  switch (direction) {
    case "up":
      headSnake.y--;
      break;
    case "right":
      headSnake.x++;
      break;
    case "down":
      headSnake.y++;
      break;
    case "left":
      headSnake.x--;
      break;
  }
  snake.unshift(headSnake);
  if (headSnake.x === food.x && headSnake.y === food.y) {
    food = generateFood();
    if (gameSpeedDelay > 85) {
      gameSpeedDelay -= 5;
    } else if (gameSpeedDelay > 65) {
      gameSpeedDelay -= 3;
    } else if (gameSpeedDelay > 55) {
      gameSpeedDelay -= 1;
    }
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      move();
      collision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

function collision() {
  const head = snake[0];

  if (head.x < 1) {
    snake[0].x = sizeGameBoard;
  } else if (head.x > sizeGameBoard) {
    snake[0].x = 1;
  } else if (head.y < 1 || head.y > sizeGameBoard) {
    reset();
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      reset();
    }
  }
}

// Game initialization and control functions
function startGame() {
  gameStart = true;
  logo.style.display = "none";
  instructions.style.display = "none";
  gameInterval = setInterval(() => {
    move();
    collision();
    draw();
  }, gameSpeedDelay);
}

function reset() {
    snake = [{ x: 10, y: 10 }];
    food = generateFood();
    direction = "right";
    gameSpeedDelay = 150; 
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      move();
      collision();
      draw();
    }, gameSpeedDelay);
    updateScore();
    updateHighScore();
  }
  

// Function to handle arrow key presses
function pressArrows(event) {
  if ((!gameStart && event.code === "Space") || (!gameStart && event.key === " ")) {
    startGame();
  } else {
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
    }
  }
}

// Function to generate random food coordinates
function generateFood() {
  const x = Math.floor(Math.random() * sizeGameBoard) + 1;
  const y = Math.floor(Math.random() * sizeGameBoard) + 1;
  return { x, y };
}

// Function to create a game element (div or img)
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

// Function to set the position of a game element
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

// Function to update the displayed score
function updateScore() {
  const currentScore = snake.length - 1;
  score.innerHTML = `Score: ${currentScore.toString()}`;
}

// Function to update the displayed high score
function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.innerHTML = `High score: ${highScore.toString()}`;
  }
  highScoreText.style.display = "block";
}
