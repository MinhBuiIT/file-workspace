window.addEventListener('load',function() {
    const nextIcon = document.querySelector('.icon-next');
    const preIcon = document.querySelector('.icon-pre');
    const sliderMain = document.querySelector('.slider-main');
    const sliderWrap= document.querySelector('.slider-wrap');
    const sliderItem = document.querySelectorAll('.slider-item');
    const dotItem = document.querySelectorAll('.dot-item');
    let sliderItemLeng = [...sliderItem].length;
    let widthSliderWrap = sliderWrap.offsetWidth;
    let positionX = 0;
    let index = 0;
    [...dotItem].forEach((item) => item.addEventListener('click',function(e) {
        [...dotItem].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        index = parseInt(e.target.dataset.index);
        positionX = index * widthSliderWrap * (-1);
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }))
    nextIcon.addEventListener('click',debounce(function(e) {
        handleSlider(1);
    },100));
    preIcon.addEventListener('click',debounce(function(e) {
        handleSlider(-1);
    },100));
    function handleSlider(condition) {
        if(condition===1) {
            if(index >= sliderItemLeng-1) {
                index = sliderItemLeng-1;
                return;
            }
            positionX = positionX - widthSliderWrap;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }else if(condition===-1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + widthSliderWrap;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
        [...dotItem].forEach(item => item.classList.remove('active'));
        [...dotItem][index].classList.add('active');
    }
    function debounce(func, wait, immediate) {
        var timeout;
      
        return function executedFunction() {
          var context = this;
          var args = arguments;
              
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
      
          var callNow = immediate && !timeout;
          
          clearTimeout(timeout);
      
          timeout = setTimeout(later, wait);
          
          if (callNow) func.apply(context, args);
        };
      };
})