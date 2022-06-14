//MVC: Model View Controller
//Model:xử lý logic và dữ liệu
//View: Giao diện những sự kiện
//Controller kết nối giữ Model và View
class Model {
    constructor() {
        this.todos = localStorage.length > 0 ? JSON.parse(localStorage.getItem('todolist')) : [];
    }

    handleChangetodo = (handler) => {
        this.ChangeTodoList = handler;
    }
    _reload(todos) {
        this.ChangeTodoList(todos);
        localStorage.setItem('todolist', JSON.stringify(todos));
    }

    Addtodo(todoText) {
        if (todoText.length > 0) {
            this.todos.push(todoText);
        }
        this._reload(this.todos);
    }

    Removetodo(todoText) {
        let index = this.todos.findIndex((item) => item === todoText);
        this.todos.splice(index, 1);
        this._reload(this.todos);
    }
}
class View {
    constructor() {
        this.body = this.getElement('body');
        this.todoWrap = this.createElement('div', 'todo');
        this.form = this.createElement('form', 'todo-form');
        this.form.autocomplete = 'off';
        this.input = this.createElement('input', 'todo-input');
        this.input.name = 'todo-input';
        this.input.type = 'text';
        this.input.placeholder = 'Enter your task';
        this.button = this.createElement('button', 'todo-btn');
        this.button.type = 'submit';
        this.button.textContent = 'ADD';
        this.todoList = this.createElement('div', 'todo-list');

        this.form.append(this.input, this.button);
        this.todoWrap.append(this.form, this.todoList);
        this.body.append(this.todoWrap);
    }
    createElement(tag, className) {
        const elm = document.createElement(tag);
        elm.className = className;
        return elm
    }
    getElement(tag) {
        const elm = document.querySelector(tag);
        return elm;
    }
    get _getValue() {
        return this.input.value;
    }
    resetValue() {
        return this.input.value = '';
    }

    displayItem(todos) {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        if (todos.length > 0) {
            todos.forEach((item) => {
                const todoItem = this.createElement('div', 'todo-item');
                const todoText = this.createElement('p', 'todo-text');
                todoText.textContent = item;
                const icon = this.createElement('i', 'fa fa-trash todo-icon');
                todoItem.append(todoText, icon);
                this.todoList.append(todoItem);
            })
            this.resetValue();
        }
    }

    viewAddtodo(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this._getValue) {
                handler(this._getValue);
                this.resetValue();
            }
        })
    }

    viewRemovetodo(handler) {
        this.todoWrap.addEventListener('click', (e) => {
            if (e.target.matches('.todo-icon')) {
                let todoItem = e.target.parentNode;
                todoItem.parentNode.removeChild(todoItem);
                handler(this._getValue);
            }
        })
    }
}
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.handleChangetodo(this.handleChangetodo);
        this.view.viewAddtodo(this.handleAddtodo);
        this.view.viewRemovetodo(this.handleRemovetodo);
        this.view.displayItem(this.model.todos);
    }
    handleChangetodo = (handler) => {
        this.view.displayItem(handler);
    }
    handleAddtodo = (textContent) => {
        this.model.Addtodo(textContent);
    }
    handleRemovetodo = (textContent) => {
        this.model.Removetodo(textContent);
    }
}
new Controller(new Model(), new View());