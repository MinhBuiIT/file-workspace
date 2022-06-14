window.addEventListener('load',function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click',function(e) {
        const template = `<div class="alert">
        <i class="fa fa-check icon-check"></i>
        <p class="alert-text" style="color: #333;">Congralution on completing my course</p>
    </div>`;
        document.body.insertAdjacentHTML('afterbegin',template);
        const alertSweet = document.querySelector('.alert');
        if(alertSweet) {
            setTimeout(() => {//dùng setTimeout để sau khoảng 2s nó mới xóa để alert chạy animation 2s
                alertSweet.parentNode.removeChild(alertSweet);
            },2000)
        }
    })
})