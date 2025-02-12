document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.innerHTML = taskText+'<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({ text: li.textContent.replace("Delete", "").trim(), completed: li.classList.contains("completed") });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    savedTasks.forEach(task => {
        let taskList = document.getElementById("task-list");

        let li = document.createElement("li");
        li.innerHTML = taskText+'<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        
        if (task.completed) li.classList.add("completed");

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            saveTasks();
        });

        taskList.appendChild(li);
    });
}
