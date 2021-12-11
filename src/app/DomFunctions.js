import {loadProject} from "./localStorageFunctions";

function loadProjectsToDom(projects) {
    const projectsBar = document.querySelector(".project");
    projectsBar.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = projects[i];
        projectDiv.classList.add("project-name");
        projectDiv.setAttribute("data-name", projects[i]);
        projectDiv.addEventListener("click", function () {
            loadTodosToDom(loadProject(projects[i]));
        })
        projectsBar.appendChild(projectDiv);
    }
}


function loadTodosToDom(todos) {
    const contentDiv = document.querySelector(".content");
    for (let i = 0; i < todos.length; i++) {
        const currentTodo = todos[i];
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");
        todoDiv.textContent = currentTodo.title;
        todoDiv.setAttribute("data-index", i);
        contentDiv.appendChild(todoDiv);
    }
}

export {loadProjectsToDom};