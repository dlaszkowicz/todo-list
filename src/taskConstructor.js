function taskCreator() {
  const task = function taskFun(title, description, date) {
    const newTaskForm = document.querySelector(".task-form");
    this.title = title;
    this.description = description;
    this.date = date;
  };
  const newTask = new task();
  function addTask() {
    const hero = document.querySelector(".hero");
    newTask.title = newTaskForm.title.value;
    newTask.description = newTaskForm.description.value;
    newTask.date = newTaskForm.description.value;

    const task = document.createElement("div");
    task.setAttribute("class", "task");

    const checkmark = document.createElement("button");
    hero.appendChild(task);

    const title = document.createElement("p");
    title.textContent = newTask.title;
    task.appendChild(title);
  }
}
export default taskCreator;
