const gameBoard = (function(){
  const cells = ["X","X","X","O","O","O","X","X","X"];

  return {cells};
})();

const displayController = (function(){

})();

const Player = function(name, assignedLetter){
  return {name, assignedLetter};
}

function populateGameboard (cells){
  //Map cells to DOM variables
  const cell1 = document.getElementById("cell-1");
  const cell2 = document.getElementById("cell-2");
  const cell3 = document.getElementById("cell-3");
  const cell4 = document.getElementById("cell-4");
  const cell5 = document.getElementById("cell-5");
  const cell6 = document.getElementById("cell-6");
  const cell7 = document.getElementById("cell-7");
  const cell8 = document.getElementById("cell-8");
  const cell9 = document.getElementById("cell-9");

  //Add contents of array to the board
  cell1.textContent = gameBoard.cells[0];
  cell2.textContent = gameBoard.cells[1];
  cell3.textContent = gameBoard.cells[2];
  cell4.textContent = gameBoard.cells[3];
  cell5.textContent = gameBoard.cells[4];
  cell6.textContent = gameBoard.cells[5];
  cell7.textContent = gameBoard.cells[6];
  cell8.textContent = gameBoard.cells[7];
  cell9.textContent = gameBoard.cells[8];
}

populateGameboard();
