const container = document.querySelector(".container");

const gridSizeButton = document.querySelector("#gridSizeButton")
gridSizeButton.addEventListener("click", () => changeGridSize())

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
            square.style.backgroundColor = generateRandomColor();
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
        alert("Error: Grid size invalid")
        return;
    } else {
        container.innerHTML = "";
        createGrid(gridSize)
    }
}

function generateRandomColor() {
    let RGB1 = Math.floor(Math.random() * 256);
    let RGB2 = Math.floor(Math.random() * 256);
    let RGB3 = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + RGB1 + ", " + RGB2 + ", " + RGB3 + ")";
    console.log(randomColor);
    return randomColor;
}

createGrid(16);