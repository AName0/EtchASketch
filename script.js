// script that will create a 16x16 grid of divs
const container = document.querySelector(".container")

function createGrid(dimensions) { // TODO: display these divs as a grid
    for (let i = 0; i < (dimensions ** 2); i++) {
        let square = document.createElement("div");
        container.appendChild(square);
    }
}

createGrid(16);