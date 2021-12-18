import { parse } from "date-fns";
import {loadProject, changeTodoState, loadTodaysTodos} from "./localStorageFunctions";

let currentProject;

// Initializing last selected projects div to a dummy div
let lastProjectDiv = document.createElement("div");
lastProjectDiv.classList.add("selected");

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
            lastProjectDiv.classList.remove("selected");
            currentProject = projects[i];
            loadTodosToDom(loadProject(projects[i]));
            projectDiv.classList.add("selected");
            lastProjectDiv = projectDiv;
        })
        projectsBar.appendChild(projectDiv);
    }
}

function reloadTodos() {
    loadTodosToDom(loadProject(currentProject));
    return;
}


function loadTodosToDom(todos, parsed=false) {
    const contentDiv = document.querySelector(".todo-div");
    contentDiv.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let currentTodo = todos[i];
        if (!parsed) {
             currentTodo = JSON.parse(currentTodo);
        }
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");

        const leftDiv = document.createElement("div");
        if (currentTodo.checked) {
            leftDiv.innerHTML = currentTodo.title.strike();
        } else {
            leftDiv.textContent = currentTodo.title;
        }
        todoDiv.appendChild(leftDiv);

        const rightDiv = document.createElement("div");

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "Details";
        rightDiv.appendChild(detailsBtn);

        detailsBtn.addEventListener("click", function() {
            loadDetails(currentTodo);
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
            loadTodosToDom(loadProject(currentProject));
        })

        if (parsed) {
            checkBtn.disabled = true;
        }

        todoDiv.appendChild(rightDiv);
        contentDiv.appendChild(todoDiv);
    }
}

function loadDetails(currentTodo) {
    detailsTitle.textContent = currentTodo.title;
    detailsDueDate.textContent = currentTodo.dueDate;
    detailsDescription.textContent = currentTodo.description;
    switch(currentTodo.priority) {
        case "high":
            detailsPriority.textContent = "High";
            detailsPriority.style.backgroundColor = "red";
            break;
        case "medium":
            detailsPriority.textContent = "Medium";
            detailsPriority.style.backgroundColor = "green";
            break;
        default:
            detailsPriority.textContent = "Low";
            detailsPriority.style.backgroundColor = "blue";
            break;
    }
    
    if (currentTodo.checked) {
        detailsCheckedInfo.textContent = "Finished";
        detailsCheckedInfo.style.backgroundColor = "green";
    } else {
        detailsCheckedInfo.textContent = "Unfinished";;
        detailsCheckedInfo.style.backgroundColor = "red";
    }
    detailsContainer.style.display = "block";
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


function loadTodaysTodosToDom() {
    const todaysTodos = loadTodaysTodos();
    currentProject = "Home";
    lastProjectDiv.classList.remove("selected");
    lastProjectDiv = document.querySelector(".today-todo");
    lastProjectDiv.classList.add("selected");
    loadTodosToDom(todaysTodos, true);

}


export {loadProjectsToDom, currentProject, setModal, loadNewTodoDetails, reloadTodos, loadTodaysTodosToDom};