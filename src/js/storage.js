const KEY = "tasks";

export function loadTodos() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTodos(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}