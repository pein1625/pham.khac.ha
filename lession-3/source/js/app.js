$(document).ready(function(){
  $('.js-menu-btn').on('click', function(){
    $('.js-mobile-nav').addClass('active');
  });

  $('.js-mobile-nav-btn').on('click', function(){
    $('.js-mobile-nav').removeClass('active');
  });

  $('.js-mobile-nav-trigger').on('click', function(){
    $(this).toggleClass('active');
    $(this).siblings('.js-mobile-subnav').slideToggle(200);
  });

  $('.js-header-btn').on('click', function(e){
    var data = $(this).data('target');
    $('.js-header-dropdown').hide();
    $(data).fadeToggle(200);
    e.stopPropagation();
  });

  $('.js-header-dropdown').on('click', function(e){
    e.stopPropagation();
  });

  $('html, body').on('click', function(){
    $('.js-header-dropdown').fadeOut(0);
  });

  //- speak slider 
  $('.js-speak__slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1
  });

  //- product category
  $('.js-category__item').on('click', function(){
    if ($(this).hasClass('active')) {
      return false;
    }
    else {
      $('.js-category__item.active').removeClass('active');
      $(this).addClass('active');
      var data = $(this).data('target');
      $('.js-product-tabs.active').removeClass('active');
      $('.js-product-tabs[data-tab='+data+']').addClass('active');
      checkClass();
    }
  });

  //- product category 2
  $('.js-category-2__item').on('click', function(){
    if ($(this).hasClass('active')) return false;
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
  });

  // product slider
  var productSlide = $('.js-product-slider');
  productSlide.owlCarousel({
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },

      768: {
        items: 2
      },
      1200: {
        items: 4
      },
      1620: {
        items: 6
      }
    },
    slideBy: 1
  });

  function checkClass() {
    var total = $('.js-product-slider .owl-stage .owl-item.active').length;
    $('.js-product-slider .owl-stage .owl-item').removeClass('js-first-item js-last-item');

    if ($(window).width() > 1200) {
      $('.js-product-slider .owl-stage .owl-item.active').each(function(index){
        if (index === 0 || index === total/3 || index === total*2/3) {
          $(this).addClass('js-first-item');
        }
        if ((index === total - 1 || index === total/3-1 || index === total*2/3-1) && total > 1) {
          $(this).addClass('js-last-item');
        }
      });
    }
  }

  checkClass();
  productSlide.on('translated.owl.carousel', function(){
    checkClass();
  });

  $(window).resize(function(){
    checkClass();
  });

  $('.js-next-product').on('click', function(){
    productSlide.trigger('next.owl.carousel');
  });

  $('.js-prev-product').on('click', function(){
    productSlide.trigger('prev.owl.carousel');
  });

  $('.js-product-tab').hide();
  $('.js-product-tab[data-product="sell"').show();

  // home social slider
  $('.social').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

  // list sidebar dropdown
  $('.js-list-dropdown-btn').on('click', function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.js-list-dropdown-menu').slideUp(200);
      return false;
    }
    $('.js-list-dropdown-btn.active').removeClass('active');
    $(this).addClass('active');
    $('.js-list-dropdown-menu').slideUp(200);
    $(this).siblings('.js-list-dropdown-menu').slideToggle(200);
  });

  // detail page images
  $('.js-small-img').on('click', function(){
    if ($(this).hasClass('active')) return false;
    var total = $('.js-small-img').length;

    if ($('.js-small-img:nth-child(2)').hasClass('active')) {
      $('.js-img-up').removeClass('disabled');
    }

    if ($('.js-small-img:nth-child('+(total + 1)+')').hasClass('active')) {
      $('.js-img-down').removeClass('disabled');
    }

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

    if ($('.js-small-img:nth-child(2)').hasClass('active')) {
      $('.js-img-up').addClass('disabled');
    }

    if ($('.js-small-img:nth-child('+(total + 1)+')').hasClass('active')) {
      $('.js-img-down').addClass('disabled');
    }
    changeImage();
  });

  $('.js-img-up').on('click', function(){
    var total = $('.js-small-img').length;

    $('.js-small-img').each(function(index){
      if ($(this).hasClass('active')) {
        if (index === 0) {
          return false;
        }
        else if (index === 1) {
          $('.js-img-up').addClass('disabled');
        }
        else if (index === total - 1) {
          $('.js-img-down').removeClass('disabled');
        }

        $(this).removeClass('active');
        $('.js-small-img:nth-child('+(index + 1)+')').addClass('active');

        changeImage();
        return false;
      }
    });
  });

  $('.js-img-down').on('click', function(){
    var total = $('.js-small-img').length;
    $('.js-small-img').each(function(index){
      if ($(this).hasClass('active')) {
        if (index === total-1) {
          return false;
        }
        else if (index === 0) {
          $('.js-img-up').removeClass('disabled');
        }
        else if (index === total-2) {
          $('.js-img-down').addClass('disabled');
        }

        $(this).removeClass('active');
        $('.js-small-img:nth-child('+(index + 3)+')').addClass('active');

        changeImage();
        return false;
      }
    });
  });

  function changeImage (){
    var src = $('.js-small-img.active > .small-img__img').attr('src');
    $('.js-large-img').attr('src', src);
  }

  // detail product tab
  $('.js-more-detail__btn').on('click', function(){
    if ($(this).hasClass('active')) return false;
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    var data = $(this).data('select');
    $('.js-more-detail__tabs.active').removeClass('active');
    $('.js-more-detail__tabs[data-tab='+data+']').addClass('active');
  });

  // validate
  $('.register').validate({
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      },
      password2: {
        required: true
      },
      re_password2: {
        required: true,
        equalTo: '.register__password2'
      }
    }
  });

  $('.login').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    }
  });
});
