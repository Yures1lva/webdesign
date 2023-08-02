(function () {
  var $body = document.querySelector("body");
  $body.classList.remove("no-js");
  $body.classList.add("js");

  var $menu = new menubar({
    container: "header__nav",
    toggleBtbn: "header__btnMenu",
    widthEnable: 1024,
  });
})();
