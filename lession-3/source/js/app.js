$(document).ready(function(){
  $('.js-header-icon').on('click', function(e){
    $('.js-header-dropdown').fadeOut(0);
    $(this).next('.js-header-dropdown').fadeToggle(300);
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
    if ($(this).hasClass('active')) return false;
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
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
    items: 5,
    slideBy: 1
  });

  function checkClass() {
    var total = $('.js-product-slider .owl-stage .owl-item.active').length;
    $('.js-product-slider .owl-stage .owl-item').removeClass('js-first-item js-last-item');
    $('.js-product-slider .owl-stage .owl-item.active').each(function(index){
      if (index === 0) {
        $(this).addClass('js-first-item');
      }
      if ( index === total - 1 && total > 1) {
        $(this).addClass('js-last-item');
      }
    });
  }

  checkClass();
  productSlide.on('translated.owl.carousel', function(){
    checkClass();
  });

  $('.js-next-product').on('click', function(){
    productSlide.trigger('next.owl.carousel');
  })
  $('.js-prev-product').on('click', function(){
    productSlide.trigger('prev.owl.carousel');
  })
});
