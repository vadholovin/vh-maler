/*----------------------------------------------------*/
/*  #MENU
/*----------------------------------------------------*/

(function ($) {
  
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.mobile-box').toggleClass('is-active');
  });

  $('.mobile-box, .mobile-box a').click(function (e) { 
    e.preventDefault();
    $(this).removeClass('is-active');
    $('.hamburger').removeClass('is-active');
  });

})(jQuery);




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



/*----------------------------------------------------*/
/*  #SWITCH APP IMAGES
/*----------------------------------------------------*/

(function ($) {

  $('.app-control').hover(function () {
    var el = $(this).attr('id');
    $('.app-img').hide();
    $('.app-img.'+el).show();
  });

  $('.app-control').click(function () {
    var el = $(this).attr('id');
    $('.app-img').hide();
    $('.app-img.'+el).show();
  });

})(jQuery);



/*----------------------------------------------------*/
/*  #SHOW YOUTUBE VIDEO
/*----------------------------------------------------*/

(function ($) {
  
  $(document).on('click','.js-videoPlay',function(e) {
  
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  
    function videoPlay(wrapper) {
      var iframe = wrapper.find('.js-videoIframe');
      var src = iframe.data('src');
      
      wrapper.addClass('videoWrapperActive');
      iframe.attr('src',src);
    }
  });

})(jQuery);



/*----------------------------------------------------*/
/*  #COMPARE IMAGES
/*----------------------------------------------------*/

(function ($) {
  
  $(window).on('load', function() {

    $('#images_1, #images_2').twentytwenty({
      before_label: 'Визуализация',
      after_label: 'Фотография'
    });

    $(window).trigger("resize.twentytwenty");
    
  });

})(jQuery);



/*----------------------------------------------------*/
/*	#ANIMATED SCROLL TO ANCHOR
/*----------------------------------------------------*/
jQuery(document).ready(function($){

  "use strict";
  $.fn.scrollTo = function( options ) {

    var settings = {
      offset : -60,       //an integer allowing you to offset the position by a certain number of pixels. Can be negative or positive
      speed : 'slow',   //speed at which the scroll animates
      override : null,  //if you want to override the default way this plugin works, pass in the ID of the element you want to scroll through here
      easing : null //easing equation for the animation. Supports easing plugin as well (http://gsgd.co.uk/sandbox/jquery/easing/)
    };

    if (options) {
      if(options.override){
        //if they choose to override, make sure the hash is there
        options.override = (override('#') != -1)? options.override:'#' + options.override;
      }
      $.extend( settings, options );
    }

    return this.each(function(i, el){
      $(el).click(function(e){
        var idToLookAt;
        if ($(el).attr('href').match(/#/) !== null) {
          e.preventDefault();
          idToLookAt = (settings.override)? settings.override:$(el).attr('href');//see if the user is forcing an ID they want to use
          //if the browser supports it, we push the hash into the pushState for better linking later
          if(history.pushState){
            history.pushState(null, null, idToLookAt);
            $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing);
          }else{
            //if the browser doesn't support pushState, we set the hash after the animation, which may cause issues if you use offset
            $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing,function(e){
              //set the hash of the window for better linking
              window.location.hash = idToLookAt;
            });
          }
        }
      });
    });
  };

  $('#to_benefits, #to_repair, #to_design, #to_faq, #to_team, #to_contacts, #to_benefits_2, #to_faq_2, #to_team_2, #to_contacts_2, #to_repair_2, #to_design_2, #to_benefits_3, #to_faq_3, #to_team_3, #to_contacts_3, #to_repair_3, #to_design_3' ).scrollTo({ speed: 1400 });

});



/*----------------------------------------------------*/
/*	#SCROLL NAVBAR
/*----------------------------------------------------*/

(function($) {

  $(window).scroll(function(){

    "use strict";

    var b = $(window).scrollTop();
    var element = $('.page-header');
    var addingClass = 'header--scroll';

    if ( b > 100) {
      element.addClass(addingClass);
    } else if ( b < 100) {
      element.removeClass(addingClass);
    }

  });

})( jQuery );



/*----------------------------------------------------*/
/*  #PERFECT-SCROLLBAR INIT
/*----------------------------------------------------*/

(function ($) {

  $('.js-custombar').each(function() {
    const ps = new PerfectScrollbar($(this)[0], {
      wheelSpeed: 1,
      minScrollbarLength: 20
    });

    $(window).resize(function () { 
      ps.update();
    });
  });

})(jQuery);



/* =================================================================================== */
/* ====== #CAROUSELS ================================================================= */
/* =================================================================================== */


/*----------------------------------------------------*/
/*  #PORTFOLIO CAROUSELS
/*----------------------------------------------------*/

(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    // imagesLoaded: true,
    bgLazyLoad: true,
    bgLazyLoad: 1,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#worksSlider_1').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.js-works-nav--1 .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.js-works-nav--1 .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);


(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    // imagesLoaded: true,
    bgLazyLoad: true,
    bgLazyLoad: 1,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#worksSlider_2').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.js-works-nav--2 .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.js-works-nav--2 .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);


/**
 * BEFORE AND AFTER CAROUSEL
 */
(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    lazyLoad: true,
    lazyLoad: 2,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#bnaSlider').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.bna-nav .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.bna-nav .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);




/**
 * OUTER PORTFOLIO CAROUSEL
 */
(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    // setGallerySize: false,
  };

  var $carousel = $('#cvSlider_1').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.js-cv-nav--1 .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.js-cv-nav--1 .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);



/**
 * INNER PORTFOLIO CAROUSEL
 */
(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    hash: true,
    selectedAttraction: 0.2,
    friction: 0.8,
    arrowShape: { 
      x0: 10,
      x1: 50, y1: 40,
      x2: 60, y2: 30,
      x3: 30
    },
  };

  var $carousel = $('.inner-slider').flickity(options);
  
  function slideByLink() {
    var attrID = $(this).find('.is-selected').attr('id');
    var link = '#' + attrID;
    
    $(this).next().find('.inner-thumb').removeClass('is-active');
    $(this).next().find('[href="' + link + '"]' ).addClass('is-active');
  }

  slideByLink();
  $carousel.on( 'select.flickity', slideByLink );

  $('.inner-thumb').click(function () {

    $(this).siblings().removeClass('is-active');
    if ( !$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
    }
  });

})(jQuery);



/**
 * PORTFOLIO DETAILS
 */

(function ($) {
  
  $('.button-minimize').click(function (e) { 
    e.preventDefault();
    
    $(this).parent().toggleClass('is-open');
    if($(this).parent().hasClass('is-open')) {
      $(this).find('span').text('Свернуть');
    } else {
      $(this).find('span').text('Открыть');
    }
  });


})(jQuery);



/*----------------------------------------------------*/
/*  #PRICE CAROUSELS
/*----------------------------------------------------*/

/**
 * PRICE REPAIR CAROUSEL
 */
(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    hash: true,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#priceSlider_1').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.js-price-nav--1 .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.js-price-nav--1 .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);


/**
 * PRICE DESIGN CAROUSEL
 */
(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    hash: true,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#priceSlider_2').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.js-price-nav--2 .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.js-price-nav--2 .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);


/**
 * SHOW MODAL CAROUSELS
 */
(function ($) {

  // Show
  $('[data-modal-trigger]').click(function (e) { 
    e.preventDefault();
    var value = $(this).attr('data-modal-trigger');

    $('#'+value).addClass('is-active');
  });


  // Hide
  $('.button-modal-close').click(function (e) { 
    e.preventDefault();
    $('.modalbox.is-active').removeClass('is-active');
  });

})(jQuery);



/*----------------------------------------------------*/
/*  #TV CAROUSEL
/*----------------------------------------------------*/

(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    cellSelector: '.tv-item',
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    fade: true,
    autoPlay: 1500,
    pauseAutoPlayOnHover: false,
    bgLazyLoad: true,
    bgLazyLoad: 1,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#tvSlider').flickity(options);

})(jQuery);



/*----------------------------------------------------*/
/*  #REVIEWS CAROUSEL
/*----------------------------------------------------*/

(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: true,
    draggable: true,
    imagesLoaded: true,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  var $carousel = $('#reviewsSlider').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.reviews-nav .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.reviews-nav .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);



/*----------------------------------------------------*/
/*  #TEAM CAROUSEL
/*----------------------------------------------------*/

(function($) {

  var options = {
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    cellAlign: 'center',
    setGallerySize: false,
    imagesLoaded: true,
    selectedAttraction: 0.2,
    friction: 0.8,
  };

  if ( matchMedia('screen and (min-width: 768px)').matches ) {
    options.cellAlign = 'left';
  }

  var $carousel = $('#teamSlider').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  $('.team-nav .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.team-nav .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });

})(jQuery);