// console.log('check check')
var board = []


function play(boxParam){
    var player = document.getElementById('player')
    var boxClicked = document.getElementById(boxParam)

    if(player.innerText === 'O'){
        player.innerText ='X' 
        boxClicked.innerText = 'O' 
        board[boxParam] = 'O'
    } 
    else {player.innerText = 'O' 
    boxClicked.innerText ='X'
    board[boxParam] = 'X'
}
 console.log(board)


var topLeft = board[0]
var topMiddle = board[1]
var topRight = board[2]
var leftMiddle = board[3]
var center = board[4]
var rightMiddle = board[5]
var leftBottom = board[6]
var BottomMiddle = board[7]
var rightBottom = board[8]


    if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
        alert('Winner!')
    } 
    else if(leftMiddle !== undefined && leftMiddle === center && leftMiddle === rightMiddle){
        alert('Winner!')
    }
    else if(leftBottom !== undefined && leftBottom === BottomMiddle && leftBottom === rightBottom){
        alert('Winner!')
    }
    else if(topLeft !== undefined && topLeft === leftMiddle && topLeft === leftBottom){
        alert('Winner!')
    }
    else if(topMiddle !== undefined && topMiddle === center && topMiddle === BottomMiddle){
        alert('Winner!')
    }
    else if(topRight !== undefined && topRight === rightMiddle && topRight === rightBottom){
        alert('Winner!')
    }
    else if(topLeft !== undefined && topLeft === center && topLeft === rightBottom){
        alert('Winner!')
    }
    else if(topRight !== undefined && topRight === center && topRight === leftBottom){
        alert('Winner')
    }
let boardFull = false
    for(let i = 0; i <= 8; i++){
          if(board[i] !== undefined){
              boardFull === true}
          }
    if(boardFull === true){
        alert(`Cat's Game!`)
    }
        }
        
    function boardReset(){
        
    }
