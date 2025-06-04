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
// new WOW().init();
//GSAP
document.addEventListener("DOMContentLoaded", function () {
  //button
  const buttons = document.querySelectorAll(".theme__btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        color: "#3cb4e5",
        borderColor: "#3cb4e5",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power1.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        color: "#fff",
        borderColor: "transparent",
        backgroundColor: "#3cb4e5",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  });

  //header
  gsap.from(".custom-nav-logo > a", {
    y: 100,
    duration: 1.5,
    opacity: 0,
    ease: "power3.out",
  });
  gsap.from(".custom-nav-menu ul li", {
    y: 100,
    duration: 1.5,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
    stagger: 0.3,
  });

  //banner
  gsap.from(".banner-leftCol > h1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5,
  });
  gsap.from(".banner-leftCol > p", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.8,
  });
  gsap.from(".banner-leftCol > button", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 1,
  });
  gsap.from(".box-1", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.7,
  });
  gsap.from(".box-2", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.8,
  });
  gsap.from(".banner-rightCol-img", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 1.5,
  });

  //mail
  gsap.from(".mail-content", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".mail",
      scroller: "body",
      //markers: true,
      start: "top center",
      end: "bottom top",
    },
  });

  // help
  const helptl = gsap.timeline({
    scrollTrigger: {
      trigger: ".help",
      // markers: "true",
      start: "top center",
      end: "bottom top",
    },
  });
  helptl
    .from(".help", {
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    })
    .from(".help-leftTxt", {
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    })
    .from(".help-contentTxt", {
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    })
    .from(".help-contentTxt .theme__btn", {
      y: 100,
      duration: 0.5,
      ease: "power3.out",
      opacity: 0,
    });

  //Box
  const helpIconBox = document.querySelectorAll(".help-iconBox-item");

  helpIconBox.forEach((el, i) => {
    gsap.from(el, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: i * 0.18,
      scrollTrigger: {
        trigger: ".help-contentTxt",
        markers: "true",
        start: "top 400",
        end: "bottom 450",
      },
    });
  });
});
