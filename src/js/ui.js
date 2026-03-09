export function renderTodos(tasks) {

  const list = document.querySelector("#todo-list");

  list.innerHTML = "";

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.innerHTML = `
      <label>
        <input class="todo-checkbox" type="checkbox" ${task.completed ? "checked" : ""}>
        ${task.text}
      </label>
      <button class="delete-btn" data-id="${task.id}"></button>
    `;

    list.appendChild(li);

  });

}