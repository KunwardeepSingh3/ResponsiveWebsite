$(document).ready(function(){
    $("#wrapper li").hover(function(){
      $("#dropdown", this).slideDown(100);
    }, function(){
      $("#dropdown", this).stop().slideUp(100);
    });
  })