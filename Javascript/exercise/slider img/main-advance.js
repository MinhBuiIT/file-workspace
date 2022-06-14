function Slider() {
    this.nextIcon = document.querySelector('.icon-next');
    this.preIcon = document.querySelector('.icon-pre');
    this.sliderMain = document.querySelector('.slider-main');
    this.sliderItem = document.querySelectorAll('.slider-item');
    this.dotItem = document.querySelectorAll('.dot-item');
    this.widthSilderMain = this.sliderMain.offsetWidth;
    this.lengthSliderItem = this.sliderItem.length;
    this.index = 0;
    this.posX = 0;
    this.nextIcon.addEventListener('click', () => {
        this.handleChangeImg(1); //dùng arrow function để trỏ tới thẻ cha bao ngoài là Slider
    });
    this.preIcon.addEventListener('click', () => {
        this.handleChangeImg(-1);
    });
    [...this.dotItem].forEach((item) => item.addEventListener('click', (e) => {
        this.handleDotItem(e);
    }));
}
new Slider();
Slider.prototype.handleChangeImg = function(condition) {
    if (condition === 1) {
        //nextIcon
        this.index++; //4
        if (this.index > this.lengthSliderItem - 1) {
            this.index = this.lengthSliderItem - 1;
            return;
        }
        this.posX = this.posX - this.widthSilderMain;
        this.sliderMain.style = `transform: translateX(${this.posX}px)`;
    } else if (condition === -1) {
        //preIcon
        this.index--;
        if (this.index < 0) {
            this.index = 0;
            return;
        }
        this.posX = this.posX + this.widthSilderMain;
        this.sliderMain.style = `transform: translateX(${this.posX}px)`;
    }
    [...this.dotItem].forEach(item => item.classList.remove('active'));
    [...this.dotItem][this.index].classList.add('active')
}

Slider.prototype.handleDotItem = function(e) {
    [...this.dotItem].forEach(item => item.classList.remove('active'));
    let clicked = e.target;
    clicked.classList.add('active');
    this.index = [...this.dotItem].indexOf(clicked);
    this.posX = this.index * this.widthSilderMain * (-1);
    this.sliderMain.style = `transform: translateX(${this.posX}px)`;
}