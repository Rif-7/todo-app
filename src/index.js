import "./style.css"

function todoItem(title, dueDate, description, priority) {
    this.title = title,
    this.dueDate = dueDate,
    this.description = description,
    this.priority = priority,
    this.checked = false
}

todoItem.prototype.toggleCheck = () => {
    if (this.checked) {
        this.checked = false;
    } else {
        this.checked = true;
    }
}

