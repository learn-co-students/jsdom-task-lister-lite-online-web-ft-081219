document.addEventListener("DOMContentLoaded", () => {
  // your code here
  giveFormColorPicker();
  giveFormTaskEvent();
});

const form = document.getElementById('create-task-form');
const list = document.getElementById('tasks');
const input = document.getElementById('new-task-description');

function newLiElement() {
  const newTask = document.createElement('li');
  newTask.textContent = input.value + ' ';
  newTask.style.color = form.querySelector('select').value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';

  newTask.appendChild(deleteButton);
  deleteButton.addEventListener('click', function(event) {
    list.removeChild(newTask);
  });
  return newTask;
};

function giveFormTaskEvent() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const task = newLiElement();

    list.appendChild(task);
    input.value = '';
  });
};

function makeOpt(arg) {
  const opt = document.createElement('option');
  opt.value = arg;
  opt.textContent = arg;
  return opt;
}

function giveFormColorPicker() {
  const inp = document.createElement('select');
  inp.name = 'color';
  inp.appendChild(makeOpt('red'));
  inp.appendChild(makeOpt('yellow'));
  inp.appendChild(makeOpt('green'));
  form.insertBefore(inp, form.querySelector('[type="submit"]'));
}