$(function () {

   //============= HAMBURGER  start ==================
   function hamburger() {
      let hamburger = $('.hamburger'),
          menu = $('.navigation');
      hamburger.on('click', function () {
         $(this).toggleClass('is-active');
         // Menu toggle visible

         // for mobile
         if ($(window).width() < 768) {
            if (hamburger.hasClass('is-active')) {
               menu.css('display', 'flex').hide().slideDown('200');
            } else {
               menu.slideUp('200');
            }
         } else { // for tablet+desktop
            if (hamburger.hasClass('is-active')) {
               menu.css('display', 'flex').hide().fadeIn('200');
            } else {
               menu.fadeOut('200');
            }
         }

      })
   }

   hamburger();
   //============= HAMBURGER end ==================


   //============= SCROLL start ==================
   let menuLink = $('a[href*="#"]');

   menuLink.on('click', function (event) {
      event.preventDefault();
      let target = $(this).attr('href');
      let top = $(target).offset().top;
      $('html, body').stop().animate({scrollTop: top}, 'slow', 'swing');
   });
   //============= SCROLL end ==================


   //============= QUOTES Slider start ==================
   $('.quotes-slider').slick({
      slidesToShow: 1,
      dots: true,
      infinite: true,
      speed: 700,
      arrows: false
   });
   //============= QUOTES Slider end ==================

   //============= LATEST_BLOG Slider start ==================
   $('.latest_blog-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      infinite: true,
      speed: 700,
      arrows: false,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });
   //============= LATEST_BLOG Slider end ==================

   //============= BUTTON UP start ==================
   function btnUp() {

      let btnScroll = $('.top-btn');

      $(window).scroll(() => {
         if ($(this).scrollTop() > $(window).height()) {
            btnScroll.addClass('active');
         } else {
            btnScroll.removeClass('active');
         }
      });

      btnScroll.on('click', () => {
         $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
      });

   }

   btnUp();
   //============= BUTTON UP end ==================

   //============= CALLBACK FORM start ==================
   //E-mail Ajax Send
   $("form#s-contacts__callback").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         $('.success__modal-wrap').css('display', 'flex').hide().fadeIn(300).delay(5000).fadeOut(200);
         $('.success__modal').fadeIn(300).delay(5000).fadeOut(200);

         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

   $('.success__modal-close').on('click', function () {
      $('.success__modal-wrap').stop().fadeOut(200);
      $('.success__modal').stop().fadeOut(200);
   });

   $(document).mouseup(function (e) { // событие клика по веб-документу
      let formMessage = $('.success__modal'); // тут указываем ID элемента
      let formOverlay = $('.success__modal-wrap');
      if (!formMessage.is(e.target) // если клик был не по нашему блоку
          && formMessage.has(e.target).length === 0) { // и не по его дочерним элементам
         formMessage.hide(); // скрываем его
         formOverlay.hide(); // скрываем его
      }
   });
   //============= CALLBACK FORM end ==================

});
