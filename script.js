// Initialize tasks from localStorage if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask(taskName) {
    const currentTime = new Date().toLocaleString();
    tasks.push({ 
        id: Date.now(), 
        name: taskName, 
        added: currentTime, 
        completed: false, 
        completedTime: null 
    });
    saveTasks();
    renderTasks();
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
}

// Function to update a task
function updateTask(taskId, newName) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, name: newName };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            const completedTime = task.completed ? null : new Date().toLocaleString();
            return { ...task, completed: !task.completed, completedTime: completedTime };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Function to calculate time difference in days, hours, or minutes
function calculateTimeDifference(start, end) {
    const diff = Math.abs(new Date(end) - new Date(start));
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return days + ' days';
    } else if (hours > 0) {
        return hours + ' hours';
    } else {
        return minutes + ' minutes';
    }
}

// Function to render tasks in the table
function renderTasks(filteredTasks = tasks) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear existing list

    filteredTasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.added}</td>
            <td>${task.completed ? task.completedTime : '-'}</td>
            <td>${task.completed ? calculateTimeDifference(task.added, task.completedTime) : '-'}</td>
            <td>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                <button class="toggle-btn" onclick="toggleTaskCompletion(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
            </td>
        `;
        row.className = task.completed ? 'completed' : '';
        todoList.appendChild(row);
    });
}

// Function to handle editing a task
function editTask(taskId) {
    const newName = prompt('Enter new task name:');
    if (newName !== null && newName.trim() !== '') {
        updateTask(taskId, newName.trim());
    }
}

// Function to search tasks by name
function searchTasks(searchTerm) {
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
    renderTasks(filteredTasks);
}

// Event listener for Add Task button
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskName = document.getElementById('todoInput').value.trim();
    if (taskName !== '') {
        addTask(taskName);
        document.getElementById('todoInput').value = ''; // Clear input field
    }
});

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.trim();
    if (searchTerm === '') {
        renderTasks(); // Show all tasks if search input is empty
    } else {
        searchTasks(searchTerm); // Filter tasks based on search term
    }
});

// Initial rendering of tasks
renderTasks();
