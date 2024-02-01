let showNavbar = document.querySelector("ul");
let menuIcon = document.querySelector(".menu-icon");
let logo = document.querySelector(".logo");
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

//  header sticky
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// show navbar on mobile
menuIcon.addEventListener("click", (e) => {
  let shownav = showNavbar.classList.toggle("show");
  document.body.classList.toggle("lock-scroll");
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
