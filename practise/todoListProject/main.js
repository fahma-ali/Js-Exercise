const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener("submit", addTask)

function addTask(e) {
    e.preventDefault();
    const taskText = todoInput.value.trim()
    // console.log(new Date(Date.now()).getFullYear())
    if (taskText !== "") {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        addTaskToDom(task)
        todoInput.value=""
    }
    function addTaskToDom(task) {
        const li = document.createElement("li")
        li.className = `todo-item`
            li.dataset.id = task.id

        li.innerHTML = `<input type ="checkbox" class="completed-checkbox"> 
 <span> ${todoInput.value}</span>
  <button class ="edit-btn">Edit</button>
  <button class="delete-btn">Delete</button>`
        console.log(li)
        todoList.appendChild(li)
    }
}