import { loadTodos } from "./storage.js";
import { renderTodos } from "./ui.js";
import { setupEvents } from "./service.js";

const todos = loadTodos();

renderTodos(todos);
setupEvents(todos);