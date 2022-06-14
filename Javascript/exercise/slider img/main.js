window.addEventListener('load',function() {
    const preIcon = document.querySelector('.icon-pre');
    const nextIcon = document.querySelector('.icon-next');
    const sliderItem = document.querySelectorAll('.slider-item');
    const sliderMain = document.querySelector('.slider-main');
    const dotsItem = document.querySelectorAll('.dot-item');
    const lengthItem = sliderItem.length;//4
    let widthItem = [...sliderItem][0].offsetWidth;
    let possitionX = 0;
    let index = 0;
    [...dotsItem].forEach(item => {
        item.addEventListener('click',function(e) {
            [...dotsItem].forEach(ite => ite.classList.remove('active'));
            e.target.classList.add('active');
            index = parseInt(e.target.dataset.index);
            possitionX = index * widthItem * (-1);
            sliderMain.style = `transform: translateX(${possitionX}px)`;
        })
    });
    nextIcon.addEventListener('click',function(e) {
        handleSlider(1);
    });
    preIcon.addEventListener('click',function(e) {
        handleSlider(-1);
    });
    function handleSlider(condition) {
        if(condition === 1) {
            if(index >= lengthItem-1) {
                index=lengthItem-1;
                return;
            }
            possitionX = possitionX - widthItem;
            sliderMain.style = `transform: translateX(${possitionX}px)`;
            index++;
        }else if(condition === -1) {
            if(index <=0) {
                index=0;
                return;
            }
            possitionX = possitionX + widthItem;
            sliderMain.style = `transform: translateX(${possitionX}px)`;
            index--;
        }
        [...dotsItem].forEach(ite => ite.classList.remove('active'));
        [...dotsItem][index].classList.add('active');
    }
})