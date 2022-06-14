// const btnDecrease = document.querySelector('.btn-decrease');
// const btnReset = document.querySelector('.btn-reset');
// const btnIncrease = document.querySelector('.btn-increase');
const btn = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;

function colorValue(number) {
    if (number > 0) {
        value.style.color = 'green';
    } else if (number < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = '';
    }
}
//c1
// btnIncrease.addEventListener('click', function(e) {
//     count++;
//     colorValue(count);
//     value.textContent = count;
// })
// btnReset.addEventListener('click', function(e) {
//     count = 0;
//     colorValue(count);
//     value.textContent = count;
// })
// btnDecrease.addEventListener('click', function(e) {
//     count--;
//     colorValue(count);
//     value.textContent = count;
// })
//c2
[...btn].forEach((item) => {
    item.addEventListener('click', function(e) {
        let clicked = e.target;
        if (clicked.matches('.btn-increase')) {
            count++;
        } else if (clicked.matches('.btn-decrease')) {
            count--;
        } else {
            count = 0
        }
        colorValue(count);
        value.textContent = count;
    })
})