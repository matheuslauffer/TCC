$(document).ready(function() {
  $("input[type=text]").focusin(function() {
    //$(this).css("border-color","#FFFFFF");
    $(".label").css("color", "#FFFFFF");
  });
  $("input[type=password]").focusin(function() {
    //$(this).css("border-color","#FFFFFF");
    $(".label").css("color", "#FFFFFF");
  });
});
