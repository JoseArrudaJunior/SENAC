let taskList = [];

function addTask() {
    let input = document.getElementById("inputTask");
    let task = input.value.trim();
    if (task === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }
    taskList.push(task);
    renderTasks();
    input.value = "";
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    taskList.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        li.onclick = function() {
            li.classList.toggle("completed");
        };
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = function(event) {
            event.stopPropagation();
            taskList.splice(index, 1);
            renderTasks();
        };
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}
