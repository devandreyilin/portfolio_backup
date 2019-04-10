$(function () {
   $('.numeric').numeric();

   $(window).on('load', () => {
      let navBarHeight = $('#nav-bar').height();

      let scroll = new SmoothScroll('a[href*="#"]', {
         speed: 1200,
         speedAsDuration: true,
         offset: navBarHeight
      });
      $('body').css('paddingTop', navBarHeight);

      // Close menu
      if ($(window).width() < 992) {
         $('.nav-link').on('click', function () {
            $('.navbar-toggler').click();
         });
      }
   });

});

