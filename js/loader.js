(function () {
  "use strict";

  var btn = document.querySelector(".button"),
    overlay = document.querySelector(".overlay"),
    loader = document.querySelector(".overlay-loader"),
    overlayTL = new TimelineMax(),
    loaderTL = new TimelineMax();

  var animateOut = function () {
    overlayTL.to(overlay, 0.6, {
      bottom: "100%",
      ease: Power4.easeInOut,
      delay: 0.25,
    });
    loaderTL.to(loader, 0.5, { y: "-40", opacity: 0 });
  };

  var animateOut_2 = function () {
    overlayTL.to(overlay, 0.6, {
      top: "100%",
      ease: Power4.easeInOut,
      delay: 0.25,
    });
    loaderTL.to(loader, 0.5, { y: "40", opacity: 0 });
  };

  var animateIn = function () {
    overlayTL.fromTo(
      overlay,
      0.6,
      { top: "100%", bottom: 0 },
      { top: 0, ease: Power4.easeInOut }
    );
    loaderTL.fromTo(
      loader,
      0.5,
      { y: "40", opacity: 0, delay: 0.3 },
      { y: 0, opacity: 1, delay: 0.6, ease: Power2.easeOut }
    );
  };

  // animateOut_2();
  setTimeout(animateOut_2, 7000);

  // btn.onclick = function () {
  //   animateIn();
  //   setTimeout(animateOut_2, 4000);
  // };
})();
