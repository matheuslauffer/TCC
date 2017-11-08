$(document).ready(function(){
  $('.menu-anchor').on('click touchstart', function(e){
    $('html').toggleClass('menu-active');
    e.preventDefault();
  });
});
