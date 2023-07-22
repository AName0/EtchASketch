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
        row.appendChild(square);
    })
}

createRows(16);
createSquares();