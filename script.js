const DEFAULT_COLOR = "#000000";
let currentColor = DEFAULT_COLOR;

// inital generation
generateGrid(16);

// generate grid
function generateGrid(grid_size) {
    let cell_size = 100 / grid_size;
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            let cell = document.createElement('div');
            cell.classList.add("cell")
            cell.style.height = cell.style.width = cell_size + "%"; 
            document.querySelector(".grid").appendChild(cell);
        }
    }

    // event listeners for each grid
    let cells = document.querySelectorAll(".cell");
    console.log(cells);
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", changeColor);
    });
}

// change color of grid
function changeColor(e) {
    let base = Number(e.target.style.opacity);
    if (base < 1) {
        e.target.style.opacity = base + 0.1;
        e.target.style.backgroundColor = currentColor;
    }
}

// startOver button
const startOver = document.getElementById('restart');
startOver.addEventListener('click', () => {
    document.querySelector(".grid").textContent = '';

    let grid_size;
    do {
        grid_size = parseInt(prompt("Enter new grid size (1~200):", "16"));
    } while (isNaN(grid_size) || grid_size < 1 || grid_size > 200);

    currentColor = DEFAULT_COLOR;
    document.getElementById("colorPicker").value = currentColor;
    generateGrid(grid_size);
});


// color picker
document.getElementById("colorPicker").onchange = (e) => {
    currentColor = e.target.value;
}
