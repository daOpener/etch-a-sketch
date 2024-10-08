const grid = document.querySelector('.container');
const btnSize = document.getElementById('btn');

function makeGrid(rows, cols) {

    grid.style.setProperty('--cols', cols);
    grid.innerHTML = '';

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div')
        div.classList.add('flex-item')
        grid.appendChild(div)

        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "red"
        })
    }
}
makeGrid(16, 16)
btnSize.addEventListener("click", event => {
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