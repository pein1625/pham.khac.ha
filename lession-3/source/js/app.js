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
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  });
});
