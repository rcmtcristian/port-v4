let faceCont = new Zdog.Illustration({
  element: ".face",
  dragRotate: true,
  zoom: 10,
  // stop spinning when drag starts
  onDragStart: function () {
    isSpinning = false;
  },
});

let head = new Zdog.Shape({
  addTo: faceCont,
  stroke: 12,
  color: "#0f3462",
});

let eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2, // semi-circle
  translate: { x: -2, y: 1, z: 4.5 },
  rotate: { z: -Zdog.TAU / 4 },
  color: "#5fc6bc",
  stroke: 0.5,
  backface: false,
});

eye.copy({
  translate: { x: 2, y: 1, z: 4.5 },
});

new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: Zdog.TAU / 4 },
  closed: true,
  color: "#FED",
  stroke: 0.5,
  fill: true,
  backface: false,
});

// function animateOne() {
//   faceCont.rotate.y += isSpinning ? 0.053 : 0
//   faceCont.updateRenderGraph();

//   requestAnimationFrame(animateOne)
// }

let ticker = 0;
const cycleCount = 150;

function animateOne() {
  let progress = ticker / cycleCount;
  // apply easing to rotation
  let tween = Zdog.easeInOut(progress % 1, 3);

  let spaced = tween * Zdog.TAU;
  ticker++;
  faceCont.rotate.y = spaced ? spaced : 0;
  faceCont.updateRenderGraph();
  requestAnimationFrame(animateOne);
}

animateOne();

// const loader = document.getElementById("loader");

// window.addEventListener("load", function () {
//   loader.style.opacity = "0";
//   loader.style.display = "none";
// });

// //animation fades slowly out after everything is loaded

// window.addEventListener("load", function () {
//   // loader.style.opacity = "0";
//   // loader.style.display = "none";
//   loader.classList.toggle("fade-out");
// });
