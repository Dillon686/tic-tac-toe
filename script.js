let player1;
let player2;
let currentPlayer;
let status = document.getElementById("status-footer");
let cellButtons = document.querySelectorAll(".cell");
let win = false;
let modalDisplay = document.querySelector("#modal");

function arrayFull(array) {
    let total = 0;
    array.forEach(i => {
        if (i == undefined){
            total += 0
        }else{
            total += 1
        }
    })

    if (total < 9){
        return false;
    }else if (total == 9){
        return true;
    }
}

let gameBoard = (function(){
    let array = new Array();

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

function clearBoard(){
    gameBoard.cells[0].textContent = "";
    gameBoard.cells[1].textContent = "";
    gameBoard.cells[2].textContent = "";
    gameBoard.cells[3].textContent = "";
    gameBoard.cells[4].textContent = "";
    gameBoard.cells[5].textContent = "";
    gameBoard.cells[6].textContent = "";
    gameBoard.cells[7].textContent = "";
    gameBoard.cells[8].textContent = "";
}

function placeMarker(markerArray){
    cellButtons.forEach(e => {
        e.addEventListener('click', function(){
            if (e.textContent != ""){
                e.textContent = e.textContent;
            }else{
                status.textContent = `It is ${currentPlayer.name}'s turn!`
                markerArray[Number(e.dataset.number)] = currentPlayer.marker;
                updateGameBoard(markerArray);
                checkForWin(gameBoard.array);
                swapPlayer(currentPlayer);
            }
            
            
        })
    })
}

function checkForWin(markerArray){
    if (markerArray[0] == "X" && markerArray[1] == "X" && markerArray[2] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[0] == "X" && markerArray[4] == "X" && markerArray[8] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[0] == "X" && markerArray[3] == "X" && markerArray[6] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[1] == "X" && markerArray[4] == "X" && markerArray[7] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[2] == "X" && markerArray[4] == "X" && markerArray[6] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[2] == "X" && markerArray[5] == "X" && markerArray[8] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[3] == "X" && markerArray[4] == "X" && markerArray[5] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[6] == "X" && markerArray[7] == "X" && markerArray[8] == "X"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[0] == "O" && markerArray[1] == "O" && markerArray[2] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[0] == "O" && markerArray[4] == "O" && markerArray[8] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[0] == "O" && markerArray[3] == "O" && markerArray[6] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[1] == "O" && markerArray[4] == "O" && markerArray[7] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[2] == "O" && markerArray[4] == "O" && markerArray[6] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[2] == "O" && markerArray[5] == "O" && markerArray[8] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[3] == "O" && markerArray[4] == "O" && markerArray[5] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (markerArray[6] == "O" && markerArray[7] == "O" && markerArray[8] == "O"){
        win = true;
        alert(`${currentPlayer.name} has won! \nClick OK to have a rematch!`);
        location.reload();
    } else if (arrayFull(gameBoard.array) == true && win == false){
        alert("It was a tie! \nClick OK to have a rematch!");
        location.reload();
    }else{
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


document.querySelector("#submit-button").onclick = function(event) {
    event.preventDefault();
    let playerOneResponse = document.getElementById("player-one");
    let playerTwoResponse = document.getElementById("player-two");
    player1 = Player(playerOneResponse.value, "X")
    player2 = Player(playerTwoResponse.value, "O")
    currentPlayer = player1;
    modalDisplay.style.display = "none";
  }

placeMarker(gameBoard.array);


