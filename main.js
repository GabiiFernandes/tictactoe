const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

const tiles = document.querySelectorAll(".tile");
const winningMessage = document.querySelector(".winning-message");
const btn = document.querySelector(".winning-button")
let circleTime;
let countCells = 0
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.addEventListener('DOMContentLoaded', () => {
    tiles.forEach((tile) => {
        tile.addEventListener('click', handleClick, {once : true});
    })
})

btn.addEventListener("click", function() {
    location.reload();
})

function handleClick (element){
    //verifica classe
    const cell = element.target;
    console.log(cell)
    const classToAdd = circleTime ? 'o' : 'x';

    countCells = 0
    circleTime = !circleTime
    cell.classList.add(classToAdd);
    const isWinner = checkWin(classToAdd);
    const draw = checkDraw();

    if (isWinner || draw) {
        winningMessage.classList.add('show-winning-message')
    }
}

function checkWin(CurrentClass) {
    return winConditions.some((condition) => {
        return condition.every((index) => {
            return tiles[index].classList.contains(CurrentClass);
        })
    })
}

function checkDraw() {
    tiles.forEach((tile) => {
        if (tile.classList.contains('o') || tile.classList.contains('x')) {
            countCells ++;
            console.log(tile.classList)
        }
    })
    if (countCells == 9) {
        return true;
    } else {
        return false;
    }

}