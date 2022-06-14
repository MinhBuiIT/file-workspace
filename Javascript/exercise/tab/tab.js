const item = document.querySelectorAll('.item');
const content = document.querySelectorAll('.tab-content');
[...item].forEach((item) => item.addEventListener('click',handleTab));
function handleTab(event) {
    [...item].forEach((item) => item.classList.remove('active'));//lặp qua xóa class active
    event.target.classList.add('active');//click cái nào thì thêm class active vào đó
    let number = event.target.dataset.tab;//lấy data của thẻ click vào
    // console.log(number);
    [...content].forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-tab') === number) {
            item.classList.add('active');
        }
    })
    // [...content].forEach(item => item.classList.remove('active'));
    // [...content][number-1].classList.add('active');
}
//[...item] chuyển NodeList thành array