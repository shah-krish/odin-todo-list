import './style.css';
const projects = []; //will use this array to store all the projects

function addProject(){
    let name = prompt("Please enter the name of your project: ");
    if(name!=null){
        projects.push(name);
    }
    console.log("projects = "+projects);
}

function addTask(){
    if(projects.length==0){
        prompt("Please add a project first!");
    }
    
}