document.getElementById('addTaskButton').addEventListener('click', handleAddTask);

document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        for(const taskText of savedTasks) {
            createTaskElement(taskText);
        }
    }
}
function handleAddTask() {
    const password = prompt('Enter the password:');
    if (password === null) {
      // User clicked Cancel
      return;
    }
  
    if (password.trim() !== 'fuckuber69') {
      alert('Incorrect password!');
      return;
    }
  
    addTask();
  }
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a valid task!');
        return;
    }
    
    createTaskElement(taskText);
    saveTask(taskText);

    taskInput.value = '';
    
}

function createTaskElement(taskText) {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
  
    const taskLink = document.createElement('a');
    taskLink.href = 'https://colewkovac.github.io/englishquiz/?';
    taskLink.textContent = taskText;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        const password = prompt('Enter the password:');
    if (password === null) {
      // User clicked Cancel
      return;
    }
  
    if (password.trim() !== 'fuckuber69') {
      alert('Incorrect password!');
      return;
    }
  
      taskList.removeChild(newTask);
      deleteTask(taskText);
    });
  
    newTask.appendChild(taskLink);
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
  }

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText) {
    
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}