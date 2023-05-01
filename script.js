let player1 = Player("Dillon", "O");
let player2 = Player("Lauren", "X");
let currentPlayer = player1;

let gameBoard = (function(){
    let array = new Array(9);
    array[0] = "X";
    array[1] = "O"

    let cells = [document.getElementById("cell1"),
        document.getElementById("cell2"),
        document.getElementById("cell3"),
        document.getElementById("cell4"),
        document.getElementById("cell5"),
        document.getElementById("cell6"),
        document.getElementById("cell7"),
        document.getElementById("cell8"),
        document.getElementById("cell9"),]

    return {array, cells}
}());

function Player (name, marker){
    this.name = name;
    this.marker = marker
    return {name, marker}
}

function updateGameBoard(array){
    gameBoard.cells[0].textContent = array[0];
    gameBoard.cells[1].textContent = array[1];
    gameBoard.cells[2].textContent = array[2];
    gameBoard.cells[3].textContent = array[3];
    gameBoard.cells[4].textContent = array[4];
    gameBoard.cells[5].textContent = array[5];
    gameBoard.cells[6].textContent = array[6];
    gameBoard.cells[7].textContent = array[7];
    gameBoard.cells[8].textContent = array[8];
};

function placeMarker(markerArray, cellsArray){
}

updateGameBoard(gameBoard.array);