import { saveTodos } from "./storage.js";
import { renderTodos } from "./ui.js";

export function setupEvents(tasks) {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text === "") return;

    const task = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    tasks.push(task);

    saveTodos(tasks);
    renderTodos(tasks);

    input.value = "";
  });


  const list = document.querySelector("#todo-list");

  list.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
      const button = e.target.closest(".delete-btn");
      const id = Number(button.dataset.id);

      const updatedTasks = tasks.filter((task) => task.id !== id);

      tasks.length = 0;
      tasks.push(...updatedTasks);

      saveTodos(tasks);
      renderTodos(tasks);
    }
  });
}
