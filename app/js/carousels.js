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
  }

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
  }

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
  }

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
  }

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
    arrowShape: { 
      x0: 10,
      x1: 50, y1: 40,
      x2: 60, y2: 30,
      x3: 30
    },
  }

  var $carousel = $('.inner-slider').flickity(options);
  
  function updateLink() {
    var attrID = $(this).find('.is-selected').attr('id');
    var link = '#' + attrID;
    
    $(this).next().find('.inner-thumb').removeClass('is-active');
    $(this).next().find('[href="' + link + '"]' ).addClass('is-active');
  }

  updateLink();
  $carousel.on( 'select.flickity', updateLink );

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
  }

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
  }

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
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
    imagesLoaded: true,
    fade: true,
    autoPlay: 1500,
    pauseAutoPlayOnHover: false,
    bgLazyLoad: true,
    bgLazyLoad: 1,
  }

  var $carousel = $('#tvSlider').flickity(options);

  /**
   * #CUSTOM UI
   */
  // previous
  /*
  $('.tv-nav .nav-prev').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.tv-nav .nav-next').on( 'click', function() {
    $carousel.flickity('next');
  });
  */

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
  }

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
    cellAlign: 'left',
    setGallerySize: false,
    imagesLoaded: true,
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