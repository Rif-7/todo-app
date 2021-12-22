import "./style.css"
import {createProject, saveTodo, loadProjectList, initLocalStorage} from "./app/localStorageFunctions";
import {loadProjectsToDom, setModal, loadNewTodoDetails,
     reloadTodos, loadTodaysTodosToDom, deleteProjectFromDom} from "./app/DomFunctions"

function todoItem(title, dueDate, description, priority, project="default", checked=false) {
    this.title = title
    this.dueDate = dueDate
    this.description = description
    this.priority = priority
    this.checked = checked
    this.project = project
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
    document.querySelector(".project-title").value = "";
});

const saveBtn = document.querySelector(".save-todo");
saveBtn.addEventListener("click", function() {
    const todoDetails = loadNewTodoDetails();
    const todo = new todoItem(todoDetails.title, todoDetails.dueDate, todoDetails.description,
        todoDetails.priority, todoDetails.project);
    saveTodo(todo);
    reloadTodos();
    document.querySelector("#todo-title").value = "";
    document.querySelector("#todo-description").value = "";
    document.querySelector(".close").click();
});

document.querySelector(".details-close").addEventListener("click", function() {
    document.querySelector("#details-modal").style.display = "none";
});

document.querySelector(".today-todo").addEventListener("click", loadTodaysTodosToDom);
document.querySelector("#delete-project").addEventListener("click", function() {
    deleteProjectFromDom();
    document.querySelector(".project-name").click();
});


initLocalStorage();
loadProjectsToDom();
setModal();


// The first project-name will be Home 
document.querySelector(".project-name").click();



