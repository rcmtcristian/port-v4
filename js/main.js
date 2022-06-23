const scroll = new SmoothScroll('.scrolly [href*="#"]', {
  speed: 800
});


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