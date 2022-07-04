const scroll = new SmoothScroll('.scrolly [href*="#"]', {
  speed: 800
});

(function() {
  if (document.querySelector("#top-nav-toggle")) {
    var navToggle = document.querySelector("#top-nav-toggle");

    function watchNavClose(e) {
      var topNav = document.querySelector(".top-bar");
      if (!e.path.includes(topNav)) {
        openCloseNav();
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    function openCloseNav() {
      var navToggle = document.querySelector("#top-nav-toggle");

      if (!navToggle.classList.contains("closed")) {
        navToggle.classList.add("closed");
        document.querySelector("#top-bar__nav").classList.remove("collapsed");
        document.querySelector("html").addEventListener("click", watchNavClose);
      } else {
        navToggle.classList.remove("closed");
        document.querySelector("#top-bar__nav").classList.add("collapsed");
        document.documentElement.removeEventListener("click", watchNavClose);
      }
    }

    navToggle.addEventListener("click", openCloseNav);
  }
})();


// //option to smoth scroll 
// $('#nav a').on('click', function(e) {
//   if(this.hash !== '') {
//    e.preventDefault();
 
//    const hash = this.hash;
 
//    $('html, body').animate({
//      scrollTop: $(hash).offset().top
//    }, 800
//    );
//   }
//  });