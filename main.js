const container = document.querySelector('.sketch-container');
let userInput = document.querySelector('.user-input');
let gridSize = parseInt(userInput.value);
const size = document.querySelector('.size-button');
const currSize = document.querySelector('.curr-size');
const error = document.querySelector('.error');
const blackButton = document.querySelector('.black-btn');
const eraseButton = document.querySelector('.erase-btn');
const clearAll = document.querySelector('.clear-all');
let black = true;
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
        currSize.textContent = `${gridSize} x ${gridSize} Grid`;
        createGrid(gridSize);
        userInput.value = '';
    }
});

blackButton.addEventListener('click', function() {
    if (!black){
        black = true;
        erase = false;
    }
    else if (black) {
        black = false;
    }
});

eraseButton.addEventListener('click', function() {
    if (!erase){
        erase = true;
        black = false;
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

            box.addEventListener('mouseover', (event) => {
                if (event.buttons === 1 && black){
                    box.style.background = 'black';
                }
                else if (event.buttons === 1 && erase){
                    box.style.background = 'lightgray';
                }
            })

            row.appendChild(box);
        }
    }

}

