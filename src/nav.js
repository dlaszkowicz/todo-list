function projectMaker() {
  let lastClickedBtn = null;
  let projectSelected = "";
  const projectBtns = document.querySelectorAll("#project-btn");

  projectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (lastClickedBtn !== null) {
        lastClickedBtn.style.backgroundColor = ""; //
      }
      btn.style.backgroundColor = "#d2d0ce";
      projectSelected = btn.textContent;
      lastClickedBtn = btn;
      console.log(projectSelected);
    });
  });
}

export default projectMaker;
