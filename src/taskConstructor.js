import projectMaker from "./nav";
import detailsFun from "./details";

function taskCreator() {
  projectMaker();
  const submitBtn = document.querySelector("#submit-btn");
  const newTaskForm = document.querySelector(".task-form");
  const taskContainer = document.querySelector(".task-container");

  function task(title, description, date, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.project = project;
  }

  function addTask() {
    const newTask = new task(
      newTaskForm.title.value,
      newTaskForm.description.value,
      newTaskForm.date.value,
      projectMaker()
    );

    const taskElement = document.createElement("div");
    taskElement.setAttribute("class", "task");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    taskElement.appendChild(titleDiv);

    const checkmark = document.createElement("input");
    checkmark.type = "checkbox";
    checkmark.classList.add("checkmark");
    titleDiv.appendChild(checkmark);

    const title = document.createElement("p");
    title.textContent = newTask.title;
    title.classList.add("title");
    titleDiv.appendChild(title);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = newTask.description;

    const options = document.createElement("div");
    options.classList.add("options-and-date");
    taskElement.appendChild(options);

    const details = document.createElement("button");
    details.textContent = "Details";
    details.classList.add("details");
    options.appendChild(details);
    details.addEventListener("click", function () {
      detailsFun(newTask);
    });

    const dateElement = document.createElement("p");
    dateElement.textContent =
      newTask.date.length === 0 ? "No Date" : newTask.date;
    dateElement.classList.add("date");
    options.appendChild(dateElement);

    const remove = document.createElement("button");
    remove.innerHTML = `<i class="bi bi-trash"></i>`;
    options.appendChild(remove);
    remove.addEventListener("click", function () {
      taskElement.remove();
    });

    if (title.textContent !== "") {
      taskContainer.appendChild(taskElement);
    }
    console.log(newTask.projectSelected);
  }

  submitBtn.addEventListener("click", function () {
    addTask();
  });
}

export default taskCreator;
