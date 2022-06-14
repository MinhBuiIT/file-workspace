const hambuger = document.querySelector ('.header .nav-list .hambuger');
const mobile_menu = document.querySelector ('.header .nav-list ul');
const menu_item = document.querySelectorAll ('.header .nav-list ul li a');
const header = document.querySelector ('.header.container');

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll', ()=> {
    var header_position = window.scrollY;
    if (header_position > 250) {
        header.style.backgroundColor = "#29323c"
    }else {
        header.style.backgroundColor = "transparent"

    }
})
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hambuger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});