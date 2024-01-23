const board = document.getElementById("game_board");

const sizeGameBoard = 30;

let snake = [{ x: 15, y: 15 }];

let food = generateFood();

function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood()
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

function generateFood() {
  const x = Math.floor(Math.random() * sizeGameBoard) + 1;
  const y = Math.floor(Math.random() * sizeGameBoard) + 1;
  return { x, y };
}

draw()
