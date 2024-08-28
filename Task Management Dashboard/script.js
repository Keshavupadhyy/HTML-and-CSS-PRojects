const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskModal = document.getElementById('taskModal');
const closeModal = document.querySelector('.close');
const taskForm = document.getElementById('taskForm');

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hide');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.querySelector(`#${id}`);

    if (e.target.classList.contains('column')) {
        e.target.appendChild(draggable);
    } else if (e.target.parentNode.classList.contains('column')) {
        e.target.parentNode.appendChild(draggable);
    }
}

// Modal functionality
addTaskBtn.addEventListener('click', () => {
    taskModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    taskModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === taskModal) {
        taskModal.style.display = 'none';
    }
});

taskForm.addEventListener('submit'), (e) => {
    e.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true');
    newTask.innerHTML = `<h3>${taskTitle}</h3><p>${taskPriority} Priority - Deadline: ${taskDeadline}</p>`;
    newTask.addEventListener('dragstart', dragStart);   
}