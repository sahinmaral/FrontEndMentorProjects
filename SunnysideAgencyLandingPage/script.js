const navbarMenuMobileElement = document.querySelector(".navbar-menu-mobile");

const toggleNavbarMenuMobileVisibility = () => {
  const elementStyle = window.getComputedStyle(navbarMenuMobileElement);
  if (elementStyle.visibility === "visible") {
    navbarMenuMobileElement.style.visibility = "hidden";
  } else {
    navbarMenuMobileElement.style.visibility = "visible";
  }
};

const resizeHeaderAtMobile = () => {
  const headerElement = document.querySelector("header");
  let width = window.innerWidth - 10;

  if (width > 450 && width <= 750) {
    const value = 750 - width;
    headerElement.style.paddingBottom = `${300 - value / 2}px`;
  }
};

window.addEventListener(
  "resize",
  () => {
    resizeHeaderAtMobile();
  },
  true
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    resizeHeaderAtMobile();
  },
  true
);
