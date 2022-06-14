window.addEventListener('load',function() {
    const img = document.querySelectorAll('.container img');
    window.addEventListener('scroll',function(e) {
        let scrollPageY = window.pageYOffset;
        [...img].forEach(item => {
            let imgTop = item.offsetTop;
            if(scrollPageY > imgTop - item.offsetHeight/2) {//giảm imgTop để khi cuộn nửa hình là hiện ra
                item.classList.add('img');
            }
        })
    })
})