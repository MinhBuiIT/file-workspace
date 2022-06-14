const dropSelect = document.querySelector('.dropdown-select');
const dropList = document.querySelector('.dropdown-list');
const dropItem = document.querySelectorAll('.dropdown-item');
const dropdown = document.querySelector('.dropdown');
const iconSelect = document.querySelector('.icon-select');
dropSelect.addEventListener('click',function(e) {
    dropList.classList.toggle('is-shown');
    iconSelect.classList.toggle('fa-caret-up');
});
[...dropItem].forEach(item => item.addEventListener('click',function(event) {
    let text = event.target.textContent;
    dropSelect.children[0].textContent = text;
    dropList.classList.remove('is-shown');
    iconSelect.classList.toggle('fa-caret-up');
}))
document.addEventListener('click',function(e) {
    if(!dropdown.contains(e.target)) {
        dropList.classList.remove('is-shown');
    }
})

