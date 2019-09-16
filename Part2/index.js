console.log('The house always wins!')

var idInput = document.getElementById('idInput')
var colorInput = document.getElementById('colorInput')

// console.log(idInput)
// console.log(colorInput)

function setCard(){
    let card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
}
