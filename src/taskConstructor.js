function taskCreator() {
  const submitBtn = document.querySelector("#submit-btn");
  const newTaskForm = document.querySelector(".task-form");
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

    const checkmark = document.createElement("button");
    task.appendChild(checkmark);
    hero.appendChild(task);

    const title = document.createElement("p");
    title.textContent = newTask.title;
    task.appendChild(title);

    const description = document.createElement("p");
    description.textContent = newTask.description;
    task.appendChild(description);

    const date = document.createElement("p");

    task.appendChild(date);

    hero.appendChild(newTask);
  }
  submitBtn.addEventListener("click", function () {
    addTask();
  });
}
export default taskCreator;
