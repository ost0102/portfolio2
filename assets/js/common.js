// window.onload = function() {
//   setTimeout(function() {
//       window.scrollTo(0, 0); 
//   }, 100);  
// };

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

$(window).scroll(function() {
  if ($(window).scrollTop() > 2) {
    $('header').addClass('difference');
  }else{
    $('header').removeClass('difference');
  }
});