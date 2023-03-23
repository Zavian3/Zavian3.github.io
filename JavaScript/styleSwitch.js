const styleSwitcherToggle = document.querySelector(".styleSwitcherToggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".styleSwitcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".styleSwitcher").classList.contains("open")) {
    document.querySelector(".styleSwitcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternateStyle");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const dayNight = document.querySelector(".dayNight");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.add("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
