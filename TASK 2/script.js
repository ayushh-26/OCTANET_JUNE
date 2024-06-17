document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input').value;
    const dueDateInput = document.getElementById('due-date-input').value;
    const priorityInput = document.getElementById('priority-input').value;

    if (taskInput === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = `task priority-${priorityInput}`;

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    taskContent.innerHTML = `<span>${taskInput}</span> <span>${dueDateInput}</span>`;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerText = 'Complete';
    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);

    document.getElementById('task-input').value = '';
    document.getElementById('due-date-input').value = '';
    document.getElementById('priority-input').value = 'low';
});
