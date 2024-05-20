var navMenu = function(){
    var menu = document.querySelector(".part2  i")
    var cross = document.querySelector(".fulltab i")

    menu.addEventListener("click",()=>{
        console.log("hey")
    })




var tl = gsap.timeline()

tl.to(".fulltab",{
    right:0,
    duration:0.7
})
tl.from(".fulltab h4",{
    x:150,
    opacity:0,
    duration:0.6,
    stagger:0.3
})
tl.from(".fulltab i",{
    opacity:0
})

tl.pause()


menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
}
navMenu()



var trya = function(){
    function myFunction(x) {
        var mobView = document.querySelector("#mobile-elem")
        if (x.matches) 
        { 
            function page1Animation(){
                var tl = gsap.timeline()
            
            tl.from("nav h1, i",{
                y:-20,
                opacity:0,
                delay:0.5,
                duration:0.7,
                stagger:0.2
            })
            
            gsap.from(".center-part1 h1",{
                x:-100,
                opacity:0,
                duration:0.2,
                delay:1.3,
            })
            
            tl.from(".center-part1 p span",{
                x:-100,
                opacity:0,
                duration:0.4,
                ease: "expo.out",
                stagger:0.2
            })
            
            gsap.from(".center-part2 img",{
                x:100,
                opacity:0,
                duration:0.5,
                delay:1.5
            })
            
            gsap.from(".page1Bottom img",{
                y:30,
                opacity:0,
                duration:0.5,
                delay:2,
                stagger:0.2
            })
            gsap.from(".elem.one,.elem.two,.elem.three,.elem.four",{
                x:-100,
                duration:1,
                opacity:0,
                stagger:1,
                scrollTrigger:{
                    trigger:".services",
                    scroller:".main",
                    start:"top 50%",
                    end:"top -20%",
                    // markers:true,
                    scrub:2
                }
            })

            gsap.from(".SecondHalfPage3 img",{
                scale:0,
                duration:0.2,
                opacity:0,
                scrollTrigger:{
                    trigger:".SecondHalfPage3 img",
                    scroller:".main",
                    start:"top 80%",
                    end:"top 50%",
                    // markers:true,
                    scrub:2
                }
            })
            }
            page1Animation()


            if (mobView) 
            {
                mobView.classList.remove("elem");
            }

        } 
        else {
            function pageAnimation(){
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


                gsap.from(".services",{
                    x:-300,
                    duration:1,
                    opacity:0,
                    scrollTrigger:{
                        trigger:".services",
                        scroller:"body",
                        start:"top 60%",
                        end:"top 50%",
                        // markers:true,
                        scrub:2
                    }
                })
                gsap.from(".elem.one",{
                    x:-300,
                    y:-100,
                    duration:1,
                    opacity:0,
                    scrollTrigger:{
                        trigger:".services",
                        scroller:"body",
                        start:"top 40%",
                        end:"top 30%",
                        // markers:true,
                        scrub:2
                    }
                })
                gsap.from(".elem.two",{
                    x:300,
                    y:-100,
                    duration:1,
                    opacity:0,
                    scrollTrigger:{
                        trigger:".services",
                        scroller:"body",
                        start:"top 40%",
                        end:"top 30%",
                        // markers:true,
                        scrub:2
                    }
                })
                gsap.from(".elem.three",{
                    x:-300,
                    y:100,
                    duration:1,
                    opacity:0,
                    scrollTrigger:{
                        trigger:".services",
                        scroller:"body",
                        start:"top 25%",
                        end:"top 10%",
                        // markers:true,
                        scrub:2
                    }
                })
                gsap.from(".elem.four",{
                    x:300,
                    y:100,
                    duration:1,
                    opacity:0,
                    scrollTrigger:{
                        trigger:".services",
                        scroller:"body",
                        start:"top 25%",
                        end:"top 10%",
                        // markers:true,
                        scrub:2
                    }
                })
                }
            
            pageAnimation()
            

            if (mobView) {
                mobView.classList.add("elem");
            }
        }
      }
      var x = window.matchMedia("(max-width: 700px)")
      
      myFunction(x);
      
      x.addEventListener("change", function() {
        myFunction(x);
      });
}
trya()


