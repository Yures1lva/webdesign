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

  this.btn.removeAttribute("style");
  closeMenu();

  var _opened = false;
  var _this = this;

  this.btn.addEventListener("click", openClose);

  function openClose() {
    if (!_opened) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    var _top = this.nav.getBoundingClientReact()._top + "px";
    var _style = {
      maxHeigth: "calc(100vh - " + _top + ")",
      overflow: "hidden",
    };

    applyStyleToNav(_style);
    _opened = true;
  }

  function closeMenu() {
    var _style = {
      maxHeigth: "0px",
      overflow: "hidden",
    };

    applyStyleToNav(_style);
    _opened = false;
  }

  function applyStyleToNav(_style) {
    Object.keys(_style).forEach((stl) => {
      _this.nav._style[stl] = _style[stl];
    });
  }
}
