const accHeader = document.querySelectorAll('.accordion-header');
// const accContent = document.querySelectorAll('.accordion-content');
// const icon = document.querySelectorAll('.accordion-icon');
[...accHeader].forEach((item) => {
    item.addEventListener('click',handlesAcc);
})
function handlesAcc(e) {
    let accContent = e.currentTarget.nextElementSibling;
    accContent.classList.toggle('is-shown');
    let icon = e.currentTarget.lastElementChild;
    if(icon.getAttribute('name') !== 'chevron-up-outline') {
        icon.setAttribute('name','chevron-up-outline');
    }else {
        icon.setAttribute('name','chevron-down-outline');
    }
}
//<ion-icon name="chevron-up-outline"></ion-icon>