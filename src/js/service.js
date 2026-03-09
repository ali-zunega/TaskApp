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

}
