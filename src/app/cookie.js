function initLocalStorage() {
    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(["Home"]))
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
    project["todos"].push(JSON.stringify(todo));

    localStorage.setItem(todo.project, JSON.stringify(project));
}

function loadProjectList() {
    return JSON.parse(localStorage.getItem("projects"));
}

function loadProject(projectName) {
    return JSON.parse(localStorage.getItem(projectName));
}

export {createProject, saveTodo, loadProject, loadProjectList, initLocalStorage};