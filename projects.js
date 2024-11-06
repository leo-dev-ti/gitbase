const projects = JSON.parse(localStorage.getItem("projetos")) || [];
const myToken = localStorage.getItem("token") || "";

const registerProject = (name, description) => {
    projects.push({
        name : name,
        desc : description
    });

    showProject(projects.length-1);
    localStorage.setItem("projetos", JSON.stringify(projects));
}

const showProject = (id) => {
    let element = document.createElement("div");
    let title = document.createElement("h1");
    let desc = document.createElement("p");

    element.setAttribute("class", "projeto");
    title.innerText = projects[id].name;
    desc.innerText = projects[id].desc;

    element.appendChild(title);
    element.appendChild(desc);

    document.getElementById("projetos").appendChild(element);
}

if(projects.length > 0) for(let i = 0; i < projects.length; i++) showProject(i);