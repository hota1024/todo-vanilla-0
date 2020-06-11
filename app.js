window.addEventListener('load', () => {
  const taskFormInput = document.getElementById('task-form-input')
  const taskFormAdd = document.getElementById('task-form-add')
  const tasks = document.getElementById('tasks')

  taskFormAdd.addEventListener('click', () => {
    const task = document.createElement('div')
    const taskTitle = document.createElement('div')
    const taskRemoveButton = document.createElement('button')

    task.classList.add('card')
    task.classList.add('task')

    task.addEventListener('click', () => {
      task.classList.toggle('is-done')
    })

    taskTitle.classList.add('card-title')
    taskTitle.innerText = taskFormInput.value

    taskRemoveButton.classList.add('button')
    taskRemoveButton.classList.add('task-remove-button')
    taskRemoveButton.innerText = '削除'

    taskRemoveButton.addEventListener('click', () => {
      tasks.removeChild(task)
    })

    task.appendChild(taskTitle)
    task.appendChild(taskRemoveButton)

    tasks.appendChild(task)

    taskFormInput.value = ''
  })
})
