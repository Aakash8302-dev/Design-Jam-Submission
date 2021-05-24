const about = document.querySelector(".about-headline");
const section = document.querySelector(".about-section")
const hero = document.querySelector('.hero')


// const t1 = new TimelineMax();

// t1.fromTo(about, 2, {height: '0rem'},{height: '30rem', ease: Power2.easeInOut})

let t1 = gsap.timeline();

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: section,
    }
});



t1.from(hero, {height: 0, opacity:0, duration:1.5})

t2.from(about, {x:300,  opacity: 0, duration :1.5})