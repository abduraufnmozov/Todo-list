const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyMessage = document.getElementById('empty-message');

let todos = [];

// Funksiya: Ro'yxatni yangilash
function renderTodos() {
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        li.innerHTML = `
            <div class="todo-content ${todo.completed ? 'completed' : ''}" onclick="toggleTodo(${index})">
                <i class="${todo.completed ? 'fas fa-check-circle' : 'far fa-circle'} check-icon"></i>
                <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTodo(${index})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    
    if (text !== "") {
        todos.push({ text: text, completed: false });
        todoInput.value = '';
        renderTodos();
    }
});

window.toggleTodo = (index) => {
    todos[index].completed = !todos[index].completed;
    renderTodos();
};

window.deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};

// Birinchi marta yuklanganda
renderTodos();