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

function createSquares() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        let square = document.createElement("div");
        square.className = "square";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "green"
        })
        row.appendChild(square);
    })
}

function createGrid(num) {
    createRows(num);
    for (let i=1; i <= num; i++) {
        createSquares();
    }
}

function changeSquareColor() {
    
}

createGrid(16);