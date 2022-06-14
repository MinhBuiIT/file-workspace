window.addEventListener('load',function() {
    const form = document.querySelector('.form');
    const todoList = document.querySelector('.todolist');
    let arrValue = localStorage.length>0 ? JSON.parse(localStorage.getItem('todolist')) : [];
    if(arrValue.length > 0 && Array.isArray(arrValue)) {
        [...arrValue].forEach(item => createItem(item));
    }
    checkChildTodoList();
    function createItem(title) {
        const template = `<div class="todolist__item">
        <span class="todolist__item-text">${title}</span>
        <i class="fa fa-trash icon-remove"></i>
    </div>`;
        todoList.insertAdjacentHTML('beforeend',template);
    }
    form.addEventListener('submit',function(e) {
        e.preventDefault();
        let valueInput = this.elements['input'].value;
        createItem(valueInput);
        checkChildTodoList();
        arrValue.push(valueInput);
        localStorage.setItem('todolist',JSON.stringify(arrValue));
        this.elements['input'].value = '';
    })
    todoList.addEventListener('click',function(e) {
        if(e.target.matches('.icon-remove')) {
            //xóa DOM
            const todoItem = e.target.parentNode;
            let textRemove = e.target.previousElementSibling.textContent;
            todoItem.parentNode.removeChild(todoItem);
            checkChildTodoList();
            // if(!todoList.hasChildNodes) {
            //     todoList.classList.remove('active');
            // }
            //xóa localStorage
            let newArr = arrValue.filter(item => item!==textRemove);
            localStorage.setItem('todolist',JSON.stringify(newArr));
        }
    })
    function checkChildTodoList() {
        if(todoList.firstChild) {
            todoList.classList.add('active');
        }else {
            todoList.classList.remove('active');
        }
    }
})