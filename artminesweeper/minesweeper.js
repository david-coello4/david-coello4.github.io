// Constants
const COLS = 10;
const ROWS = 10;
const TOTAL_MINES = 10;
const CELL_SIZE = 40;

// Game state
let grid;
let gameOver;

function setup() {
  createCanvas(COLS * CELL_SIZE, ROWS * CELL_SIZE);
  createGrid();
  gameOver = false;
}

function createGrid() {
  grid = [];
  for (let i = 0; i < COLS; i++) {
    grid[i] = [];
    for (let j = 0; j < ROWS; j++) {
      grid[i][j] = {
        revealed: false,
        isMine: false,
        neighbors: 0
      };
    }
  }
  placeMines();
  countNeighbors();
}

function placeMines() {
  let totalPlaced = 0;
  while (totalPlaced < TOTAL_MINES) {
    let x = floor(random(COLS));
    let y = floor(random(ROWS));
    if (!grid[x][y].isMine) {
      grid[x][y].isMine = true;
      totalPlaced++;
    }
  }
}

function countNeighbors() {
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      if (!grid[x][y].isMine) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            let neighborX = x + i;
            let neighborY = y + j;
            if (neighborX >= 0 && neighborX < COLS && neighborY >= 0 && neighborY < ROWS) {
              if (grid[neighborX][neighborY].isMine) {
                count++;
              }
            }
          }
        }
        grid[x][y].neighbors = count;
      }
    }
  }
}

function gameOverAction() {
  gameOver = true;
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      grid[x][y].revealed = true;
    }
  }
}

function revealEmpty(x, y) {
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS && !grid[x][y].revealed) {
    grid[x][y].revealed = true;
    if (grid[x][y].neighbors === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let neighborX = x + i;
          let neighborY = y + j;
          revealEmpty(neighborX, neighborY);
        }
      }
    }
  }
}

function mousePressed() {
  if (!gameOver) {
    let x = floor(mouseX / CELL_SIZE);
    let y = floor(mouseY / CELL_SIZE);
    if (!grid[x][y].revealed) {
      if (grid[x][y].isMine) {
        gameOverAction();
      } else {
        revealEmpty(x, y);
      }
    }
  }
}

function draw() {
  background(255);
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      stroke(0);
      noFill();
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      if (grid[x][y].revealed) {
        if (grid[x][y].isMine) {
          fill(255, 0, 0);
          ellipse(x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE * 0.5);
        } else {
          fill(200);
          rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          if (grid[x][y].neighbors > 0) {
            textAlign(CENTER);
            textSize(20);
            fill(0);
            text(grid[x][y].neighbors, x * CELL_SIZE + CELL_SIZE / 2, y * CELL_SIZE + CELL_SIZE / 2 + 8);
          }
        }
      }
    }
  }
}
