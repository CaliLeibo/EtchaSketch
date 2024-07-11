const container = document.querySelector('.sketch-container');

createDefaultGrid();




function createDefaultGrid() {
    
    container.textContent = ' ';    

    for (let i = 0; i < 16; i++){
        const col = document.createElement('div');
        col.className = 'grid-col';
        container.appendChild(col);
        for (let i = 0; i < 16; i++){
            const box = document.createElement('div');
            box.className = 'block';
            col.appendChild(box);
        }

    }
}