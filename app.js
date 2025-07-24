gsap.registerPlugin(ScrollTrigger);

const tl=gsap.timeline();
tl.from(".title span" ,{
y:150,
skewY:7,
duration:3,
stagger:0.05,
}).from(".text-bottom", {
  y:5,
    stagger:0.1,
    duration:0.5,
 
    opacity:0,
})

gsap.to(".img-container", {
    scale:52,
    ease:"ease",
    

    scrollTrigger: {
       trigger:".video-section",
       scrub:1,
       start:"top top",
       end:"bottom",
       pin:true,
       stagger:0.1,

    }
})

tl.to(".r", {
    autoAlpha:0,
    x:-900,
    scale:0.5,
    ease:"ease",
    duration:2.5,
    opacity:0,
    scrollTrigger: {
        autoAlpha:0,
       start:1,
       scrub:1,
    }
})
gsap.to(".l", {
    autoAlpha:0,
    x:900,
    scale:1.5,
    ease:"ease",
    duration:2.5,
    
    scrollTrigger: {

       start:1,
       scrub:1,
    }
})