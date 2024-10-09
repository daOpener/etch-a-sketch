const grid = document.querySelector('.container');
const btnSize = document.getElementById('btn');
const btnRGB = document.getElementById('btn-rgb')
const btnRed = document.getElementById('btn-red')
const btnBlue = document.getElementById('btn-blue')
const btnGreen = document.getElementById('btn-green')
const btnReset = document.getElementById('btn-reset')
let color = "white";

btnReset.addEventListener("click", () => {
    makeGrid(16, 16);
})
function makeGrid(rows, cols) {

    grid.style.setProperty('--cols', cols);
    grid.innerHTML = '';

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div')
        div.classList.add('flex-item')
        grid.appendChild(div)

        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = typeof color === 'function' ? color() : color;
            div.style.opacity = 1;
        })
    }
}


btnSize.addEventListener("click", () => {
    let validSize = false;
    while (!validSize) {
        const enterSize = parseInt(prompt("Enter size (1-100): "));
        if (!isNaN(enterSize) && enterSize > 0 && enterSize <= 100) {
            const rows = enterSize;
            const cols = enterSize;
            makeGrid(rows, cols);
            validSize = true;
        } else {
            alert("Please enter a valid size between 1 and 100.");
        }
    }
});

function pickedColor() {
    return color
}
btnRed.addEventListener("click", () => {
    color = "red";
});

btnBlue.addEventListener("click", () => {
    color = "blue";
});

btnGreen.addEventListener("click", () => {
    color = "green";
});

btnRGB.addEventListener("click", () => {
    color = random_rgba;
})

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
makeGrid(16, 16)