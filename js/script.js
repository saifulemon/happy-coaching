let showNavbar = document.querySelector("ul");
let menuIcon = document.querySelector(".menu-icon");
let logo = document.querySelector(".logo");

// show navbar on mobile
menuIcon.addEventListener("click", () => {
  let shownav = showNavbar.classList.toggle("show");
  document.body.classList.toggle("lock-scroll");
  shownav
    ? logo.classList.toggle("nav-show-logo")
    : logo.classList.toggle("nav-hide-logo");
  return shownav;
});
