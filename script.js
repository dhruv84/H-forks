// slider -1=========================================
const imgSlider = document.getElementById("imgSlider");
const sliderImages = document.querySelectorAll(".img__slider .img-S");

const imgWidth = sliderImages[0].getBoundingClientRect().width;

let index = 0;

function slideImg() {
  index++;

  if (index > sliderImages.length - 1) {
    index = 0;
  }

  imgSlider.style.transform = `translateX(${-imgWidth * index}px)`;
}

setInterval(slideImg, 30000);

// heading-color=========================================
const heading1 = document.getElementById("sectionHeading1");
const para1 = document.getElementById("sectionPara1");
const Menu1 = document.querySelector(".nav__menu");

index2 = 0;

function changeColor() {
  index2++;

  if (index2 > 4) {
    index2 = 0;
    heading1.classList.remove("heading-4");
    para1.classList.remove("heading-4");
    Menu1.classList.remove("heading-4");
  }

  heading1.classList.add(`heading-${index2}`);
  para1.classList.add(`heading-${index2}`);
  Menu1.classList.add(`heading-${index2}`);

  if (heading1.classList.contains(`heading-${index2 - 1}`)) {
    heading1.classList.remove(`heading-${index2 - 1}`);
    para1.classList.remove(`heading-${index2 - 1}`);
    Menu1.classList.remove(`heading-${index2 - 1}`);
  }
}

setInterval(changeColor, 30000);

// Navigate=========================================
const nav = document.querySelector(".navigation");
const navToggle = document.getElementById("nav__toggle");
const header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  if (!nav.classList.contains("navigate")) {
    nav.classList.add("navigate");
  } else {
    nav.classList.remove("navigate");
  }
});

window.addEventListener("scroll", () => {
  this.scrollY > 200
    ? header.classList.add("headTop")
    : header.classList.remove("headTop");
});

// Scroll=========================================
const scrollSide1 = document.getElementById("dataFoods");
const scrollSide2 = document.getElementById("imgFoods");

window.addEventListener("scroll", () => {
  scrollSide1.style.left = -window.pageYOffset * 2 + "px";
  scrollSide2.style.right = -window.pageYOffset * 2 + "px";
});
