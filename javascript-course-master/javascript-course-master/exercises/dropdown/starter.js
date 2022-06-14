const dropdownSelect = document.querySelector('.dropdown__select');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownSelectIcon = document.querySelector('.dropdown__caret');
const dropdown = document.querySelector('.dropdown');
dropdownSelect.addEventListener('click',function(e) {
    dropdownList.classList.toggle('show');
    dropdownSelectIcon.classList.toggle('fa-caret-up');
});
[...dropdownItem].forEach((item) => item.addEventListener('click',function(e) {
    let text = item.firstElementChild.textContent;
    dropdownSelect.firstElementChild.textContent = text;
    dropdownList.classList.remove('show');
    dropdownSelectIcon.classList.remove('fa-caret-up');
}))
document.addEventListener('click',function(e) {
    if(!dropdown.contains(e.target)) {
        dropdownList.classList.remove('show');
        dropdownSelectIcon.classList.remove('fa-caret-up');
    }
})