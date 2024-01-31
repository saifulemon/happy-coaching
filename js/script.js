let showNavbar = document.querySelector("ul");
let menuIcon = document.querySelector(".menu-icon");
let logo = document.querySelector(".logo");

// show navbar on mobile
menuIcon.addEventListener("click", (e) => {
  let shownav = showNavbar.classList.toggle("show");
  document.body.classList.toggle("lock-scroll");
  shownav
    ? logo.classList.toggle("nav-show-logo")
    : logo.classList.toggle("nav-hide-logo");
  return shownav;
});

// swiper slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
