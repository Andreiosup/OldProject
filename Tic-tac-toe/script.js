
const X_CLASS='x'
const O_CLASS='o'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cellElements=Array.from(document.querySelectorAll('.cell'))
const board=document.querySelector('.board')
const winningMessage=document.querySelector('.winning-message')
const winningMessageText=document.querySelector('.winning-message-text')
const restartButton=document.querySelector('.restart-button')

let cellStates=Array.from(Array(9).keys())
let num=0
startGame()

function startGame(){
    cellStates=Array.from(Array(9).keys())
    console.log(cellStates)
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.addEventListener('click',handlePlayerTurn)
    });
    winningMessage.classList.remove('show')
}
function handlePlayerTurn(e){
    let cell=e.target
    if(num%2==0){
        cellStates[cell.id]=X_CLASS
        placeMark(cell,X_CLASS)
    }else{
        cellStates[cell.id]=O_CLASS
        placeMark(cell,O_CLASS)
    }
    num++

    let gameWon=checkWin(cellStates,X_CLASS)
    let isFullGrid=fullGrid(cellStates)

    if (gameWon) handleWin(O_CLASS)
    if (isFullGrid) handleWin()
}
function fullGrid(cellStates){
    for (cellState of cellStates){
        if(typeof(cellState)=="number"){
            return false
        }
    }
    return true
}
function handleWin(winner=null){
    winningMessageText.innerHTML=winner==X_CLASS? "You won!":winner==O_CLASS? "You lost!": "Draw!"
    winningMessage.classList.add('show')
}
function checkWin(cellStates,player){
    let plays = cellStates.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);
    for (let [index, win] of WINNING_COMBINATIONS.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            return true
        }
    }
    return false
}

function placeMark(cell,classToAdd){
    cell.classList.add(classToAdd)
}