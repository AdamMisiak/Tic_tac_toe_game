const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');


let gameIsLive = true;
let xMove = true;


function resetClicked(e){
    for (const cellDiv of cellDivs){
        cellDiv.innerText = ''
    }
}

function winnerPrinting(){
    if (statusDiv.innerText == "O's move"){
        statusDiv.innerText = "X won a game!";
    } else if (statusDiv.innerText == "X's move"){
        statusDiv.innerText = "O won a game!";
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
    } else if (middle_left == middle && middle == middle_right && middle != ''){
        winnerPrinting();
    } else if (bottom_left == bottom_middle && bottom_middle == bottom_right && bottom_middle != ''){
        winnerPrinting();
    } else if (top_left == middle_left && middle_left == bottom_left && middle_left != ''){
        winnerPrinting();
    } else if (top_middle == middle && middle == bottom_middle && middle != ''){
        winnerPrinting();
    } else if (top_right == middle_right && middle_right == bottom_right && middle_right != ''){
        winnerPrinting();
    } else if (top_left == middle && middle == bottom_right && middle != ''){
        winnerPrinting();
    } else if (top_right == middle && middle == bottom_left && middle != ''){
        winnerPrinting();
    } else {
        console.log('nikt')
    }
}


function cellClicked(e){
    const location = e.target.classList[1];
    if (e.target.innerText == '' && xMove == true){
        e.target.innerText = 'X';
        xMove = false;
        statusDiv.innerText = "O's move"

    } else if (e.target.innerText == '' && xMove == false) {
        e.target.innerText = 'O';
        xMove = true;
        statusDiv.innerText = "X's move"
    }
    winnerChecking()

}


resetDiv.addEventListener('click', resetClicked)

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', cellClicked)
}