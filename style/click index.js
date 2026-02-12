function togglePassword() {
      const passwordField = document.getElementById("passwordField");
      const toggleBtn = document.getElementById("toggleBtn");}

      if  (passwordField.type === "password") {
        // If hidden -> show it
        passwordField.type = "text";
        toggleBtn.textContent = "Hide Password";
      } else 
        // If visible -> hide it
        passwordField.type = "password";
        toggleBtn.textContent = "Show Password";




        document.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter key to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        // Requirement: If the input is empty, display an alert message
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Requirement: Create a new task (<li>)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Requirement: The task text should match the input value
        // Already done by setting li.textContent

        // Append the new task to the <ul> list
        taskList.appendChild(li);

        // Requirement: The input field should clear automatically
        taskInput.value = '';
        taskInput.focus(); // Keep focus on the input for easy adding of next task
    }
});