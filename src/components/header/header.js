 

const header = document.querySelector(".header-scroll");
const sectionBelowHeader = document.querySelector(".add-scrolled");  

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








