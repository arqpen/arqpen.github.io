$(window).scroll(function(){
  var sticky = $('.headerCt'),
      scroll = $(window).scrollTop();

  if (scroll >= 40) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

//Color 1
$('#aqp-cpk-1').on('input', function() {
    $('#hexc-c1').val(this.value);
    $("#aqpCl").css("fill", this.value);
});
$('#hexc-c1').on('input', function() {
  $('#aqp-cpk-1').val(this.value);
  $("#aqpCl").css("fill", this.value);
});
//Color 2
$('#aqp-cpk-2').on('input', function() {
    $('#hexc-c2').val(this.value);
    $("#aqpCd").css("fill", this.value);
    $("#aqpLi, #aqpLo").css("stroke", this.value);

});
$('#hexc-c2').on('input', function() {
  $('#aqp-cpk-2').val(this.value);
  $("#aqpCd").css("fill", this.value);
  $("#aqpLi, #aqpLo").css("stroke", this.value);

});
//Color 3
$('#aqp-cpk-3').on('input', function() {
    $('#hexc-c3').val(this.value);
    $("#aqpCs").css("fill", this.value);
});
$('#hexc-c3').on('input', function() {
  $('#aqp-cpk-3').val(this.value);
  $("#aqpCs").css("fill", this.value);
});

//Opacity Shadow
$('#shapeOpacity').on("change mousemove", function() {
    var newval=$(this).val();
    $("#shapeOpacityVar").text(newval+'%');
     $("#aqpSh").css("opacity", newval/100);
  });

//open 

$( ".gphs >div" ).click(function() {
  alert( "Handler for .click() called." );
});

