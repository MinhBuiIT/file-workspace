const accordionHeader = document.querySelectorAll('.accordion-header');
[...accordionHeader].forEach(item => item.addEventListener('click',showAccContent));
function showAccContent(e) {
    const content = e.currentTarget.nextElementSibling;
    console.log(content.scrollHeight);//lay do cao ca padding
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle('is-active');
    if(!content.classList.contains('is-active')) {
        content.style.height = `${0}px`;
    }
    const icon = e.currentTarget.querySelector('.icon');
}