function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const taskList = document.getElementById("task-list");

  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>`;

  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = "";
}

function deleteTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
