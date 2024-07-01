// Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-List");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn")

// Funções
const saveTodo = (text) => { //Espera um texto (da tarefa)
    const todo = document.createElement("div")
    todo.classList.add("todo")
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text // Texto que recebe da função
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class = "fa-solid fa-check>"</i>'
    todo.appendChild(doneBtn)

    // Para selecionar termos iguais, mas não todos:
    // 2 cliques na palavra + n * Ctrl D -> n = qtd de palavras abaixo da 1ª
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class = "fa-solid fa-pen>"</i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class = "fa-solid fa-xmark>"</i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

}

// Eventos
todoForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue){
        //save to do
        saveTodo(inputValue)
    }
})