(function () {
  var $btnMobile = document.getElementById("btn-mobile");

  $btnMobile.addEventListener("click", toggleMenu);

  function toggleMenu() {
    var $nav = document.getElementById("nav");
    $nav.classList.toggle("active");
  }

  //Scroll carousel

  let isDragStart = false,
    prevPageX,
    prevScrollLeft;
  var $carousel = document.querySelector(".carousel");

  const dragStop = () => {
    isDragStart = false;
  };
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = $carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    $carousel.scrollLeft = prevScrollLeft - positionDiff;
  };

  $carousel.addEventListener("mousedown", dragStart);
  $carousel.addEventListener("mousemove", dragging);
  $carousel.addEventListener("mouseup", dragStop);

  //arrows Carousel

  var $arrowsIcons = document.querySelectorAll(".wrapper i");
  var $firstImage = $carousel.querySelectorAll("img")[0];

  let firstImgWidth = $firstImage.clientWidth + 10;

  $arrowsIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      $carousel.scrollLeft +=
        icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });
})();
