const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset-match');
const cellDivs = document.querySelectorAll('.game-cell');


let gameIsLive = true;
let xMove = true;


function resetClicked(e){
    for (const cellDiv of cellDivs){
        cellDiv.innerText = ''
    }
    
    for (var i = 0; i < cellDivs.length; i++) {
        cellDivs[i].className = 'game-cell'
    }

    for (const cellDiv of cellDivs){
        cellDiv.addEventListener('click', cellClicked)
    }

    statusDiv.innerText = "X's move"
    statusDiv.setAttribute('class', 'status')
}

function winnerPrinting(){
    if (statusDiv.innerText == "O's move"){
        statusDiv.innerText = "X won the game!";
    } else if (statusDiv.innerText == "X's move"){
        statusDiv.innerText = "O won the game!";
    }
   
}

function winnerHighlighting(cell_1, cell_2, cell_3){
    cell_1.className = 'game-cell game-cell-winning';
    cell_2.className = 'game-cell game-cell-winning';
    cell_3.className = 'game-cell game-cell-winning';

    statusDiv.setAttribute('class', 'status game-cell-winning')


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
        statusDiv.innerText = "It is the draw!"
    }
}

function cellClicked(e){
    if (e.target.innerText == '' && xMove == true){
        e.target.innerText = 'X';
        xMove = false;
        statusDiv.innerText = "O's move"
        statusDiv.setAttribute('class', 'status x-move')

    } else if (e.target.innerText == '' && xMove == false) {
        e.target.innerText = 'O';
        xMove = true;
        statusDiv.innerText = "X's move"
        statusDiv.setAttribute('class', 'status o-move')
        
    }
    winnerChecking()

}


resetDiv.addEventListener('click', resetClicked)

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', cellClicked)
}
