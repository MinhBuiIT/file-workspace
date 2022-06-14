const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');
[...tabItem].forEach((item) => {
    item.addEventListener('click',handlesTab);
})
function handlesTab(e) {
    [...tabItem].forEach((item) => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');
    [...tabContent].forEach((item) => {
        item.classList.remove('active');
        if(e.target.dataset.tab === item.getAttribute('data-tab')) {
            item.classList.add('active');
        }
    })
}