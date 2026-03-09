import { loadTodos } from "./storage.js";
import { renderTodos } from "./ui.js";
import { setupEvents } from "./service.js";

const tasks = loadTodos();

renderTodos(tasks);
setupEvents(tasks);