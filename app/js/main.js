/*----------------------------------------------------*/
/*  #ACCORDION
/*----------------------------------------------------*/

(function($) {
  $('.faq-accordion__item:eq(0) h3').addClass('active').next().slideDown();

  $('.faq-accordion h3').click(function(j) {
      var dropDown = $(this).closest('li').find('div');

      $(this).closest('.faq-accordion').find('div').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $(this).closest('.faq-accordion').find('h3.active').removeClass('active');
          $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
  });
})(jQuery);