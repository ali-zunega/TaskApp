export function renderTodos(tasks) {
  const list = document.querySelector("#todo-list");
  const emptyMessage = document.querySelector("#empty-message");

  list.innerHTML = "";

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    // Si la tarea está completada, añadimos la clase que ya tienes en tu CSS
    if (task.completed) {
      li.classList.add("completed"); 
    }

    li.innerHTML = `
      <label>
        <input class="todo-checkbox" type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
      </label>
      <button class="delete-btn" data-id="${task.id}"></button>
    `;

    list.appendChild(li);
  });
}