const container = document.getElementById('container');
var divs = document.getElementsByClassName('grid-item');
var clr = document.getElementById('clear');
var color = document.getElementById('color');
var black = document.getElementById('black');

function createGrid(sqrs) {
    container.style.setProperty('--grid-rows', sqrs);
    container.style.setProperty('--grid-cols', sqrs);
    for (c = 0; c < (sqrs*sqrs); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
      };
};

createGrid(16);

function changeColor() { 
    Array.from(divs).forEach(div => {
    div.addEventListener('mouseenter', (e) => {
    div.style.opacity = 1;
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    });
});
};

clr.addEventListener('click', () => {
    container.innerHTML = '';
    // let newsqrs = prompt('Enter Number of Squares for New Grid');
    createGrid(slider.value);
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    container.innerHTML = '';
    createGrid(this.value);
}

function whiteToDark() {
    Array.from(divs).forEach(div => {
    div.addEventListener('mouseenter', (e) => {
    div.style.backgroundColor = '#000000';
    });
});
};

black.addEventListener('click', () => {
    whiteToDark();
});

color.addEventListener('click', () => {
    changeColor();
})