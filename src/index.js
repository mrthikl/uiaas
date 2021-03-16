const headerButtonMenu = document.querySelector(".header__button--menu");
const menuContent = document.querySelector(".header__menu");
const header = document.querySelector("header");
const projectButton = document.getElementById("projectButton");
const pricingButton = document.getElementById("pricingButton");
const FAQButton = document.getElementById("FAQButton");
const featuresButton = document.getElementById("featuresButton");

// Scroll Header
var lastScroll = 0;

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    setTimeout(function () {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $("#header").css({ top: "-90px" });
      } else if (scroll < lastScroll - 10) {
        $("#header").css({ top: "10px" });
      }
      lastScroll = scroll;
    });
  });
});

// Open menu Mobile
headerButtonMenu.addEventListener("click", () => {
  menuContent.classList.toggle("header__menu--open");
  headerButtonMenu.classList.toggle("hamburger");
});

// aos js
AOS.init({
  duration: 1000,
  once: true,
});

AOS.refresh();

// Scroll in to
$("#projectButton").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#project").offset().top,
    },
    1000
  );
});
$("#pricingButton").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#pricing").offset().top,
    },
    1000
  );
});
$("#FAQButton").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#FAQ").offset().top,
    },
    1000
  );
});
$("#featuresButton").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#features").offset().top,
    },
    1000
  );
});

pricingButton.addEventListener("click", removeOpenMenu);
projectButton.addEventListener("click", removeOpenMenu);
FAQButton.addEventListener("click", removeOpenMenu);
featuresButton.addEventListener("click", removeOpenMenu);

function removeOpenMenu() {
  menuContent.classList.remove("header__menu--open");
  headerButtonMenu.classList.remove("hamburger");
}
