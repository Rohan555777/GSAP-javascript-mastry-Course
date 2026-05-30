import { gsap } from "gsap";

const button = document.querySelector(".scroll-to-top");
let isFloting = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");

    if (!isFloting) {
      gsap.to(button, {
        y: -15,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: "sine.out",
      });
    }
    isFloting = true;
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.15,
  });
});
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
  });
});
button.addEventListener("click", () => {
  window.scroll(0, 0);
});
