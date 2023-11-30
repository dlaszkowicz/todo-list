function projectMaker() {
  let projectSelected;
  let lastClickedBtn = null;
  const projectBtns = document.querySelectorAll("#project-btn");

  projectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (lastClickedBtn !== null) {
        lastClickedBtn.style.backgroundColor = ""; //
      }
      btn.style.backgroundColor = "#d2d0ce";
      projectSelected = btn.textContent;
      lastClickedBtn = btn;
    });
  });
  return projectSelected;
}

export default projectMaker;
