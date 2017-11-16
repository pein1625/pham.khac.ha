$(document).ready(function(){
  'use strick';
  // click event on header button
  var bodyWidth = $(window).outerWidth();
  if (bodyWidth < 992) {
    $('.header-btn-left').on('click', function(e){
      $('.header-nav').slideToggle(300);
      if (bodyWidth < 768) {
        $('.login-nav').hide();
      }
      e.stopPropagation();
    });
    $('html, body').on('click', function(){
      $('.header-nav').slideUp(200);
    });
  }

  if (bodyWidth < 768){
    $('.header-btn-right').on('click', function(e){
      $('.login-nav').slideToggle(300);
      $('.header-nav').hide();
      e.stopPropagation();
    });
    $('html, body').on('click', function(){
      $('.login-nav').slideUp(200);
    })
  }
});
