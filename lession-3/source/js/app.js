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
    var tab = $(this).data('tab');
    $('.js-category-2').hide();
    $('.js-category-2[data-cate='+tab+']').show();
    $('.js-product-tab').hide();
    $('.js-product-tab[data-product='+tab+']').show();
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
      850: {
        items: 3
      },
      1090: {
        items: 4
      },
      1367: {
        items: 5
      },
      1620: {
        items: 6
      }
    },
    slideBy: 1
  });

  function checkClass() {
    var total = $('.js-product-slider .owl-stage .owl-item.active').length;
    console.log(total);
    $('.js-product-slider .owl-stage .owl-item').removeClass('js-first-item js-last-item');
    $('.js-product-slider .owl-stage .owl-item.active').each(function(index){
      if (index === 0 || index === total/3 || index === total*2/3) {
        $(this).addClass('js-first-item');
      }
      if ((index === total - 1 || index === total/3-1 || index === total*2/3-1) && total > 1) {
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
  });

  $('.js-prev-product').on('click', function(){
    productSlide.trigger('prev.owl.carousel');
  });

  $('.js-product-tab').hide();
  $('.js-product-tab[data-product="sell"').show();

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
});
