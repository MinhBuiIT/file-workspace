const decrease = document.querySelector('.decrease-btn');
const number = document.querySelector('.number');
const increase = document.querySelector('.increase-btn');
let dataNumber = parseInt(number.textContent);
increase.addEventListener('click',function() {
    dataNumber++;
    number.textContent = dataNumber;
})
decrease.addEventListener('click',function() {
    if(dataNumber<=0) return 0;
    dataNumber--;
    number.textContent = dataNumber;
})