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

}


resetDiv.addEventListener('click', resetClicked)

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', cellClicked)
}