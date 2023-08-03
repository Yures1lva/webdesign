(function () {
  var $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  var $btnMenu = document.querySelector(".header__btnMenu");
  $btnMenu.removeAttribute("style");

  var $menu = new menubar({
    container: "header__nav",
    toggleBtbn: "header__btnMenu",
    widthEnable: 1024,
  });
})();
