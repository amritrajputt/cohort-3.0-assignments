const container = document.getElementById('color-container');
const colorInput = document.getElementById('colorInput');
const addColorBtn = document.getElementById('addColor');

const applybg = () => {
    const customcolor = colorInput.value 
    if(customcolor.trim() == "") return
    document.body.style.backgroundColor = customcolor;
}

const buttons = document.querySelectorAll('.btn-color');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const color = button.textContent.trim().toLowerCase();
        document.body.style.backgroundColor = color;
    });
});