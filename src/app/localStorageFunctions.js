import { compareAsc, format } from 'date-fns';

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

function loadAllTodos() {
    const projectNames = loadProjectList();
    const allTodos = [];
    for (let i = 0; i < projectNames.length; i++) {
        const currentProject = loadProject(projectNames[i]);
        allTodos.push(...currentProject);
    }
    return sortTodos(allTodos);
}

function sortTodos(todos) {
    return todos
    .map(todo => {
        const parsedTodo = JSON.parse(todo);
        parsedTodo.dueDate = new Date(Date.parse(parsedTodo.dueDate));
        return parsedTodo;
    })
    .sort((a, b) => compareAsc(a.dueDate, b.dueDate));
}

function loadTodaysTodos() {
    const allTodos = loadAllTodos();
    const t =  new Date();
    const today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    const todaysTodos = [];
    for (let i = 0; i < allTodos.length; i++) {
        const currentTodo = allTodos[i];
        const currentTodoDate = new Date(currentTodo.dueDate.getFullYear(),
                                        currentTodo.dueDate.getMonth(),
                                        currentTodo.dueDate.getDate());
        if (currentTodoDate > today) {
            break;
        } else if (currentTodoDate.getTime() === today.getTime()) {
            currentTodo.dueDate = format(currentTodo.dueDate, 'yyyy-MM-dd');
            todaysTodos.push(currentTodo);
            continue;
        }
    }
    return todaysTodos;
}


export {createProject, saveTodo, loadProject, loadTodaysTodos,
     loadProjectList, initLocalStorage, changeTodoState};