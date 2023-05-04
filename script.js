let player1 = Player("Ash", "O");
let player2 = Player("Misty", "X");
let currentPlayer = player1;
let status = document.getElementById("status-footer");
let cellButtons = document.querySelectorAll(".cell");
let win = false;

let gameBoard = (function(){
    let array = new Array(9);

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

function placeMarker(markerArray){
    cellButtons.forEach(e => {
        e.addEventListener('click', function(){
            markerArray[Number(e.dataset.number)] = currentPlayer.marker;
            updateGameBoard(markerArray);
            swapPlayer(currentPlayer);
            console.log(markerArray)
            console.log(currentPlayer)
        })
    })
}

function checkForWin(markerArray){
    if (markerArray[0] == "X" && markerArray[1] == "X" && markerArray[2] == "X"){
        win = true;
    } else if (markerArray[0] == "X" && markerArray[4] == "X" && markerArray[8] == "X"){
        win = true;
    } else if (markerArray[0] == "X" && markerArray[3] == "X" && markerArray[6] == "X"){
        win = true;
    } else if (markerArray[1] == "X" && markerArray[4] == "X" && markerArray[7] == "X"){
        win = true;
    } else if (markerArray[2] == "X" && markerArray[4] == "X" && markerArray[6] == "X"){
        win = true;
    } else if (markerArray[2] == "X" && markerArray[5] == "X" && markerArray[8] == "X"){
        win = true;
    } else if (markerArray[3] == "X" && markerArray[4] == "X" && markerArray[5] == "X"){
        win = true;
    } else if (markerArray[6] == "X" && markerArray[7] == "X" && markerArray[8] == "X"){
        win = true;
    } else if (markerArray[0] == "O" && markerArray[1] == "O" && markerArray[2] == "O"){
        win = true;
    } else if (markerArray[0] == "O" && markerArray[4] == "O" && markerArray[8] == "O"){
        win = true;
    } else if (markerArray[0] == "O" && markerArray[3] == "O" && markerArray[6] == "O"){
        win = true;
    } else if (markerArray[1] == "O" && markerArray[4] == "O" && markerArray[7] == "O"){
        win = true;
    } else if (markerArray[2] == "O" && markerArray[4] == "O" && markerArray[6] == "O"){
        win = true;
    } else if (markerArray[2] == "O" && markerArray[5] == "O" && markerArray[8] == "O"){
        win = true;
    } else if (markerArray[3] == "O" && markerArray[4] == "O" && markerArray[5] == "O"){
        win = true;
    } else if (markerArray[6] == "O" && markerArray[7] == "O" && markerArray[8] == "O"){
        win = true;
    }else {
        win = false;
    }
}

function swapPlayer(){
    if (currentPlayer == player1){
        currentPlayer = player2;
    }else if(currentPlayer == player2){
        currentPlayer = player1;
    }
}


placeMarker(gameBoard.array);
//checkForWin(gameBoard.array);

