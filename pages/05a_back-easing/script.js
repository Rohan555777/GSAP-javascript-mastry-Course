import { gsap } from "gsap";

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let tabRow = document.querySelector(".tab-row");

const updateIndicator = (target) => {
  let rowBound = tabRow.getBoundingClientRect();
  let tabBound = target.getBoundingClientRect();

  let leftSide = tabBound.left - rowBound.left 
  console.log(leftSide, rowBound.left, tabBound.left);

  gsap.to(indicator, {
    width: tabBound.width,
    left: leftSide,
    ease: "back.out(1.7)",
    duration: 0.4,
  });
};

tabs.forEach((tab) => {
  return tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(document.querySelector(".tab.active"));
  });
});

updateIndicator(document.querySelector(".tab.active"));
