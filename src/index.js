document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", (event) => {
    let newTodo = document.getElementById("new-task-description").value;
    const list = document.getElementById("tasks");
    let item = document.createElement("li");
    item.innerText = newTodo;
    list.appendChild(item);
    event.preventDefault();
  });
});