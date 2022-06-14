window.addEventListener('load',function() {
    const inputSearch = document.querySelector('.search__input');
    const inputItem = document.querySelectorAll('.search__list-item');
    inputSearch.addEventListener('input',function(e) {
        let valueSearch = e.target.value;
        [...inputItem].forEach((item) => {
            let textSearch = item.textContent;
            let index = textSearch.toLowerCase().indexOf(valueSearch.toLowerCase());
            if(index>=0 && textSearch.toLowerCase().includes(valueSearch.toLowerCase())) {
                item.innerHTML = `${textSearch.substring(0,index)}<span class="highlight-text">${textSearch.substring(index,index+valueSearch.length)}</span>${textSearch.substring(index+valueSearch.length)}`
            }else {
                item.innerHTML = textSearch;
            }
        })
        if(!valueSearch) return;
    })
})