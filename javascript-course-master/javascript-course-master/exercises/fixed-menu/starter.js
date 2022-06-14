window.addEventListener('load',function() {
    function debounceFn(func, wait, immediate) {
        let timeout;
        return function () {
          let context = this,
            args = arguments;
          let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
    const header = document.querySelector('.header');
    window.addEventListener('scroll',debounceFn(function(e) {
        let heightPage = window.pageYOffset;
        let heightHeader = header.offsetHeight;
        if(heightPage>=heightHeader) {
            header.classList.add('is-fixed');
            document.body.style = `padding-top: ${heightHeader}px`;
        }else {
            header.classList.remove('is-fixed');
            document.body.style = ``;
        }
    },100))
})