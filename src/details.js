function detailsFun(task) {
  const title = task.title;
  const description = task.description;
  const date = task.date;
  const project = task.project;
  const detailsWindow = document.createElement("dialog");
  detailsWindow.classList.add("details-window");

  const header = document.createElement("div");
  header.classList.add("header");
  const headerText = document.createElement("h2");
  headerText.textContent = "Details";
  header.appendChild(headerText);
  detailsWindow.appendChild(header);

  const taskTitle = document.createElement("p");
  taskTitle.textContent = title;
  detailsWindow.appendChild(taskTitle);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = description;
  detailsWindow.appendChild(taskDescription);

  const taskDate = document.createElement("p");
  taskDate.textContent = `Finish Date:    ${date}`;
  detailsWindow.appendChild(taskDate);

  document.body.appendChild(detailsWindow);
  detailsWindow.showModal();
}
export default detailsFun;
