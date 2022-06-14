const accordionHeader = document.querySelectorAll('.accordion-header');
[...accordionHeader].forEach(item => item.addEventListener('click',showAccContent));
function showAccContent(e) {
    const content = e.currentTarget.nextElementSibling;
    console.log(content.scrollHeight);
}