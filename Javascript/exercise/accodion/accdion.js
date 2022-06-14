const accodion = document.querySelectorAll('.accodion-heading');
// const icon = document.querySelectorAll('.icon');
[...accodion].forEach((item) => item.addEventListener('click',handleAccodion));
const active = "active";
function handleAccodion(event) {
    const nextAccHeading = event.target.nextElementSibling;
    nextAccHeading.classList.toggle(active);
    const heightContent = nextAccHeading.scrollHeight;
    nextAccHeading.style.height = heightContent + 'px';
    if(!nextAccHeading.classList.contains(active)) {
        nextAccHeading.style.height = 0 + 'px';
    }
    // [...icon].forEach((item) => {
    //     if(event.target === item.parentNode){
    //         item.classList.toggle('fa-angle-down');
    //         item.classList.toggle('fa-angle-up');
    //     }
    // })
    const icon = event.target.querySelector('.icon');//truy suất đến phần tử click vào có phần tử con có class la icon
    icon.classList.toggle('fa-angle-down');
    icon.classList.toggle('fa-angle-up');
}
