$(window).scroll(function(){
  var sticky = $('.headerCt'),
      scroll = $(window).scrollTop();

  if (scroll >= 40) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});