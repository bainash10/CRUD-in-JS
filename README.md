# To-Do List Application

This JavaScript application implements a dynamic To-Do List with real-time search functionality.

## Features

- **Task Management:** Add, edit, delete, and mark tasks as completed.
- **Local Storage:** Persist tasks locally using `localStorage`.
- **Real-Time Search:** Filter tasks dynamically based on user input.
- **Responsive UI:** Adjusts interface dynamically to user actions.

## Functions

- `addTask(taskName)`: Add a new task to the list.
- `deleteTask(taskId)`: Delete a task from the list.
- `updateTask(taskId, newName)`: Update the name of a task.
- `toggleTaskCompletion(taskId)`: Toggle task completion status.
- `calculateTimeDifference(start, end)`: Calculate time between task additions and completions.
- `searchTasks(searchTerm)`: Filter tasks based on search term.
- `renderTasks(filteredTasks)`: Render tasks based on current state or filtered list.

## Usage

1. **Adding Tasks:** Enter a task in the input field and click "Add Task".
2. **Editing Tasks:** Click "Edit" next to a task to change its name.
3. **Deleting Tasks:** Click "Delete" to remove a task from the list.
4. **Completing Tasks:** Click "Complete" to mark a task as done; "Undo" to revert.

## Setup

- Clone the repository.
- Open `index.html` in a web browser.
- Start managing your tasks!

**Developed by Nischal Baidar.**
