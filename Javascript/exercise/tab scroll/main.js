window.addEventListener('load',function() {
    const item = document.querySelectorAll('.item');
    const list = document.querySelector('.list');
    const tab = document.querySelector('.tab');
    let tabLeft = tab.offsetLeft;
    console.log(tabLeft);
    [...item].forEach((item) => item.addEventListener('click',handleActive));
    function handleActive(e) {
        [...item].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        let x = e.target.offsetLeft - tabLeft;
        console.log(x);
        list.scroll(x/1.8,0);
    }
})