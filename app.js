const basketBall = document.getElementById("image");

const screenWidth = window.innerWidth;
const maxSpeed = 10;

window.addEventListener("mousemove", (details) => {
  
  let xVal = gsap.utils.mapRange(0, window.innerWidth, 120 + basketBall.getBoundingClientRect().width/2, window.innerWidth - (120 + basketBall.getBoundingClientRect().width/2), details.clientX)

  let mouseX = details.clientX;
  basketBall.style.left = xVal + 'px';

});
