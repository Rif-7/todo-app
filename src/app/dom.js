function loadProjectsToDom(projects) {
    const projectsBar = document.querySelector(".project");
    for (let i = 0; i < projects.length; i++) {
        const projectDiv = document.createElement("div");
        projectDiv.textContent = projects[i];
        projectDiv.classList.add("project-name");
        projectsBar.appendChild(projectDiv);
    }
}

function loadProjectDataToDom(projectData) {
    const contentDiv = document.querySelector(".content");
    for (let i = 0; i < projectData.length; i++) {
        const todo = projectData[i];
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-item");
        todoDiv.textContent = `${todo.title} ${todo.description}`;
        contentDiv.appendChild(todoDiv);
    }
}

export {loadProjectsToDom, loadProjectDataToDom};