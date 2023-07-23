// script that will create a 16x16 grid of divs
const container = document.querySelector(".container");

function createRows(numOfRows) {
    for (let i = 1; i <= numOfRows; i++) {
        let row = document.createElement("div");
        row.id = `row${i}`;
        row.className = "row";
        container.appendChild(row);
    }
}

function createSquares(gridSize) {
    let length = 800/gridSize;
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        let square = document.createElement("div");
        square.className = "square";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "green";
        })
        square.style.height = length + "px";
        square.style.width = length + "px";
        row.appendChild(square);
    })
}

function createGrid(gridSize) {
    createRows(gridSize);
    for (let i=1; i <= gridSize; i++) {
        createSquares(gridSize);
    }
}

function changeGridSize() {
    let gridSize = prompt("Type in a number from 4 to 100");
    if (gridSize < 4 || gridSize > 100) {
        return ("Error: Grid size invalid")
    } else {
        createGrid(gridSize)
    }
}