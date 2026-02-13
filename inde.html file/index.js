const heading =document . getElementById( " title");
const button = document . getElementById('btn');

button . addEventListener("click", function( ) {
    heading.textContent = "welcome to the world of Javascript"
});

const text = document.getElementById("text");
const styleBtn = document.getElementById("styleBtn");


styleBtn.addEventListener("click",function () {
    text.style.color= "blue";
    text.style.fontSize= "40px";
});



document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');

    // --- Feature 4: Update Counters Function ---
    function updateCounters() {
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll('.completed').length;
        totalTasksSpan.textContent = totalTasks;
        completedTasksSpan.textContent = completedTasks;
    }

    // --- Feature 2: Toggle Task Completion ---
    function toggleTaskCompletion(event) {
        // Ensure we are toggling the li, not the delete button
        if (!event.target.classList.contains('delete-btn')) {
            event.currentTarget.classList.toggle('completed');
            updateCounters();
        }
    }

    // --- Feature 3: Delete Task ---
    function deleteTask(event) {
        // Stop the li's click event from firing when the delete button is clicked
        event.stopPropagation(); 
        const taskItem = event.target.closest('li');
        taskList.removeChild(taskItem);
        updateCounters();
    }

    // --- Feature 1: Create New Task Element ---
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Add completion toggle listener
        li.addEventListener('click', toggleTaskCompletion);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
        
        li.appendChild(deleteBtn);
        return li;
    }

    // --- Feature 1: Add Task Handler ---
    function addTask() {
        const taskText = newTaskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        
        // Clear input field
        newTaskInput.value = ''; 
        newTaskInput.focus();

        updateCounters();
    }

    addTaskBtn.addEventListener('click', addTask);

    // Allows pressing 'Enter' to add a task
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // --- Feature 5: Clear All Tasks ---
    clearAllBtn.addEventListener('click', () => {
        taskList.innerHTML = ''; // Removes all child elements
        updateCounters();
    });

    // Initial counter update on page load
    updateCounters();
});


