import "./style.css"
import { compareAsc, format } from 'date-fns';
import {createProject, saveTodo, loadProject, loadProjectList} from "./app/cookie";
import {loadProjectsToDom, loadProjectDataToDom} from "./app/dom"

function todoItem(title, dueDate, description, priority, project="default", checked=false) {
    this.title = title
    this.dueDate = dueDate
    this.description = description
    this.priority = priority
    this.checked = checked
    this.project = project
}

todoItem.prototype.toggleCheck = function() {
    this.checked = !this.checked;
}

// recreates todos from the cookie data
function recreateTodos(data) {
    return new todoItem(data.title, data.dueDate, data.description,
                        data.priority, data.project, data.checked);
}

const newProject = document.querySelector(".create-btn");
newProject.addEventListener("click", () => {
    const title = document.querySelector(".project-name").value;
    if (!title) {
        alert("Invalid Title");
        return;
    }
    createProject(title);
    loadProjectsToDom(loadProjectList());
    document.querySelector(".project-name").value = "";
});

loadProjectsToDom(loadProjectList());

