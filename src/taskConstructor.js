function taskCreator() {
  const submitBtn = document.querySelector("#submit-btn");
  const newTaskForm = document.querySelector(".task-form");
  const taskContainer = document.querySelector(".task-container");
  const task = function taskFun(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  };
  const newTask = new task();
  function addTask() {
    const hero = document.querySelector(".hero");
    newTask.title = newTaskForm.title.value;
    newTask.description = newTaskForm.description.value;
    newTask.date = newTaskForm.date.value;

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

    const date = document.createElement("p");
    if (newTask.date.length === 0) {
      date.textContent = "No Date";
    } else {
      date.textContent = newTask.date;
    }
    date.classList.add("date");
    options.appendChild(date);

    const edit = document.createElement("button");
    edit.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    options.appendChild(edit);

    const remove = document.createElement("button");
    remove.innerHTML = `<i class="bi bi-trash"></i>`;
    options.appendChild(remove);
    remove.addEventListener("click", function () {
      task.remove();
    });
    taskContainer.appendChild(task);
  }
  submitBtn.addEventListener("click", function () {
    addTask();
  });
}
export default taskCreator;
