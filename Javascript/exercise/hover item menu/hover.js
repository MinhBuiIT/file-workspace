window.addEventListener('load', function() {
    const menuLink = document.querySelectorAll('.menu-link');
    const line = document.createElement('div');
    const menu = document.querySelector('.menu');
    line.className = 'line';
    document.body.appendChild(line);
    [...menuLink].forEach(item => item.addEventListener('mouseenter',(e) => {
        const {top,left,width,height} = e.target.getBoundingClientRect();
        line.style.width = width + 'px';
        line.style.top = top + height + 'px';
        line.style.left = left + 'px';
    }));
    menu.addEventListener("mouseleave",(e) => {
        line.style.width = 0;
    });
})