function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-20,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.2
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.7,
    ease: "expo.out",
})

tl.from(".center-part1 p span",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease: "expo.out",
    stagger:0.2
})

tl.from(".center-part1 button",{
    x:-100,
    opacity:0,
    duration:0.2
})

gsap.from(".center-part2 img",{
    x:300,
    opacity:0,
    duration:0.5,
    delay:2.5
})

gsap.from(".page1Bottom img",{
    y:30,
    opacity:0,
    duration:0.5,
    delay:3,
    stagger:0.2
})
}

page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})


tl2.from(".services ",{
    x:-100,
    opacity:0,
    duration:0.3
})

tl2.from(".elem.one",{
    x:-100,
    y:-100,
    opacity:0,
    duration:0.5
},"first")

tl2.from(".elem.two",{
    x:100,
    y:-100,
    opacity:0,
    duration:0.5
},"first")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2
    }
})


tl3.from(".elem.three",{
    x:-100,
    y:100,
    opacity:0,
    duration:0.5,
},"second")

tl3.from(".elem.four",{
    x:100,
    y:100,
    opacity:0,
    duration:0.5,
},"second")