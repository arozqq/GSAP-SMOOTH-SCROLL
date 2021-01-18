var tl = new TimelineMax({ onUpdate: updatePercetage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("blockquote", .5, { x: 200, opacity: 0 });
tl.from("span", 1, { width: 0 }, "=-.5");
tl.from("#montain", 1, { x: -200, opacity: 0 }, "=-1");
tl.from("#ice", 1, { x: 200, opacity: 0 }, "=-.7");

tl2.from('#box', 1, { opacity: 0, scale: 0 });
tl2.to('#box', .5, {
  left: "20%",
  scale: 1.3,
  borderColor: "white",
  borderWidth: 12,
  boxShadow: "1px 1px 0px 0px rgba(0,0,0,.09)"
});

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin('.sticky')
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
  .addTo(controller);


//buat liat pesentasenya
function updatePercetage() {
  tl.progress();
  console.log(tl.progress());
}