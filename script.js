// script that will create a 16x16 grid of divs
const container = document.querySelector(".container")

function createRows(numOfRows) {
    for (let i = 1; i <= numOfRows; i++) {
        let row = document.createElement("div");
        row.id = `row${i}`;
        row.className = "row";
        container.appendChild(row);
    }
}

function createSquares(numOfSquares) {
    const rows = document.querySelectorAll()
}

// function createGrid(dimensions) { // TODO: display these divs as a grid
//     for (let i = 0; i < (dimensions ** 2); i++) {
//         let square = document.createElement("div");
//         container.appendChild(square);
//     }
// }

createRows(16);