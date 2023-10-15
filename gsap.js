gsap.registerPlugin(ScrollTrigger);

gsap.from("#navbar", {
    y: -200,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: true
})

var t1 = gsap.timeline();
t1.from(".hero-content", {
    opacity: 0,
    duration: 1,
    delay: 0.2
})

gsap.from(".cards > *", {
    scale: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: ".cards > *" 
})

gsap.from("#define-content", {
    opacity: 0,
    scale: 0.3,
    transformOrigin: "bottom right",
    duration: 0.5,
    scrollTrigger: {
        target: "#define-content",
        toggleActions: "restart reverse restart reverse"
    }
})

gsap.from("#why-content > *", {
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scale: 0.3,
    transformOrigin: "right bottom",
    scrollTrigger: {
        trigger: "#why-content > *",
        start: "20% 70%",
        toggleActions: "restart reverse restart reverse"
    }
})

var t2 = gsap.timeline();
t2.from(".boxes > *", {
    opacity: 0,
    duration: 1,
    stagger: 1,
    repeat: -1,
    delay: 1,
    scale: 0.9
})