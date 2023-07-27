(function () {
  "use strict";

  var $hamb = document.getElementById("hamb");

  $hamb.addEventListener("click", toggleMenu);

  function toggleMenu() {
    var $nav = document.getElementById("ul-nav");
    // com a nav criada é possível acessar suas classes por mieo do classList e com isso adicionar ou tirar uma nova classe com o toggle
    $nav.classList.toggle("active");
  }
})();
