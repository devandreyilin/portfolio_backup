$(function() {

	//============= SVG INJECTER (start) ==================
   SVGInject($('.svg-inject'));
	//============= SVG INJECTER (end) ==================

   //=========== CALLBACK Form (start) ============
   //E-mail Ajax Send
   $("form#callback").submit(function() { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function() {
         $('.success').slideDown(400);

         setTimeout(function() {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });
   //=========== CALLBACK Form (end) ==============

});
