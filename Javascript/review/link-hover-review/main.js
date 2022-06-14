const navLink = document.querySelectorAll('.nav-link');
const navBar = document.createElement('div');
navBar.className = 'nav-bar';
document.body.appendChild(navBar);
[...navLink].forEach((item) => item.addEventListener('mouseenter',handlesNavBar));
function handlesNavBar(e) {
    const posLink = e.target.getBoundingClientRect();
    const {top,left,width,height} = posLink;
    navBar.style.width = `${width}px`;
    navBar.style.left = `${left}px`;
    navBar.style.top = `${top+height}px`;
}
[...navLink].forEach((item) => item.addEventListener('mouseleave',function(e) {
    navBar.style.width = `0px`;
}))