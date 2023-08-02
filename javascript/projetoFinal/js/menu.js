function Menu(config) {
  this.nav =
    typeof config.container === "string"
      ? document.querySelector(config.container)
      : config.container;

  this.btn =
    typeof config.toggleBtn === "string"
      ? document.querySelector(config.toggleBtn)
      : config.toggleBtn;

  this.maxWidth = config.widthEnable || false;

  this.btn.revomeAttrinbute("style");

  var _opened = false;
  var _this = this;

  this.btn.addEventListener("click", openClose);

  function openClose() {
    if (!opened) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    _opened = true;
  }

  function closeMenu() {
    _opened = false;
  }
}
