function burgerMenuFun() {
  const burgerMenu = document.getElementById(".burger-menu");
  burgerMenu.addEventListener("click", function () {
    if ((burgerMenu.display = "none")) {
      burgerMenu.display = "block";
    } else if ((burgerMenu.display = "block")) {
      burgerMenu.display = "none";
    }
  });
}
