function dialogFun() {
  const dialog = document.querySelector(".form-window");
  const form = document.querySelector(".task-form");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  document.querySelector(".show-form").onclick = function () {
    dialog.showModal();
    document.body.classList.add("dialog-open");
  };
  document.querySelector(".hide-form").onclick = function () {
    form.reset();
    dialog.close();
  };
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.reset();
    dialog.close();
  });
}

export default dialogFun;
