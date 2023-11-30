function addProject() {
  const addProjectBtn = document.querySelector(".add-project");
  const addProjectForm = document.querySelector(".project-form");
  const projectDialog = document.querySelector(".project-window");
  const cancelProject = document.querySelector(".cancel-project");
  addProjectBtn.addEventListener("click", function () {
    projectDialog.show();
    document.body.classList.add("dialog-open");
  });
  cancelProject.addEventListener("click", function () {
    projectDialog.reset();
    projectDialog.close();
  });
}

export default addProject;
