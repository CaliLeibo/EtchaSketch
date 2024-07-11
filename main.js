const container = document.querySelector('.sketch-container');
const userInput = document.querySelector('.userInput');


let gridSize = userInput.value;
document.addEventListener("DOMContentLoaded", createDefaultGrid());
console.log(gridSize);

function createDefaultGrid() {
    
    container.textContent = ' ';    
    for (let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.className = 'grid-row';
        container.appendChild(row);
        for (let i = 0; i < 16; i++){
            const box = document.createElement('div');
            box.className = 'block';
            row.appendChild(box);
        }
    }

}

function createNewGrid(grid){
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