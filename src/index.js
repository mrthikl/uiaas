const headerButtonMenu = document.querySelector(".header__button--menu");
const menuContent = document.querySelector(".header__menu");
const header = document.querySelector("header");
const projectButton = document.getElementById("projectButton");
const pricingButton = document.getElementById("pricingButton");
const FAQButton = document.getElementById("FAQButton");
const featuresButton = document.getElementById("featuresButton");
const scrollButton = document.querySelector("scroll");
const mediaMin1024 = window.matchMedia("(min-width: 1024px)");

//observer API header
const sectionOne = document.querySelector(".pricing");
const project = document.querySelector(".project");
const sectionOneOptions = {
  rootMargin: "50% 0px -50% 0px",
  threshhold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      sectionOne.classList.add("background--dark");
      project.classList.add("background--dark");
      sectionOne.classList.remove("background--yellow");
      project.classList.remove("background--yellow");
    } else {
      sectionOne.classList.remove("background--dark");
      project.classList.remove("background--dark");
      sectionOne.classList.add("background--yellow");
      project.classList.add("background--yellow");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

// Scroll Header
var lastScroll = 0;
let openHeader = true;

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    setTimeout(function () {
      var scroll = $(window).scrollTop();
      if (scroll > lastScroll + 10) {
        $("#header").css({ top: "-90px" });
      } else if (scroll < lastScroll - 10) {
        if (mediaMin1024.matches) {
          $("#header").css({ top: "10px" });
        } else {
          $("#header").css({ top: "0" });
        }
      }
      lastScroll = scroll;
    });
  });
});

// Open menu Mobile
headerButtonMenu.addEventListener("click", () => {
  menuContent.classList.toggle("header__menu--open");
  headerButtonMenu.classList.toggle("hamburger");
  header.classList.toggle("topHeader");
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
$(".scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".content__project").offset().top,
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
  header.classList.remove("topHeader");
}
