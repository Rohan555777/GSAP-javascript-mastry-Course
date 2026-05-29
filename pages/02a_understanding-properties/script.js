import { gsap } from "gsap";

gsap.to(".box", {
  scale: 1,
  // background: "#eb4034",
  borderRadius: "50%",
  rotate: 360,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: "power1.in",
  // border : '1rem , black , solid'
  skewX : 10,
  delay : .3
});
