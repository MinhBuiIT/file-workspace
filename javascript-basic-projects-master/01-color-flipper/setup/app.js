const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('button');
const color = document.querySelector('.color');
btn.addEventListener('click', function() {
    let getColor = colors[getRandomColor()];
    document.body.style.backgroundColor = getColor;
    color.textContent = getColor;
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}