const container = document.querySelector('.sketch-container');
let userInput = document.querySelector('.user-input');
let gridSize = parseInt(userInput.value);
const size = document.querySelector('.size-button');


document.addEventListener("DOMContentLoaded", createGrid(16));

size.addEventListener("click", function(){
    userInput = document.querySelector('.user-input');
    gridSize = parseInt(userInput.value);
    createGrid(gridSize);
    console.log('Button Clicked!');
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
            row.appendChild(box);
        }
    }

}





console.log(gridSize);


