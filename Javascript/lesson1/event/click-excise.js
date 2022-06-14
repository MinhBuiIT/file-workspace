const button = document.querySelector('button');
button.addEventListener('click',changeColor);
const arrColor = ['#f53b57','#0fbcf9','#ffd32a','#3c40c6','#B33771']
function changeColor() {
    // document.body.setAttribute('style','background: #ffd32a')
    document.body.style.backgroundColor = arrColor[Math.floor(Math.random() * arrColor.length)];
}