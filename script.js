// script that will create a 16x16 grid of divs
const container = document.querySelector(".container")

function createRow(width) {
    for (let i = 0; i < width; i++) {
        let square = document.createElement("div");
        container.appendChild(square);
    }
}

createGrid(16);