const tabItem = document.querySelectorAll('.tab-item');
[...tabItem].forEach(item => item.addEventListener('click',handleItem));
function handleItem(event) {
    event.target.classList.add('active');
}