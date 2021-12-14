import {loadProject, changeTodoState} from "./localStorageFunctions";

let currentProject;
const detailsContainer = document.querySelector("#details-modal");
const detailsDueDate = detailsContainer.querySelector(".due-date");
const detailsTitle = detailsContainer.querySelector(".title");
const detailsDescription = detailsContainer.querySelector(".description");
const detailsPriority = detailsContainer.querySelector(".priority");
const detailsCheckedInfo = detailsContainer.querySelector(".checked-info");

function loadProjectsToDom(projects) {
    const projectsBar = document.querySelector(".project");
    projectsBar.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = projects[i];
        projectDiv.classList.add("project-name");
        projectDiv.addEventListener("click", function () {
            currentProject = projects[i];
            loadTodosToDom(loadProject(projects[i]));
        })
        projectsBar.appendChild(projectDiv);
    }
}

function reloadTodos() {
    loadTodosToDom(loadProject(currentProject));
    return;
}


function loadTodosToDom(todos) {
    const contentDiv = document.querySelector(".todo-div");
    contentDiv.innerHTML = "";
    console.log(todos);
    for (let i = 0; i < todos.length; i++) {
        const currentTodo = JSON.parse(todos[i]);
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");

        const leftDiv = document.createElement("div");
        leftDiv.textContent = currentTodo.title;
        todoDiv.appendChild(leftDiv);

        const rightDiv = document.createElement("div");

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "Details";
        rightDiv.appendChild(detailsBtn);

        detailsBtn.addEventListener("click", function() {
            detailsTitle.textContent = currentTodo.title;
            detailsDueDate.textContent = currentTodo.dueDate;
            detailsDescription.textContent = currentTodo.description;
            detailsPriority.textContent = currentTodo.priority;
            detailsCheckedInfo.textContent = currentTodo.checked;
            detailsContainer.style.display = "block";
        });

        const date = document.createElement("span");
        date.textContent = currentTodo.dueDate;
        rightDiv.appendChild(date);

        const checkBtn = document.createElement("input");
        checkBtn.type = "checkbox";
        if (currentTodo.checked) {
            checkBtn.checked = true;
        }
        rightDiv.appendChild(checkBtn);
        rightDiv.classList.add("due-date-field");

        checkBtn.addEventListener("change", () => {
            changeTodoState(currentProject, i);
        })

        todoDiv.appendChild(rightDiv);
        contentDiv.appendChild(todoDiv);
    }
}

function setModal() {
    const modal = document.getElementById("todo-modal");
    // Get the button that opens the modal
    const addTodoBtn = document.getElementById("add-todo");
    const closeBtn = document.querySelector(".close");

    // When the user clicks on the button, open the modal
    addTodoBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function() {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }); 
}


function loadNewTodoDetails() {
    const title = document.getElementById("todo-title").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;
    const description = document.getElementById("todo-description").value;

    return {title, dueDate, description, priority, "project": currentProject};
}



export {loadProjectsToDom, currentProject, setModal, loadNewTodoDetails, reloadTodos};