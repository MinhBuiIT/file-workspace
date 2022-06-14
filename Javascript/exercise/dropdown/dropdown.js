const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownList = document.querySelector('.dropdown-list');
const dropItem = document.querySelectorAll('.dropdown-item');
const dropdownSelectText = document.querySelector('.dropdown-select-text');
const dropdown = document.querySelector('.dropdown');
const iconSelect = document.querySelector('.icon-select');
dropdownSelect.addEventListener('click',function() {
    dropdownList.classList.toggle('is-shown');
    iconSelect.classList.toggle('fa-caret-up');
});
[...dropItem].forEach(item => item.addEventListener('click',function(e) {
    let text = e.target.textContent;
    dropdownSelectText.textContent = text;
    dropdownList.classList.remove('is-shown');
    iconSelect.classList.toggle('fa-caret-up');

}))
document.addEventListener('click',function(e) {
    console.log(e.target);
    if(!dropdown.contains(e.target)) {
        dropdownList.classList.remove('is-shown');
    }
})