const accordionHeader = document.querySelectorAll('.accordion-header');
[...accordionHeader].forEach(item => item.addEventListener('click',showAccContent));
function showAccContent(e) {
    console.log(e.currentTarget);
    const content = e.currentTarget.nextElementSibling;
    console.log(content);
}