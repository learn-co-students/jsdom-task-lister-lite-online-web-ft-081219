document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form#create-task-form')
  const task = document.querySelector('input#new-task-description')
  const list = document.querySelector('#tasks')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTask = document.createElement('li')
    if (task.value !== '') {
      newTask.innerText = task.value
      const btn = document.createElement('button')
      btn.innerText = 'X'
      btn.id = newTask.innerText
      newTask.appendChild(btn)
      list.appendChild(newTask)
    }

    task.value = ''
  })

  list.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      e.target.parentElement.remove()
    }
  })
})
