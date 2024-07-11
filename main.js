const container = document.querySelector('.sketch-container');
let userInput = document.querySelector('.user-input');
let gridSize = parseInt(userInput.value);
const size = document.querySelector('.size-button');
const currSize = document.querySelector('.curr-size');
const error = document.querySelector('.error');
const blackButton = document.querySelector('.black-btn');
const rnbwButton = document.querySelector('.rnbw-btn');
const eraseButton = document.querySelector('.erase-btn');
let black = true;
let rnbw = false;
let erase = false;

document.addEventListener("DOMContentLoaded", function (){
    currSize.textContent = `16 x 16`;
    createGrid(16);
});

size.addEventListener('click', function(){
    userInput = document.querySelector('.user-input');
    gridSize = parseInt(userInput.value);
    if (gridSize < 2 || gridSize > 99){
        error.textContent = 'Please enter a number between 2 and 99!'        
        userInput.value = '';
    }
    else {
        currSize.textContent = `${gridSize} x ${gridSize}`;
        createGrid(gridSize);
        userInput.value = '';
    }
});

blackButton.addEventListener('click', function() {
    if (!black){
        black = true;
        rnbw = false;
        erase = false;
    }
    else if (black) {
        black = false;
    }
});

rnbwButton.addEventListener('click', function() {
    if (!rnbw){
        black = false;
        rnbw = true;
        erase = false;
    }
    else if (rnbw) {
        black = false;
    }
});

eraseButton.addEventListener('click', function() {
    if (!erase){
        erase = true;
        black = false;
        rnbw = false;
    }
    else if (erase) {
        erase = false;
    }
});

function createGrid(grid) {
    
    container.textContent = ' ';


    for (let i = 0; i < grid; i++){
        const row = document.createElement('div');
        row.className = 'grid-row';
        container.appendChild(row);
        for (let i = 0; i < grid; i++){
            const box = document.createElement('div');
            box.className = 'block';

            box.addEventListener('mouseover', () => {
                if (black){
                    box.style.background = 'black';
                }
                else if (rnbw){
                    let r = Math.floor(Math.random()*256);
                    let g = Math.floor(Math.random()*256);
                    let b = Math.floor(Math.random()*256);
                    box.style.background = `rgb(${r},${g},${b})`;
                }
                else if (erase){
                    box.style.background = 'lightgray';
                }
            })            

            row.appendChild(box);
        }
    }

}

