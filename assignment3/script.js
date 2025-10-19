//This JavaScript code creates a 3x3 image-based sliding puzzle that users can interact with by dragging and dropping tiles.
//The code integrates **usability principles, visual calmness, and consistent feedback**, aligning with a gentle,
//pastel themed aesthetic (as seen in the linked CSS).

//This design aims to be approachable and stress-free—drawing from **mindfulness-based UI values** often found in
//well-being apps and calming interaction games like "Alto’s Odyssey" and "Monument Valley" (ustwo games, 2014–2018).

//By integrating gentle colors (#a597ff and #c9c1ff), soft feedback, and simple movement logic,
//this project fosters focus and small satisfaction moments through completion and user control.

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

  //Usability and Feedback:**
  //Users receive immediate visual feedback through tile swapping and a
  //“Puzzle Completed!” message upon success.
  //The “Turns” counter provides progress awareness—a subtle motivator that keeps engagement

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
      //Interaction Design:
      //Drag and drop mechanics offer direct manipulation feedback
      //This choice allows users to intuitively understand how tiles move without explicit tutorials.
      //Adjacency constraints (only up/down/left/right swaps) prevent chaotic motion,
      //reinforcing a sense of gentle order and predictability which is core to mindful game design.
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

//Structure and Learnability:**
//The interface includes clearly labeled shuffle and restart buttons.
//Both use consistent color and typography for affordance and readability.
//The layout is centered and minimalistic, avoiding distractions and guiding focus to the puzzle itself.

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

//Implementation Challenges:**
//One challenge lies in **drag sensitivity and mobile compatibility since HTML5 drag events
//perform inconsistently across touch devices. A future version could employ pointer events
//or custom gesture listeners to improve accessibility and tactile precision.

//Future Benefits and Scalability:**
//This prototype demonstrates scalable potential images can be dynamically loaded,
//puzzle sizes adjusted, and mechanics gamified (e.g., time tracking, levels, or achievement badges).
//The same feedback system could extend into educational or wellness apps
//where reflective interaction and visual calm reinforce learning or relaxation.
