// gsap.to(".row", {

//    scrollTrigger: '.row',
//    x: 500

// })

// gsap.to(".row", {

//    scrollTrigger: {
//        trigger:'.row',
//        start:"top top",
//        pin:true,
//        end:"+=500",
//        scrub: 1,
//    },
//    x: 500

// })

gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, marginBottom: 20});
    },
    defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

// now we can use it like this:
gsap.effects.fade(".service",{duration: 3});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.container-e',
        start:"center bottom",
    }


});

tl.from(".pbs", { x: 200, opacity: 0, duration: 1.5 })
  .from(".m", {y:300 , opacity: 0 , duration:1}, "-=1" );


  document.addEventListener("DOMContentLoaded", function(){
    var array = ["Myntra", "Swiggy", "Paytm Money", "Stanford University", "Aditya Birla", "Bajaj Finserv", "100+ Startups"];
    var i=0;
    while(i<7)
    setInterval(() => {
        document.getElementById("changer").innerText = array[i];
        if(i==6){
            i=0;
        }
    }, 2);
  } )

// changer = () =>{
//     var array = ["Myntra", "Swiggy", "Paytm Money", "Stanford University", "Aditya Birla", "Bajaj Finserv", "100+ Startups"];
//     var i=0;
//     while(i<7)
//     setInterval(() => {
//         document.getElementById("changer").innerText = array[i];
//         if(i==6){
//             i=0;
//         }
//     }, 2);
// } 