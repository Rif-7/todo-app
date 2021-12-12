import "./style.css"
import { compareAsc, format } from 'date-fns';
import {createProject, saveTodo, loadProjectList, initLocalStorage} from "./app/localStorageFunctions";
import {loadProjectsToDom, currentProject} from "./app/DomFunctions"

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

// recreates todo objects from the cookie data
function recreateTodos(data) {
    return new todoItem(data.title, data.dueDate, data.description,
                        data.priority, data.project, data.checked);
}

const newProjectBtn = document.querySelector(".create-project");
newProjectBtn.addEventListener("click", () => {
    const title = document.querySelector(".project-title").value;
    if (!title) {
        alert("Project citle can't be empty");
        return;
    }
    createProject(title);
    loadProjectsToDom(loadProjectList());
    document.querySelector(".project-name").value = "";
});

const newTodoBtn = document.querySelector(".create-todo");
newTodoBtn.addEventListener("click", () => {
    return;
});


initLocalStorage();
loadProjectsToDom(loadProjectList());

// The first project-name will be Home 
document.querySelector(".project-name").click();




// MODAL STUFF

// Get the modal
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
window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}); 