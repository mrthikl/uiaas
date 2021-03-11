const headerButtonMenu = document.querySelector(".header__button--menu");
const menuContent = document.querySelector(".header__menu");

// Open menu Mobile
headerButtonMenu.addEventListener("click", () => {
  menuContent.classList.toggle("header__menu--open");
});
