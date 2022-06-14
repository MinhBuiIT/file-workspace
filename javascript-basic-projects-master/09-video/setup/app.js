// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const video = document.querySelector('.video-container');
const btnSwitch = document.querySelector('.switch');
const load = document.querySelector('.load');
window.addEventListener('load',function() {
    load.classList.add('hide');
})
btnSwitch.addEventListener('click',function(e) {
    if(!this.classList.contains('slide')) {
        this.classList.add('slide');
        video.pause();
    }else {
        this.classList.remove('slide');
        video.play();
    }
})