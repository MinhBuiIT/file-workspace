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
const header = document.querySelector('.header');
window.addEventListener('scroll',debounce(function(e) {
    let heightHeader = header.offsetHeight;
    let heightScrollY = window.pageYOffset;
    if(heightScrollY>=heightHeader) {
        header && header.classList.add('is-fixed');
        document.body.style = `padding-top: ${heightHeader}px`;//phai co padding-top
    }else {
        header && header.classList.remove('is-fixed');
        document.body.style = ``;
    }
},100))