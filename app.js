const statusText = document.querySelector('.status');
const resetMatchDiv = document.querySelector('.reset-match');
const resetGameDiv = document.querySelector('.reset-game');
const cellDivs = document.querySelectorAll('.game-cell');


let xMove = true;

var xPoints = 0;
var oPoints = 0;

function resetMatchClicked(e){
    for (const cellDiv of cellDivs){
        cellDiv.innerText = ''
    }
    
    // WINNING CELLS STYLE DELETING
    for (var i = 0; i < cellDivs.length; i++) {
        cellDivs[i].className = 'game-cell'
    }

    // ABILITY TO CLICK CELL ADDING
    for (const cellDiv of cellDivs){
        cellDiv.addEventListener('click', cellClicked)
    }

    statusText.innerText = "X's move"

    // WINNING STATUS STYLE DELETING
    statusText.setAttribute('class', 'status')

    if (xPoints == 5 || oPoints == 5){
        oPoints = 0;
        xPoints = 0;
        document.getElementById('x-score').innerText = xPoints
        document.getElementById('o-score').innerText = oPoints
    }
}

function resetGameClicked(e){
    oPoints = 0;
    xPoints = 0;
    document.getElementById('x-score').innerText = xPoints
    document.getElementById('o-score').innerText = oPoints
    resetMatchClicked(e)
}


function winnerPrinting(){

    if (statusText.innerText == "O's move"){
        statusText.innerText = "X won the match!";
        document.getElementById('x-score').innerText = '';
        xPoints += 1;
        document.getElementById('x-score').innerText += xPoints;

        if (xPoints == 5){
            statusText.innerText = "X won the game!";
        }

    } else if (statusText.innerText == "X's move"){
        statusText.innerText = "O won the match!";
        document.getElementById('o-score').innerText = '';
        oPoints += 1;
        document.getElementById('o-score').innerText += oPoints;

        if (oPoints == 5){
            statusText.innerText = "O won the game!";
        }
    }
}


function winnerHighlighting(cell_1, cell_2, cell_3){
    cell_1.className = 'game-cell game-cell-winning';
    cell_2.className = 'game-cell game-cell-winning';
    cell_3.className = 'game-cell game-cell-winning';

    statusText.setAttribute('class', 'status game-cell-winning')

    for (const cellDiv of cellDivs){
        cellDiv.removeEventListener('click', cellClicked)
    }
}

function winnerChecking(){
    const top_left = cellDivs[0].innerText;
    const top_middle = cellDivs[1].innerText;
    const top_right = cellDivs[2].innerText;
    const middle_left = cellDivs[3].innerText;
    const middle = cellDivs[4].innerText;
    const middle_right = cellDivs[5].innerText;
    const bottom_left = cellDivs[6].innerText;
    const bottom_middle = cellDivs[7].innerText;
    const bottom_right = cellDivs[8].innerText;

    if (top_left == top_middle && top_middle == top_right && top_middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[0], cellDivs[1], cellDivs[2])
    } else if (middle_left == middle && middle == middle_right && middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[3], cellDivs[4], cellDivs[5])
    } else if (bottom_left == bottom_middle && bottom_middle == bottom_right && bottom_middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[6], cellDivs[7], cellDivs[8])
    } else if (top_left == middle_left && middle_left == bottom_left && middle_left != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[0], cellDivs[3], cellDivs[6])
    } else if (top_middle == middle && middle == bottom_middle && middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[1], cellDivs[4], cellDivs[7])
    } else if (top_right == middle_right && middle_right == bottom_right && middle_right != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[2], cellDivs[5], cellDivs[8])
    } else if (top_left == middle && middle == bottom_right && middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[0], cellDivs[4], cellDivs[8])
    } else if (top_right == middle && middle == bottom_left && middle != ''){
        winnerPrinting();
        winnerHighlighting(cellDivs[2], cellDivs[4], cellDivs[6])
    } else if (top_left != '' && top_middle != '' && top_right != '' && 
               middle_left != '' && middle != '' && middle_right != '' &&
               bottom_left != '' && bottom_middle != '' && bottom_right != ''){
            statusText.innerText = "It is the draw!"
    }
}

function cellClicked(e){
    if (e.target.innerText == '' && xMove == true){
        e.target.innerText = 'X';
        xMove = false;
        statusText.innerText = "O's move"
        statusText.setAttribute('class', 'status x-move')

    } else if (e.target.innerText == '' && xMove == false) {
        e.target.innerText = 'O';
        xMove = true;
        statusText.innerText = "X's move"
        statusText.setAttribute('class', 'status o-move')
        
    }
    winnerChecking()
}

document.getElementById('x-score').innerText = xPoints
document.getElementById('o-score').innerText = oPoints

resetMatchDiv.addEventListener('click', resetMatchClicked)
resetGameDiv.addEventListener('click', resetGameClicked)

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', cellClicked)
}
