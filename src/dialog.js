function dialogFun() {
  const dialog = document.querySelector(".form-window");
  const form = document.querySelector(".task-form");
  document.querySelector(".show-form").onclick = function () {
    dialog.showModal();
    document.body.classList.add("dialog-open"); // Add class to body when dialog is open
  };
  document.querySelector(".hide-form").onclick = function () {
    dialog.close();
    document.body.classList.remove("dialog-open"); // Remove class from body when dialog is closed
  };
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    dialog.close();
    document.body.classList.remove("dialog-open"); // Make sure to remove the class after submission
  });
}

export default dialogFun;
