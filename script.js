//Initialize gameboard
const gameBoard = (function(){
  const cells = ["X","X","X","O","O","O","X","X","X"];

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

  return {cells, populateGameboard};
})();

const Player = function(name, assignedLetter){
  this.name = name;
  this.assignedLetter; //Come back to this!!!

  function setName(name){
    this.name = name;
  }

  function getName(){
    return name;
  }

  function setAssignedLetter(assignedLetter){
    this.assignedLetter = assignedLetter;
  }

  function getAssignedLetter(){
    return assignedLetter;
  }

  function swapAssignedLetter(){
    if (assignedLetter == "X"){
      this.assignedLetter = "O";
    }else if (assignedLetter == "O"){
      this.assignedLetter = "X";
    }
  }

  return {getName, setName, getAssignedLetter, setAssignedLetter, swapAssignedLetter};
}

//Main module to control gameplay
const displayController = (function(){
  gameBoard.populateGameboard();
})();
