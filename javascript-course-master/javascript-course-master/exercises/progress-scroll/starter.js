window.addEventListener('load',function() {
    const progress = document.querySelector('.progress');
    window.addEventListener('scroll',function(e) {
        let height = window.pageYOffset;
        let heightScrollBar = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let rotia = (height/heightScrollBar)*100;
        progress.style.width = `${rotia}%`;
    })
})