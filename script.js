// Shery.imageEffect(Element, configurations)
// Shery.imageEffect(".back",{style: 5,debug: true, config:{}})


Shery.imageEffect(".back",{style: 5, config:{
    "a":{"value":2.75,"range":[0,30]},
    "b":{"value":-0.97,"range":[-1,1]},
    "zindex":{"value":-9996999,
        "range":[-9999999,9999999]},
        "aspect":{"value":2.061158735291701},
        "ignoreShapeAspect":{"value":true},
        "shapePosition":{"value":{"x":0,"y":0}},
        "shapeScale":{"value":{"x":0.5,"y":0.5}},
        "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
        "shapeRadius":{"value":0,"range":[0,2]},
        "currentScroll":{"value":0},
        "scrollLerp":{"value":0.07},
        "gooey":{"value":true},
        "infiniteGooey":{"value":true},
        "growSize":{"value":4,"range":[1,15]},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1.5,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},
        "masker":{"value":false},
        "maskVal":{"value":1,"range":[1,5]},
        "scrollType":{"value":0},
        "geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":false},
        "onMouse":{"value":1},
        "noise_speed":{"value":0.2,"range":[0,10]},
        "metaball":{"value":0.163429,"range":[0,2],
            "_gsap":{"id":3}},
            "discard_threshold":{"value":0.83,"range":[0,1]},
            "antialias_threshold":{"value":0,"range":[0,0.1]},
            "noise_height":{"value":0.5,"range":[0,2]},
            "noise_scale":{"value":6.11,"range":[0,100]}}, 
    gooey: true,
});

gsap.from("h1",{
    opacity: 0,
    duration: 1,
    y:30,
    delay:0.7,
    stagger: -1,
})
gsap.from("#imagediv",{
    x: 1200,
    duration: 1,
    delay:3,
})




const docStyle = document.documentElement.style
const aElem = document.querySelector('a')
let boundingClientRect = aElem.getBoundingClientRect()
aElem.onmousemove = function(e) {
    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top
    const xc = boundingClientRect.width / 2
    const yc = boundingClientRect.height / 2
    const dx = x - xc
    const dy = y - yc
    docStyle.setProperty('--rx', `${ dy/-1 }deg`)
    docStyle.setProperty('--ry', `${ dx/10 }deg`)
}
aElem.onmouseleave = function(e) {
    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')
}
aElem.onmousedown = function(e) {
    docStyle.setProperty('--tz', '-25px')
}
document.body.onmouseup = function(e) {
    docStyle.setProperty('--tz', '-12px')
}
timeline = gsap.timeline();
timeline.fromTo("#view-my-work", {
      y: window.innerHeight / 2,
      scale: 0
    }, {
      y: window.innerHeight * 1 / 5,
      scale:1,
      onUpdate: () => boundingClientRect = aElem.getBoundingClientRect(),
      duration: 2,
});


//navbar animation...
var ab = gsap.timeline()
ab.from("#nav",{
    opacity:0,
    y:-30,
    duration:0.2,
    delay: 4.5,
})
ab.from("a",{
    y:-30,
    opacity:0,
    duration:0.3,
    delay: 0.5,
    stagger:0.1,
})
ab.to("a",{
    display:none,
})


