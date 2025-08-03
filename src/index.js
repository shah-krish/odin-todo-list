import './style.css';
const projects = []; //will use this array to store all the projects
let tasks = new Map(); //will use this map/dict to link projects and tasks

function addProject(){
    let name = prompt("Please enter the name of your project: ");
    if(name!=null){
        projects.push(name);
    }
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

const addProj = document.querySelector(".newProject");
addProj.addEventListener("click", addProject);
const addT = document.querySelector(".newList");
addT.addEventListener("click", addTask);

