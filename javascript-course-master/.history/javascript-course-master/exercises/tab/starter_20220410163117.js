const tabItem = document.querySelectorAll('.tab-item');
[...tabItem].forEach(item => item.addEventListener('click',handleItem));
function removeClass(nameArr,className) {
    [...nameArr].forEach(item => item.classList.remove(className));
}
function handleItem(event) {
    removeClass(tabItem,'active');
    event.target.classList.add('active');
}