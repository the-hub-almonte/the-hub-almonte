// Sticky Nav

$('.masthead').removeClass('sticky')

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.masthead, body').addClass('sticky')
      }
      if ($(this).scrollTop() < 50) {
        $('.masthead, body').removeClass('sticky')
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
  $(".smooth-scroll, .smooth-scroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
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
  } else {
    $('.categories-wrap').removeClass(catSelected);
  }
});



//
// $('.cat-selector').on('click', function (e) {
//   var catSelect = $(this).attr('href');
//   e.preventDefault();
//   if (catSelect == '#cat-all') {
//     $('.categories-wrap').removeClass('cat-news');
//     $('.categories-wrap').removeClass('cat-events');
//     $('.categories-wrap').addClass('cat-all');
//     console.log('clicked');
//   } if (catSelect == '#cat-news') {
//     $('.categories-wrap').removeClass('cat-all');
//     $('.categories-wrap').toggleClass('cat-news');
//   } if (catSelect == '#cat-events') {
//     $('.categories-wrap').removeClass('cat-all');
//     $('.categories-wrap').toggleClass('cat-events');
//   }
// });


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
  }
}
// 
// $('.print-button-footer').on('click', function () {
//   window.print();
// });
