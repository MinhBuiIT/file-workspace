const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');
[...tabItem].forEach(item => item.addEventListener('click',handleItem));
function removeClass(nameArr,className) {
    [...nameArr].forEach(item => item.classList.remove(className));
}
function handleItem(event) {
    removeClass(tabItem,'active');
    event.target.classList.add('active');
    let numberData = event.target.dataset.tab;
    [...tabContent].forEach(item => {
        removeClass(item,'active');
    })
}