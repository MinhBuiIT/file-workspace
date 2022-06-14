const tabItem = document.querySelectorAll('.tab-item');
const tabList = document.querySelector('.tab-list');
const tabIconLeft = document.querySelector('.tab-left');
const tabIconRight = document.querySelector('.tab-right');
let scrollWidthList = tabList.scrollWidth -tabList.clientWidth;
let moveLeng = tabList.scrollLeft;
[...tabItem].forEach((item) => item.addEventListener('click',handlAddActive));
function handlAddActive(e) {
    [...tabItem].forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
    let x = e.target.offsetLeft - tabList.offsetLeft;
    tabList.scroll(x/1.8,0);
    if(x>0) {
        tabIconLeft.classList.remove('disable');
    }else {
        tabIconLeft.classList.add('disable');
    }
    let leftLastItem = [...tabItem][[...tabItem].length-1].offsetLeft-tabList.offsetLeft;
    if(x===leftLastItem) {
        tabIconRight.classList.add('disable');
    }else {
        tabIconRight.classList.remove('disable');
    }
}
tabList.addEventListener('wheel',function(e) {
    let delta = e.deltaY;
    delta=delta*2.5;
    tabList.scrollLeft = delta;
    if(Math.ceil(tabList.scrollLeft) >= scrollWidthList) {
        tabIconRight.classList.add('disable');
    }else {
        tabIconRight.classList.remove('disable');
    }
    if((tabList.scrollLeft) > 0) {
        tabIconLeft.classList.remove('disable');
    }else {
        tabIconLeft.classList.add('disable');
    }
});
tabIconRight.addEventListener('click',function(e) {
    let moveLeng = tabList.scrollLeft;
    const num = 50;
    moveLeng+=num;
    if(Math.ceil(tabList.scrollLeft) === scrollWidthList) {
        tabIconRight.classList.add('disable');
    }
    if(tabList.scrollLeft >= 0) {
        tabIconLeft.classList.remove('disable');
    }
    tabList.scroll(moveLeng,0)
})
tabIconLeft.addEventListener('click',function(e) {
    let moveLeng = tabList.scrollLeft;
    const num = 50;
    moveLeng-=num;
    if(tabList.scrollLeft === 0) {
        tabIconLeft.classList.add('disable');
    }
    if(tabList.scrollLeft <= tabList.scrollWidth -tabList.clientWidth) {
        tabIconRight.classList.remove('disable');
    }
    tabList.scroll(moveLeng,0)
})