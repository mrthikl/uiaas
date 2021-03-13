const headerButtonMenu = document.querySelector(".header__button--menu");
const menuContent = document.querySelector(".header__menu");
const header = document.querySelector("header");

// Open menu Mobile
headerButtonMenu.addEventListener("click", () => {
  menuContent.classList.toggle("header__menu--open");
});

// Scroll Header
var lastScroll = 0;

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    setTimeout(function () {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $("#header").css({ top: "-80px" });
      } else if (scroll < lastScroll - 10) {
        $("#header").css({ top: "0" });
      }
      lastScroll = scroll;
    });
  });
});

// aos js
AOS.init({
  duration: 1000,
  once: true,
});
