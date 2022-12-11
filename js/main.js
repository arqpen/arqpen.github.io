$(window).scroll(function(){
  var sticky = $('.headerCt'),
      scroll = $(window).scrollTop();

  if (scroll >= 40) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

//Color
$('#colorpicker').on('input', function() {
    $('#hexcolor').val(this.value);
});
$('#hexcolor').on('input', function() {
  $('#colorpicker').val(this.value);
});

$('#colorpicker2').on('input', function() {
    $('#hexcolor2').val(this.value);
});
$('#hexcolor2').on('input', function() {
  $('#colorpicker2').val(this.value);
});


//open 

$( ".gphs >div" ).click(function() {
  alert( "Handler for .click() called." );
});