const container = document.querySelector('.sketch-container');
let userInput = document.querySelector('.user-input');
let gridSize = parseInt(userInput.value);
const size = document.querySelector('.size-button');
const currSize = document.querySelector('.curr-size');
const error = document.querySelector('.error');
const buttonList = document.querySelectorAll('button');
const clear = document.querySelector('.clear-btn');
let color = 'black';

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
        error.textContent = '';
        userInput.value = '';
    }
});

buttonList.forEach(button => button.addEventListener('click', function() {
            if (button.textContent === "Black"){
                color = 'black';
            }
            else if (button.textContent === "Rainbow"){
                color = 'rnbw';
            }
            else if (button.textContent === "Erase"){
                color = 'none';
            }
}));

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
                if (color === "black"){
                    box.style.background = 'black';
                }
                else if (color === "rnbw"){
                    let r = Math.floor(Math.random()*256);
                    let g = Math.floor(Math.random()*256);
                    let b = Math.floor(Math.random()*256);
                    box.style.background = `rgb(${r},${g},${b})`;
                }
                else if (color === "none"){
                    box.style.background = 'lightgray';
                }
            })

            

            row.appendChild(box);
        }
    }
    const boxes = document.querySelectorAll('.block');
    console.log(boxes);
    boxes.forEach(box => clear.addEventListener('click', function(){
        box.style.background = 'lightgray';
    }));

}

