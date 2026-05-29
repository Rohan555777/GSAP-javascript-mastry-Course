import { gsap } from "gsap";

let animation = gsap.to(".box", {
  rotate: 360,
  borderRadius: "50%",
  duration: 2,
  scale: 0.86,
});

// Select all buttons
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let resume = document.querySelector(".resume");
let restart = document.querySelector(".restart");
let reverse = document.querySelector(".reverse");
let kill = document.querySelector(".kill");
let repeat = document.querySelector(".repeat");

play.addEventListener('click' , ()=>{
  animation.play()
})
pause.addEventListener('click' , ()=>{
  animation.pause()
})
resume.addEventListener('click' , ()=>{
  animation.resume()
})
restart.addEventListener('click' , ()=>{
  animation.restart()
})
reverse.addEventListener('click' , ()=>{
  animation.reverse()
})
kill.addEventListener('click' , ()=>{
  animation.kill()
})
repeat.addEventListener('click' , ()=>{
  animation.repeat(-1)
})
