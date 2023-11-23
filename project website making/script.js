
let container = document.querySelector('.container');
let a = document.querySelectorAll('.a');


container.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;

    a[0].style.transform = 'translate('+ X/700*-2 +'px, '+ Y/300*-2 +'px)';
    a[1].style.transform = 'translate('+ X/70 +'px, '+ Y/100 +'px)';
    a[2].style.transform = 'translate('+ X/70*-1 +'px, '+ Y/80*-1 +'px)';
    a[3].style.transform = 'translate('+ X/20*-2 +'px, '+ Y/80*-2 +'px)';
    a[4].style.transform = 'translate('+ X/20*-2 +'px, '+ Y/80*-2 +'px)';
    a[5].style.transform = 'translate('+ X/70*-3 +'px, '+ Y/80*-3 +'px)';
    a[6].style.transform = 'translate('+ X/70*-4 +'px, '+ Y/20*-4 +'px)';
}


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to("#a0", 1, { y: -10 })
    .to("#a1", 10, { y: -200 })
    .fromTo(".title",{ y: -60 }, { y: 0, duration: 5 }, "-=10")
    .to("#a2", 10, { y: -100 }, "-=10")
    .fromTo("#a3", { y: -60 }, { y: 0, duration: 11 }, "-=10")
    .fromTo("#a4", { y: -10 }, { y: 0, duration: 5 }, "-=10")
    .fromTo("#a5", { y: -10 }, { y: 0, duration: 5 }, "-=10")
    .to(".content", 10, { top: "0%" }, "-=10")
    .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    .fromTo(".videoh", { opacity: 0 }, { opacity: 1, duration: 2 });
    

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller)
