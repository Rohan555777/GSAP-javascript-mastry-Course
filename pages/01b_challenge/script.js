import { gsap } from "gsap";

gsap.to(".card", {
  scale: 0.85,
  repeat: -1,
  yoyo: true,
  boxShadow: "0px 20px 60px rgba(128, 0, 255, 0.5)",
  transition : 1,
  duration : 1.5
});

