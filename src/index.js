import "./style.css"
import { compareAsc, format } from 'date-fns';
import {createProject, saveTodo, loadProjectList, initLocalStorage} from "./app/cookie";
import {loadProjectsToDom} from "./app/dom"

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

const newProjectBtn = document.querySelector(".create-btn");
newProjectBtn.addEventListener("click", () => {
    const title = document.querySelector(".project-name").value;
    if (!title) {
        alert("Invalid Title");
        return;
    }
    createProject(title);
    loadProjectsToDom(loadProjectList());
    document.querySelector(".project-name").value = "";
});


initLocalStorage();
loadProjectsToDom(loadProjectList());

// The first project-name will be home 
document.querySelector(".project-name").click();

