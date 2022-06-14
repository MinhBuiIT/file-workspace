window.addEventListener('load',function() {
    const imgCover = document.querySelector('.img-cover');
    const img = document.querySelector('.img');
    const imgWrapper = document.querySelector('.img-wrapper');
    let imgWrapperWidth = imgWrapper.offsetWidth;
    let imgWrapperHeight = imgWrapper.offsetHeight;
    imgCover.addEventListener('mousemove',function(e) {
        const pX = e.pageX;
        const pY = e.pageY;
        img.style = "width:auto;height:auto;max-height:unset;max-width:unset;tranform:none";
        let imgWidth = img.offsetWidth;
        let imgHeight = img.offsetHeight;
        let spaceX = (imgWidth/2 - imgWrapperWidth)*2;
        imgWidth = imgWidth + spaceX;
        let spaceY = (imgHeight/2 - imgWrapperHeight)*2;
        imgHeight = imgHeight + spaceY;
        let roateX = imgWidth/imgWrapperWidth/2;
        let roateY = imgHeight/imgWrapperHeight/2;
        let x = (pX-imgWrapper.offsetLeft)*roateX;
        let y = (pY-imgWrapper.offsetTop)*roateY;
        img.style = `width:auto;height:auto;max-height:unset;max-width:unset;transform:none;top:${-y}px;left:${-x}px`
    })
    imgCover.addEventListener('mouseleave',function(e) {
        img.style = "";
    })
})