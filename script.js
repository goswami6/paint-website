function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
    tl.to(".nav-bottom",{
        height: "18vh"
    })
    tl.to(".nav-part-2 h5",{
        display: "block"
    })
    tl.to(".nav-part-2 h5 span",{
        y: 0,
        // duration: 0.3,
        stagger:{
            amount: 0.6
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
   
    tl.to(".nav-part-2 h5 span",{
        transform: `translateY(25px)`,
        // duration: 0.3,
        stagger:{
            amount: 0.2
        }
    })
    tl.to(".nav-part-2 h5 ",{
        display: "none",
        duration: 0.1
    })
    tl.to(".nav-bottom",{
        height: "0",
        duration: 0.2
    })
})
}
navAnimation()

function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform: "scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

page3VideoAnimation()

$(document).ready(function() {

    var owl = $("#owl-demo1");

    owl.owlCarousel({

        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option

    });

    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })
    $(".play").click(function() {
        owl.trigger('owl.play', 1000);
    })
    $(".stop").click(function() {
        owl.trigger('owl.stop');
    })

});
