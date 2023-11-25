function dialogFun() {
  const dialog = document.querySelector(".form-window");
  document.querySelector(".show-form").onclick = function () {
    dialog.showModal();
  };
  document.querySelector(".hide-form").onclick = function () {
    dialog.close();
  };
}
export default dialogFun;
