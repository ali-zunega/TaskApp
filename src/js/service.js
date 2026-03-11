import { saveTodos } from "./storage.js";
import { renderTodos } from "./ui.js";

export function setupEvents(tasks) {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list = document.querySelector("#todo-list");

  // EVENTO: Agregar tarea
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();

    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    tasks.push(newTask);
    saveTodos(tasks);
    renderTodos(tasks);
    input.value = "";
  });

  // EVENTO: Delegación de eventos en la lista (Borrar y Completar)
  list.addEventListener("click", (e) => {
    
    // Lógica para Borrar
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
      const id = Number(deleteBtn.dataset.id);
      
      // Filtramos y modificamos el array original por referencia
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        tasks.splice(index, 1); 
        saveTodos(tasks);
        renderTodos(tasks);
      }
    }

    // Lógica para Completar (Checkbox)
    // Renderiza todas las tareas para que el estado del checkbox se actualice correctamente
    if (e.target.classList.contains("todo-checkbox")) {
      const li = e.target.closest("li");
      const id = Number(li.dataset.id);

      const task = tasks.find((t) => t.id === id);
      if (task) {
        task.completed = e.target.checked;
        saveTodos(tasks);
        renderTodos(tasks); 
      }
    }
  });
}