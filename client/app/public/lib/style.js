$(document).ready(function() {
  $("input[type=text]").focusin(function() {
    $(".label").css("color", "#FFFFFF");
  });
  $("input[type=password]").focusin(function() {
    $(".label").css("color", "#FFFFFF");
  });
});
