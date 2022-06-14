window.addEventListener('load', function() {
    const todoForm = document.querySelector('.todo-form');
    const todoList = document.querySelector('.todo-list');
    let todoArr = localStorage.length > 0 ? JSON.parse(localStorage.getItem('todolist')) : [];
    if (Array.isArray(todoArr) && todoArr.length > 0) {
        [...todoArr].forEach(item => createTodoItem(item));
    }

    function createTodoItem(title) {
        const template = `<div class="todo-item">
        <p class="todo-text">${title}</p>
        <i class="fa fa-trash todo-icon"></i>
    </div>`
        todoList.insertAdjacentHTML('beforeend', template);
    }
    todoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let todoValue = this.elements['todo-input'].value;
            if (!todoValue) {
                return;
            }
            createTodoItem(todoValue);
            todoArr.push(todoValue);
            localStorage.setItem('todolist', JSON.stringify(todoArr));
            this.elements['todo-input'].value = '';
        })
        //xóa
    todoList.addEventListener('click', function(e) {
        if (e.target.matches('.todo-icon')) {
            //xóa trong DOM
            let todoText = e.target.previousElementSibling;
            let todoItem = todoText.parentNode;
            todoItem.parentNode.removeChild(todoItem);
            //xóa trong localStorage
            let text = todoText.textContent;
            let newTodoArr = todoArr.filter(item => item !== text);
            localStorage.setItem('todolist', JSON.stringify(newTodoArr));
        }
    })
})