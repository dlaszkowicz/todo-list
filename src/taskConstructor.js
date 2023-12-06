import projectMaker from "./nav";
import detailsFun from "./details";
function taskCreator() {
  projectMaker();
  const submitBtn = document.querySelector("#submit-btn");
  const newTaskForm = document.querySelector(".task-form");
  const taskContainer = document.querySelector(".task-container");
  const task = function taskFun(title, description, date, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.project = project;
  };
  const newTask = new task(
    newTaskForm.title.value,
    newTaskForm.description.value,
    newTaskForm.date.value,
    projectMaker()
  );
  function addTask() {
    newTask.title = newTaskForm.title.value;
    newTask.description = newTaskForm.description.value;
    newTask.date = newTaskForm.date.value;
    newTask.project = projectMaker();
    const task = document.createElement("div");
    task.setAttribute("class", "task");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    task.appendChild(titleDiv);

    const checkmark = document.createElement("input");
    checkmark.type = "checkbox";
    checkmark.classList.add("checkmark");
    titleDiv.appendChild(checkmark);

    const title = document.createElement("p");
    title.textContent = newTask.title;
    title.classList.add("title");
    titleDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = newTask.description;

    const options = document.createElement("div");
    options.classList.add("options-and-date");
    task.appendChild(options);

    const details = document.createElement("button");
    details.textContent = "Details";
    details.classList.add("details");
    options.appendChild(details);
    details.addEventListener("click", function () {
      detailsFun(newTask);
    });
    const date = document.createElement("p");
    if (newTask.date.length === 0) {
      date.textContent = "No Date";
    } else {
      date.textContent = newTask.date;
    }
    date.classList.add("date");
    options.appendChild(date);

    const remove = document.createElement("button");
    remove.innerHTML = `<i class="bi bi-trash"></i>`;
    options.appendChild(remove);
    remove.addEventListener("click", function () {
      task.remove();
    });
    if (title.textContent != "") {
      taskContainer.appendChild(task);
    }
    console.log(task.projectSelected);
  }
  submitBtn.addEventListener("click", function () {
    addTask();
  });
}
export default taskCreator;
