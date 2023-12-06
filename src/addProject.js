function addProject() {
  const projectOptions = document.querySelector(".project-options");
  const addProjectBtn = document.querySelector(".add-project");
  const projects = document.querySelector(".projects-projects");
  addProjectBtn.addEventListener("click", function () {
    let projectName = prompt("Project Name:");
    if (projectName != "" && projectName != null) {
      const newProject = document.createElement("button");
      newProject.innerHTML =
        `<i class="bi bi-card-checklist"></i>` + projectName;
      newProject.classList.add("new-project");
      projects.appendChild(newProject);
      newProject.setAttribute("id", "project-btn");
      projectOptions.appendChild(newProject);
    }
  });
}

export default addProject;
