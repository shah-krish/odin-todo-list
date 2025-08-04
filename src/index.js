import './style.css';
const projects = []; //will use this array to store all the projects
let tasks = new Map(); //will use this map/dict to link projects and tasks

function addProject(){
    let name = prompt("Please enter the name of your project: ");
    if(name!=null){
        projects.push(name);
    }
    displayProject();
    console.log("projects = "+projects);
}

function addTask(){
    if(projects.length==0){
        alert("Please add a project first!");
        return;
    }
    const form = document.createElement("form");
    const projectOptions = projects.map(project => `<option value="${project}">${project}</option>`).join("");
    form.id = "taskForm";
    form.innerHTML = `
    <select id="projectSelect" required>
      <option value="" disabled selected>Select a project</option>
      ${projectOptions}
    </select><br>
    <input type="text" placeholder="Task" id="task" required><br>
    <button type="submit">Add Task</button>
    <button type="button" id="cancelBtn">Cancel</button>
  `;
    form.addEventListener("submit", saveTask);
    const cancelBtn = form.querySelector("#cancelBtn");
    cancelBtn.addEventListener("click", () => form.remove());
    document.body.appendChild(form);
}
function saveTask(){
    const taskName = document.querySelector("#task").value;
    const taskProject = document.querySelector("#projectSelect").value;
    if (!tasks.has(taskProject)) {
        tasks.set(taskProject, []);
      }
    tasks.get(taskProject).push(taskName);
    document.getElementById("taskForm").remove();
/*     console.log(`Added task "${taskName}" to project "${taskProject}"`);
    console.log(tasks); */
}

function displayProject() {
    const displayArea = document.querySelector(".projectNames");
    const projectName = projects[projects.length - 1]; 

    const container = document.createElement("div");
    container.className = "projectContainer";

    const projectDiv = document.createElement("div");
    projectDiv.className = "projectDiv";
    projectDiv.textContent = projectName;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";

    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        const index = projects.indexOf(projectName);
        if (index !== -1) {
            projects.splice(index, 1);
        }
        container.remove();
    });

    buttonDiv.appendChild(deleteButton);
    container.appendChild(projectDiv);
    container.appendChild(buttonDiv);
    displayArea.appendChild(container);
}

const addProj = document.querySelector(".newProject");
addProj.addEventListener("click", addProject);
const addT = document.querySelector(".newList");
addT.addEventListener("click", addTask);


