function initLocalStorage() {
    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(["Home"]));
        localStorage.setItem("Home", JSON.stringify([]));
    }
}

function createProject(title) {
    initLocalStorage();
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (projects.includes(title)) return alert("project already exists");
    projects.push(title);
    localStorage.setItem("projects", JSON.stringify(projects));

    localStorage.setItem(title, JSON.stringify([]));
}

function saveTodo(todo) {
    if (!localStorage.getItem(todo.project)) return alert("project doesn't exist");

    const project = JSON.parse(localStorage.getItem(todo.project));
    project.push(JSON.stringify(todo));

    localStorage.setItem(todo.project, JSON.stringify(project));
}

function loadProjectList() {
    return JSON.parse(localStorage.getItem("projects"));
}

function changeTodoState(projectName, todoIndex) {
    const projectData = loadProject(projectName);
    const todo  = JSON.parse(projectData[todoIndex]);
    todo.checked = !todo.checked;
    projectData[todoIndex] = JSON.stringify(todo);
    localStorage.setItem(projectName, JSON.stringify(projectData));

}

function loadProject(projectName) {
    return JSON.parse(localStorage.getItem(projectName));
}

export {createProject, saveTodo, loadProject, loadProjectList, initLocalStorage, changeTodoState};