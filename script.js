function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput").value;

    // If the input is empty, return
    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskInput;

    // Create a delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append the button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    document.getElementById("taskInput").value = "";
}