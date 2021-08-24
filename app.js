const intro = document.querySelector(".intro");

const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//End Section
const section = document.querySelector("section");
const end = section.querySelector("h1");

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({ //é o end, quando ele chega ao topo, o video começa a subir junto com o scroll
    duration: 1000, //é o tempo que leva para o scrool descer e o video continuar aparecendo na tela
    triggerElement: intro,
    triggerHook: 0 //"altura" do video em relação ao topo 
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 6000, //tempo do inicio ao fim do video
    triggerElement: intro,
    triggerHook:0
})
.setTween(textAnim)
.addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);
