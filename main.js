const container = document.querySelector('.sketch-container');

createDefaultGrid();




function createDefaultGrid() {
    
    container.textContent = ' ';    

    for (let i = 0; i < 5; i++){
        const row = document.createElement('div');
        row.className = 'grid-row';
        container.appendChild(row);
        for (let i = 0; i < 5; i++){
            const box = document.createElement('div');
            box.className = 'block';
            row.appendChild(box);
        }

    }
}