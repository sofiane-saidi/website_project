let greeting = document.getElementById("greetingMessage");
        let date = new Date();
        let hour = date.getHours();

        if(hour < 12){
            greeting.textContent = "good morning Asma";
        }
        else if(hour < 16){
            greeting.textContent = "good afternoon Asma";
        }
        else{
            greeting.textContent = "good evening Asma";
        }

let form = document.getElementById("taskForm");
let titleInput = document.getElementById("taskTitle");
let dateInput = document.getElementById("taskDate");
let priorityInput = document.getElementById("taskPriority");
let taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = titleInput.value;
    let date = dateInput.value;
    let priority = priorityInput.value;

    
    let li = document.createElement("li");
    li.classList.add("task"); 
    

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

   
    let text = document.createElement("span");
    text.textContent = `${title} — Due: ${date} [${priority}]`;

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    form.reset();
});

let startBtn = document.getElementById("start");
startBtn.addEventListener("click", function() {
    document.getElementById("taskdiv").style.display = "block";
    startBtn.style.display = "none";
});