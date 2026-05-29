gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 0.4,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      
    });
  },
});


// logic of yoyo 
/*
repeat: 0   // play once
repeat: 1   // play 2 times total
repeat: 2   // play 3 times total
repeat: -1  // infinite loop

repeatDelay: 1 // wait 1 second before next repeat

yoyo: true // reverse direction on repeat */
