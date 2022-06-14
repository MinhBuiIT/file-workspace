//using selectors inside the element
// traversing the dom
const questionItem = document.querySelectorAll('.questions-item');
[...questionItem].forEach((item) => item.addEventListener('click',handlShown));
function handlShown(e) {
    if(e.target.matches('.btn')) {
        this.classList.toggle('shown');
        let icon = e.target.firstElementChild;
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    }
}