var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

var correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = [...correctOrder]; // starts in order

window.onload = function () {
  shuffleArray(imgOrder); // start shuffled
  createBoard();

  document.getElementById("shuffleBtn").addEventListener("click", shuffleBoard);
  document.getElementById("restartBtn").addEventListener("click", restartBoard);
};

function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  let orderCopy = [...imgOrder]; // local copy

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = orderCopy.shift() + ".jpg";

      // Drag functionality
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      board.append(tile);
    }
  }
}

function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  if (!otherTile) return;

  // Get coordinates
  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  // Check adjacency (up, down, left, right)
  let moveLeft = r == r2 && c2 == c - 1;
  let moveRight = r == r2 && c2 == c + 1;
  let moveUp = c == c2 && r2 == r - 1;
  let moveDown = c == c2 && r2 == r + 1;
  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    // Swap images
    let temp = currTile.src;
    currTile.src = otherTile.src;
    otherTile.src = temp;

    turns += 1;
    document.getElementById("turns").innerText = turns;

    checkCompletion();
  }

  otherTile = null;
}

function checkCompletion() {
  let tiles = document.querySelectorAll("#board img");
  let isComplete = true;

  for (let i = 0; i < tiles.length; i++) {
    let expected = i + 1 + ".jpg";
    let actual = tiles[i].src.substring(tiles[i].src.lastIndexOf("/") + 1);
    if (expected !== actual) {
      isComplete = false;
      break;
    }
  }

  if (isComplete) {
    document.getElementById("message").innerText = "Puzzle Completed!";
  } else {
    document.getElementById("message").innerText = "";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleBoard() {
  shuffleArray(imgOrder);
  turns = 0;
  document.getElementById("turns").innerText = turns;
  document.getElementById("message").innerText = "";
  createBoard();
}

function restartBoard() {
  imgOrder = [...correctOrder]; // reset to solved
  turns = 0;
  document.getElementById("turns").innerText = turns;
  document.getElementById("message").innerText = "";
  createBoard();
}
