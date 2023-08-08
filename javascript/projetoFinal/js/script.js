(function () {
  var $btnMobile = document.getElementById("btn-mobile");
  var $slide = document.querySelector(".slide .slideshow");
  var $itens = document.querySelector("figure");
  var $btnPrev = document.querySelector(".prev");
  var $btnNext = document.querySelector(".next");
  var _currentSlider = 0;

  $btnMobile.addEventListener("click", toggleMenu);

  function toggleMenu() {
    var $nav = document.getElementById("nav");
    $nav.classList.toggle("active");
  }

  init();

  function init() {
    var _show = $slide.querySelectorAll(".show");

    Array.prototype.forEach.call(_show, function (sh) {
      sh.classList.remove("show");
    });
    $itens.classList.add("show");
    $btnNext.removeAttribute("style");
    $btnPrev.removeAttribute("style");

    addlistener();
  }

  function addlistener() {
    $btnNext.addEventListener("click", function () {
      _currentSlider++;
      showSlide();
    });
    $btnPrev.addEventListener("click", function () {
      _currentSlider--;
      showSlide();
    });
  }

  function showSlide() {
    var qtd = $itens.lenght;
    var slider = _currentSlider % qtd;
  }
})();
