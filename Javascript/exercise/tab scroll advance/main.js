window.addEventListener('load',function() {
    const tab = document.querySelector('.tab');
    const list = document.querySelector('.list');
    const item = document.querySelectorAll('.item');
    const nextItem = document.querySelector('.next-icon');
    const previousItem = document.querySelector('.previous-icon');
    let widthScrollBar = list.scrollWidth - list.offsetWidth;//tính độ rộng của scrollBar
    [...item].forEach((item) => item.addEventListener('click',handlActive));
    function handlActive(e) {
        //xóa active rồi add active vô
        [...item].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        //do tab có position là relative nên item nó có offsetLeft theo tab
        let itemLeft = e.target.offsetLeft;
        list.scroll(itemLeft/2.5,0)//ấn cho nó di chuyển qua
        //nếu itemLeft lớn hơn 0 thì mình cho hiện lên ngược lại cho ẩn xuống
        if(itemLeft>0) {
            previousItem.classList.remove('disable');
        }else {
            previousItem.classList.add('disable');
        }
        //nếu mình ấn item cuối thì ẩn nextIcon ngược lại hiện lên
        if(e.target === [...item][[...item].length-1]) {
            nextItem.classList.add('disable');
        }else {
            nextItem.classList.remove('disable');
        }
    }
    list.addEventListener('wheel',function(e) {//sư kiện wheel active khi ta cuộn chuột
        //cuộn cho nó chạy qua lại
        let delta = e.deltaY;
        delta+=95;
        console.log(delta);
        this.scrollLeft = delta;
        //cuộn tới cuối ẩn nextIcon ngược lại
        if(Math.ceil(list.scrollLeft) >= widthScrollBar) {
            nextItem.classList.add('disable');
        }else {
            nextItem.classList.remove('disable');
        }
        //cuộn tới đầu sẽ ẩn previousIcon ngược lại
        if(list.scrollLeft<=0) {
            previousItem.classList.add('disable');
        }else {
            previousItem.classList.remove('disable');
        }
    })
    nextItem.addEventListener('click',function(e) {
        list.scrollLeft+=50;
        //ấn tới cuối thì ẩn nextIcon
        if(Math.ceil(list.scrollLeft) >= widthScrollBar) {
            nextItem.classList.add('disable');
        }else {//không tới cuối hiện previousIcon
            previousItem.classList.remove('disable');
        }
    })
    previousItem.addEventListener('click',function(e) {
        list.scrollLeft-=50;
        //nhấn đến Item đầu sẽ ẩn previousIcon
        if(Math.floor(list.scrollLeft) <= 0) {
            previousItem.classList.add('disable');
        }else {//ngược lại sẽ hiện nextIcon
            nextItem.classList.remove('disable');
        }
    })
})