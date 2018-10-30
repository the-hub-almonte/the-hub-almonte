// Sticky Nav

$('.masthead').removeClass('sticky')

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.masthead').addClass('sticky')
      }
      if ($(this).scrollTop() < 50) {
        $('.masthead').removeClass('sticky')
      }
   });
});

// Nav Toggle

$('.tog-nav').on('click', function (e) {
  e.preventDefault();
  $('.masthead').toggleClass('open');
});
