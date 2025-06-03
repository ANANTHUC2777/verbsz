const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("change");
  navMenu.classList.toggle("active");
});
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("header").addClass("effect");
    } else {
      $("header").removeClass("effect");
    }
  });
});
new WOW().init();
