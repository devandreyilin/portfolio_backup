$(function() {

   // E-mail Ajax Send
   $("form.callback").submit(function() { //Change
      let th = $(this);
      let suc = $(th).find('.success');
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function() {
         // console.log("Thank you!");
         suc.addClass('active').fadeIn();
         setTimeout(function() {
            // Done Functions
            suc.removeClass('active').fadeOut();
            yaCounter51711074.reachGoal('zayavka');return true;
            th.trigger("reset");
         }, 3000);
      });
      return false;
   });

   // Mmenu
   let mmenuBtn = $('#my-menu');

   $(mmenuBtn).mmenu({
      extensions: ['pagedim-black', 'position-right', 'theme-dark', 'fx-menu-slide'],
      navbar: {
         title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
      },
      classNames: {
         selected: 'my-menu__active'
      }
   });

   let API = mmenuBtn.data( 'mmenu' );
   let icon = $('a.hamburger');

   API.bind( 'open:finish', function() {
      setTimeout(function() {
         icon.addClass( 'is-active' );
      }, 100);
   });
   API.bind( 'close:finish', function() {
      setTimeout(function() {
         icon.removeClass( 'is-active' );
      }, 100);
   });

   // Carousel-services
   let carouselServices = $('.carousel-services');
   carouselServices.on('initialized.owl.carousel', () => {

      function carouselService() {

         // Window resize equalHeight apply
         function onResize() {
            $('.carousel-services-content').equalHeights();
         }onResize();
         window.onresize = function() {
            onResize();
         };

         let carouselItem = $('.carousel-services-item');

         carouselItem.each( function() {
            let thisEl = $(this),
                thisElHeight = thisEl.find('.carousel-services-content').outerHeight();
            thisEl.find('.carousel-services-image').css('min-height', thisElHeight);
         } );
      }
      setTimeout(carouselService, 100);
   });
   // Activate owlCarousel for carousel-services
   carouselServices.owlCarousel({
      nav: true,
      dots: false,
      smartSpeed: 700,
      navText: ['<i class="fal fa-chevron-double-left"></i>',
               '<i class="fal fa-chevron-double-right"></i>'],
      responsiveClass: true,
      responsive: {
        0: {
           items: 1
        },
         800: {
            items: 2
        },
         1100: {
            items: 3
         },
      },
   });
   // Wrap last word to <span></span>
   carouselServices.find('.h3').each( function() {
      let thisEl = $(this);
      thisEl.html(thisEl.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
   });

   // Wrap first word to <span></span>
   $('section .h2').each( function() {
      let thisEl = $(this);
      thisEl.html(thisEl.html().replace(/^(\S+)/, '<span>$1</span>'));
   });

   // Selectize
   $('select').selectize();

   let phoneNum = $('.js-numeric');
   phoneNum.numeric();

   // Carousel-reviews
   $('.carousel-reviews').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 700,
      items: 1,
      responsive:{
         0:{
            autoHeight: true
         },
         768:{
            autoHeight: false
         }
      }
   });

   // Carousel-partners
   $('.carousel-partners').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      smartSpeed: 700,
      items: 4,
      navText: ['<i class="far fa-chevron-left"></i>',
         '<i class="far fa-chevron-right"></i>'],
      responsive:{
         0:{
            items: 1,
         },
         600:{
            items: 2,
         },
         768:{
            items: 3,
         },
         992:{
            items: 4,
         }
      }
   });

   // Button up
   function btnUp() {

      let btnScroll = $('.top');

      $(window).scroll( () =>  {
         if ( $(this).scrollTop() > $(window).height() ) {
            btnScroll.addClass('active');
         } else {
            btnScroll.removeClass('active');
         }
      });

      btnScroll.on('click', () => {
         $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
      });

   }
   btnUp();

   $(window).on('load', () => {
      $('.preloader').delay(500).fadeOut('slow');
   });

});
