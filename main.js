const container = document.querySelector('.sketch-container');
createDefaultGrid();




function createDefaultGrid() {
    
    container.textContent = ' ';
    const itemWidth = parseFloat(100/256).toFixed(3);

    for (let i = 0; i < 256; i++){
        const gridBox = document.createElement('div');        

        gridBox.className = 'grid-box';
        gridBox.textContent = "";
        gridBox.style.flex = '1 0 ${itemWidth}%';
        gridBox.style.border = "solid black 1px";
        gridBox.style.maxWidth = itemWidth;
        container.appendChild(gridBox);


    }
}