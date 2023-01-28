//Initialize gameboard
const gameBoard = (function(){
  const cells = [];

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

  return {getName, setName, getAssignedLetter, setAssignedLetter};
}

//Main module to control gameplay
const displayController = (function(){
  let player1 = Player("Dillon", "X");
  let player2 = Player("Lauren", "Y");
  const allCells = document.querySelectorAll(".grid-cell");
  let currentMarker = "X";
  gameBoard.populateGameboard();

  allCells.forEach(cell => {
    cell.addEventListener('click', function(){
      if (cell.textContent == ''){
        cell.textContent = currentMarker;
      }

      if (currentMarker == "X"){
        currentMarker = "O";
      }else{
        currentMarker = "X";
      }
      
    })
  })

})();

