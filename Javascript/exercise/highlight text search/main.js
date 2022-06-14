const input = document.querySelector('.input-search');
const dropdownItem = document.querySelectorAll('.dropdown-item');
input.addEventListener('input',handlHighlight);
function handlHighlight(e) {
    let text = e.target.value.toLowerCase();
    [...dropdownItem].forEach((item) => {
        let dropdownText = item.textContent;
        let index = dropdownText.toLowerCase().indexOf(text);
        if(index>=0 && dropdownText.toLowerCase().includes(text)) {
            item.innerHTML = `${dropdownText.substring(0,index)}<span class="primary">${dropdownText.substring(index,index+text.length)}</span>${dropdownText.substring(index+text.length)}`;
        }else {
            item.innerHTML = dropdownText;
        }
    })
}