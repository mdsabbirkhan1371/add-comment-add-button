const makeGreen = document.getElementById('green');
makeGreen.onclick = makeGreedns;

function makeGreedns() {
    document.body.style.backgroundColor = 'green'
}

// another rule
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// addEventListener
const makeBlue = document.getElementById('blue-button');
makeBlue.addEventListener('click', makeBlued)
function makeBlued() {
    document.body.style.backgroundColor = 'blue'
}

// annonymous function
const goldenButton = document.getElementById('golden-buuton');
goldenButton.onclick = function () {
    document.body.style.backgroundColor = 'goldenrod'
}

// another niom
const lightBlueButton = document.getElementById('light-blue');
lightBlueButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})

// direct niom
document.getElementById('cyan').addEventListener('click', function () {
    document.body.style.backgroundColor = 'cyan'
})

