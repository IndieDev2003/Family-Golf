var crsr=document.querySelector("#cursor")
var blr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log("Hello", dets.x)
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blr.style.left =dets.x - 100 +"px"
    blr.style.top =dets.y - 100 +"px"
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.7,
    // delay:1
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:2
    }
})