const accordionHeader = document.querySelectorAll('.accordion-header');
[...accordionHeader].forEach(item => item.addEventListener('click',showAccContent));
function showAccContent(e) {
    const content = e.currentTarget.nextElementSibling;
    console.log(content.scrollHeight);//lay do cao ca padding
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle('acitve');
    if(!content.classList.contains('active')) {
    content.style.height = `${0}px`;
    }
}