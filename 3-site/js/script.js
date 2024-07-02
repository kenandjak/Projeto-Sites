// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

let oldInputValue;

// Funções
const saveTodo = (text) => { //Espera um texto (da tarefa)
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text ;// Texto que recebe da função
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class = "fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    // Para selecionar termos iguais, mas não todos:
    // 2 cliques na palavra + n * Ctrl D -> n = qtd de palavras abaixo da 1ª
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class = "fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class = "fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = ""; /* Apaga o texto depois que o usuário digita */
    todoInput.focus(); /* Para que a barra de digitação permaneça na caixa de adição de tarefa */

}
const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
        console.log(todoTitle, text);

        if(todoTitle.innerHTML === oldInputValue){
            todoTitle.innerHTML = text;
        }
    })
}

// Eventos
todoForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue){
        //save to do
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div"); /*seleciona o elemento mais próximo*/
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerHTML;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done"); /* toggle permite riscar e "desriscar" a tarefa */
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    if(targetEl.classList.contains("edit-todo")){
        /* esconder o formulário e mostrar o de edição */
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if(editInputValue) {
        updateTodo(editInputValue)
    }
    toggleForms();
})