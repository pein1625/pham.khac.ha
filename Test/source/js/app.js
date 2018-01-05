$(document).ready(function(){

  //account btn 
  $('.js-account-btn').on('click', function(){
    $('.js-account-menu').slideToggle(250);
  });

  // menu button
  $('.js-menu-button').on('click', function(){
    console.log('clicked');
    $(this).toggleClass('active')
    $('.js-mobile-nav').slideToggle(250);
  });

  //product slider 2
  var productSlider = $('.js-product-slider');
  productSlider.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  // home grid 
  $('.js-home-grid').owlCarousel({
    loop: false,
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
      }
    }
  });

  // testimonial carousel
  $('.js-testimonial').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    items: 1
  });

  // detail tabs
  $('.js-detail-tabs__tab').on('click', function(){
    if ($(this).hasClass('active')) return false;

    $('.js-detail-tabs__tab.active').removeClass('active');
    $(this).addClass('active');

    var data = $(this).data('target');

    $('.js-detail-content__block.active').removeClass('active');
    $('.js-detail-content__block[data-tab="'+data+'"]').addClass('active');
  });

  //detail thumnail slider 
  function checkPosition(){
    var wrapper = $('.js-product-image__thumbnail');
    var inner = $('.js-thumbnail-slider');
    if (!$(inner).length) return false;

    if ($(inner).outerHeight() < $(wrapper).outerHeight()) {
      $('.js-thumbnail-slider').css({
        "top": "50%",
        "transform": "translateY(-50%)"
      });
    }
    else {
      var item = $('.js-thumbnail-slider__item.active');
      var index = $(item).data('item');
      var itemHeight = $(item).outerHeight();
      var itemHalf = itemHeight / 2;
      var itemOffset = $(item).offset().top;

      var wrap = $('.js-product-image__thumbnail');
      var wrapHeight = $(wrap).outerHeight();
      var wrapHalf = wrapHeight / 2;
      var wrapOffset = $(wrap).offset().top;

      var slider = $('.js-thumbnail-slider');
      var sliderHeight = $(slider).outerHeight();
      var sliderOffset = $(slider).offset().top;

      var distance = (wrapHalf - ( itemOffset + itemHalf - sliderOffset ));
      $(slider).css('top', distance + "px");
    }
  }

  function changeImage() {
    var img = $('.js-thumbnail-slider__item.active').data('img');;
    $('.js-product-image__img').attr('src', img);
  }

  checkPosition();

  $(window).resize(function(){
    checkPosition();
  });

  $('.js-thumbnail-slider__item').on('click', function(){
    if ($(this).hasClass('active')) return false;

    $('.js-thumbnail-slider__item.active').removeClass('active');
    $(this).addClass('active');

    checkPosition();
    changeImage();
  });

  $('.js-product-image__up').on('click', function(){
    var slide = $('.js-thumbnail-slider__item');
    if ($(slide[0]).hasClass('active')) return false;

    slide.each(function(index){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(slide[index-1]).addClass('active');
        return false;
      }
    });

    checkPosition();  
    changeImage();  
  });

  $('.js-product-image__down').on('click', function(){
    var slide = $('.js-thumbnail-slider__item');
    var total = slide.length;
    if ($(slide[total - 1]).hasClass('active')) return false;

    slide.each(function(index){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(slide[index + 1]).addClass('active');
        return false;
      }
    });

    checkPosition();
    changeImage();
  });

  // product number
  $('.js-product-property__sub').on('click', function(){
    $('.js-product-property__input').val(function(i, oldval){
      if (oldval > 1) {
        return --oldval;
      }
      else {
        return 1;
      }
    });
  });

  $('.js-product-property__add').on('click', function(){
    $('.js-product-property__input').val(function(i, oldval){
      return ++oldval;
    });
  });

  $('.js-product-property__input').on('keydown', function(e){
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
         // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
  });

  // cart number
  $('.js-cart__input').on('keydown', function(e){
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
         // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
  });

  // validate register form
  $('.js-register-form').validate({
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
        required: true,
        minlength: 6
      },
      password2: {
        required: true,
        minlength: 6
      },
      "re_password2": {
        required: true,
        equalTo: '.js-register-password2'
      }
    }
  });

  $('.js-login-form').validate({
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

  $('.js-blog-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    }
  });

  $('.js-contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true
      },
      message: {
        required: true
      }
    }
  });
});
