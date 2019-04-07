$(function () {

   // SVG Injecter
   SVGInject($('.svg-img'));


   // Menu
   let menuBtn = $('.hamburger'),
       menuList = $('.navigation__list');

   menuBtn.on('click', function () {
      $(this).toggleClass('is-active');

      if (menuList.hasClass('hide-tablet hide-mobile')) {
         menuList.slideDown(500).hide().css('display', 'flex');
         menuList.removeClass('hide-tablet hide-mobile').addClass('show-desktop');
      } else {
         menuList.slideUp(500);
         menuList.addClass('hide-tablet hide-mobile').removeClass('show-desktop');
      }
   });

   // Scroll to Section
   $(window).on('resize', function () {
      if ($(window).width() > 768) {
         menuList.show().css('display', 'flex');

      } else {
         menuList.hide().css('display', 'none');
      }
   });
      $('a[href*="#"]').on('click', function (e) {
         let navHeight = $('.main-nav').height();
         let anchor = $(this),
             heightToAnchor = $(anchor.attr('href')).offset().top,
             totalHeight = heightToAnchor - navHeight;

         if ($(window).width() < 768) {
            if (!(anchor.attr('class') == 'header__scroll-down')) {
               menuBtn.toggleClass('is-active');

               if (menuList.hasClass('hide-tablet hide-mobile')) {
                  menuList.slideDown(500).hide().css('display', 'flex');
                  menuList.removeClass('hide-tablet hide-mobile');
               } else {
                  menuList.hide();
                  menuList.addClass('hide-tablet hide-mobile');
               }
            }
         }
         if ((anchor.attr('href') == '#header')) {
            $('html, body').stop().animate({
               scrollTop: 0
            }, 800, 'swing');
         } else {
            $('html, body').stop().animate({
               scrollTop: totalHeight
            }, 800, 'swing');
         }




         e.preventDefault();
      });





   // Cache selectors
   var lastId,
       topMenu = $("#top-menu"),
       topMenuHeight = topMenu.outerHeight()+15,
       // All list items
       menuItems = topMenu.find("a"),
       // Anchors corresponding to menu items
       scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
       });

// Bind to scroll
   $(window).scroll(function(){
      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
            return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
      }
   });



   // Selectize
   $('.select').selectize();

   // Btn up
   function btnUp() {

      let btnScroll = $('.top');

      if ( $(this).scrollTop() > $(window).height() ) {
         btnScroll.addClass('active');
      } else {
         btnScroll.removeClass('active');
      }

      $(window).scroll( () => {
         if ( $(this).scrollTop() > $(window).height() ) {
            btnScroll.addClass('active');
         } else {
            btnScroll.removeClass('active');
         }
      });

      btnScroll.on('click', () => {
         $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
      });

   } btnUp();


   // Callback form
   $(document).mouseup(function (e){ // событие клика по веб-документу
      let formMessage = $('.success span'); // тут указываем ID элемента
      let formOverlay = $('.success');
      if (!formMessage.is(e.target) // если клик был не по нашему блоку
          && formMessage.has(e.target).length === 0) { // и не по его дочерним элементам
         formMessage.hide(); // скрываем его
         formOverlay.hide(); // скрываем его
      }
   });

   $('.success__close').on('click', function() {
      $('.callback .success').stop().fadeOut(200);
      $('.callback .success span').stop().fadeOut(200);
   });

   //E-mail Ajax Send
   $("form.callback").submit(function() { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function() {
         $('.callback .success').fadeIn(300).delay(5000).fadeOut(200);
         $('.callback .success span').fadeIn(300).delay(5000).fadeOut(200);

         setTimeout(function() {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });


});
