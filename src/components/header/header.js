// const header = document.querySelector(".header");
// let isScrolled = false;

// function toggleHeaderClass() {
//   if (window.pageYOffset > 0 && !isScrolled) {
//     header.classList.add("scrolled");
//     isScrolled = true;
//   } else if (window.pageYOffset === 0 && isScrolled) {
//     header.classList.remove("scrolled");
//     isScrolled = false;
//   }
// }

// document.addEventListener("wheel", toggleHeaderClass);

const header = document.querySelector(".header-scroll");
const sectionBelowHeader = document.querySelector(".add-scrolled"); // Замените ".section-below-header" на селектор вашей секции

let isScrolled = false;

function toggleHeaderClass() {
  if (window.pageYOffset > sectionBelowHeader.offsetTop && !isScrolled) {
    header.classList.add("scrolled");
    isScrolled = true;
  } else if (window.pageYOffset <= sectionBelowHeader.offsetTop && isScrolled) {
    header.classList.remove("scrolled");
    isScrolled = false;
  }
}

document.addEventListener("scroll", toggleHeaderClass);
