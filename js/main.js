// Sticky Nav

$('.masthead, body').removeClass('sticky');
$('.to-top').removeClass('visible');

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.masthead, body').addClass('sticky')
        $('.to-top').addClass('visible')
      }
      if ($(this).scrollTop() < 50) {
        $('.masthead, body').removeClass('sticky')
        $('.to-top').removeClass('visible')
      }
   });
});

// Nav Toggle

$('.tog-nav').on('click', function (e) {
  e.preventDefault();
  $('.masthead').toggleClass('open');
});

// Smooth Scroll

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      // event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Category Select Blog

$('.cat-selector').change(function () {
  var catSelected = $(this).attr('id');

  if ($(this).is(':checked')) {
    $('.categories-wrap').addClass(catSelected);
    $('.categories-wrap').removeClass('cat-all');
  } else if ($(this).not(':checked') && $('.categories-wrap').hasClass('cat-news') && !$('.categories-wrap').hasClass('cat-events')) {
    $('.categories-wrap').addClass('cat-all');
    $('.categories-wrap').removeClass(catSelected);
  } else if ($(this).not(':checked') && $('.categories-wrap').hasClass('cat-events') && !$('.categories-wrap').hasClass('cat-news')) {
    $('.categories-wrap').addClass('cat-all');
    $('.categories-wrap').removeClass(catSelected);
  } else {
    $('.categories-wrap').removeClass(catSelected);
  }
});


// SubNav

var x = window.matchMedia("(max-width: 38em)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) {
    $('.subnav-label').on('click', function (e) {
      e.preventDefault();
      $('.subnav').toggleClass('open');
    });
    $('.nav .subnav a').on('click', function () {
      $('.masthead, .subnav').toggleClass('open');
    });
    $('.hours-link').on('click', function () {
      $('.masthead').toggleClass('open');
    });
  }
}
//
// $('.print-button-footer').on('click', function () {
//   window.print();
// });
