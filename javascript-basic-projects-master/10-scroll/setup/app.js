// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();
// ********** close links ************
const iconMenu = document.querySelector('.icon-menu');
const nav = document.querySelector('#nav');
const home = document.querySelector('#home');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const backHome = document.querySelector('.back-home');
let linksHeight = links.offsetHeight;
// ********** fixed navbar ************
iconMenu.addEventListener('click',function(e) {
    if(linkContainer.offsetHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    }else {
        linkContainer.style.height = 0 + 'px';
    }
})

// ********** smooth scroll ************
window.addEventListener('scroll',function(e) {
    let pY = window.pageYOffset;
    if(pY > nav.offsetHeight) {
        nav.classList.add('fixed-nav');
        home.style.paddingTop = `${nav.offsetHeight}px`
    }else {
        nav.classList.remove('fixed-nav');
        home.style.paddingTop = `0`
    }
    //show back home
    if(pY>home.offsetHeight) {
        backHome.classList.add('shown');
    }else {
        backHome.classList.remove('shown');
    }
})
// select links
const scrollLink = document.querySelectorAll('.scroll-link');
scrollLink.forEach((btn) => {
    btn.addEventListener('click',function(e) {
        e.preventDefault();
        let elementName = e.target.getAttribute('href').slice(1);
        let element = document.getElementById(elementName);
        let navHeight = nav.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        if(linkContainer.offsetHeight > 27) {
            position = position - linkContainer.offsetHeight + 16;
        }
        window.scrollTo({
            left: 0,
            top: position,
          });
    })
})