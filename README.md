# Snake Game

## Live Demo

Check out the live demo [here](https://negrea-andrei.github.io/snake_game/).

This is a classic implementation of the snake game using HTML, CSS, and JavaScript. The game features a snake that moves around a grid, eating food to grow longer. Your goal is to collect as much food as possible without colliding with the boundaries of the game board or the snake's own body.

## Instructions

1. Press the `Space` bar to start the game.
2. Use the arrow keys (`Up`, `Down`, `Left`, `Right`) to control the snake's direction.
3. Collect food (displayed as the game's logo) to increase your score and grow the snake.
4. Avoid collisions with the game board boundaries and the snake's body.

## Game Elements

### Board
The game board is represented by a grid where the snake and food move.

### Snake
The snake is initially a single segment and grows longer as it consumes food.

### Food
Food is displayed as the game's logo. When the snake eats food, it grows longer, and the player scores points.

## DOM Elements

- `game_board`: Represents the game board.
- `instructions`: Displays game instructions.
- `logo`: Game logo element.
- `score`: Displays the current score.
- `high_score`: Displays the high score achieved.

## Game Variables

- `gameStart`: Tracks whether the game has started.
- `sizeGameBoard`: Size of the game board grid.
- `gameSpeedDelay`: Interval delay for the game loop.
- `snake`: Array representing the snake's segments.
- `food`: Object holding the coordinates of the food.
- `direction`: Current direction of the snake.
- `points`: Current player score.
- `highScore`: Highest score achieved.
- `gameInterval`: Interval variable for the game loop.

## Functions

### `draw()`
Main drawing function that updates the game board, snake, food, score, and high score.

### `move()`
Handles snake movement and logic for collision with food or boundaries.

### `collision()`
Checks for collisions with boundaries or the snake's body, triggering a reset if necessary.

### `startGame()`
Initializes the game and starts the game loop.

### `reset()`
Resets the game state after a collision, allowing the player to start a new game.

### `pressArrows(event)`
Handles arrow key presses for controlling the snake's direction and starting the game.

### `generateFood()`
Generates random coordinates for the food on the game board.

### `createGameElement(tag, className)`
Creates a game element (div or img) with the specified tag and class name.

### `setPosition(element, position)`
Sets the position of a game element on the game board grid.

### `updateScore()`
Updates the displayed score based on the length of the snake.

### `updateHighScore()`
Updates and displays the high score when a new high score is achieved.
