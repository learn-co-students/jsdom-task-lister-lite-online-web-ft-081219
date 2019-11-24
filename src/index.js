document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  let input = document.getElementById('new-task-description');
  let list = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let newTask = document.createElement('li');
    newTask.textContent = input.value + ' ';

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(event) {
      list.removeChild(newTask);
    });

    list.appendChild(newTask);
    input.value = '';
  });
});
