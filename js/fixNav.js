$(function(){

  var $fixBar     = $("#local_nav");
  var nav_offset  = 48;

  $(window).on("scroll load", function(){
    var now_offset = $(window).scrollTop();
    if(now_offset > nav_offset)
      $fixBar.css({ "position": "fixed", "top": 0 });
    else
      $fixBar.css({ "position": "absolute", "top": nav_offset});
  });

});
