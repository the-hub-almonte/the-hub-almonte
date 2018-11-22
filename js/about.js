// When the user scrolls the page, execute myFunction
window.onscroll = function() {subNavSticky()};

// Get the navbar
var aboutNavStick = document.getElementById("about-subnav-bar");

// Get the offset position of the navbar
var aboutNavSticky = aboutNavStick.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function subNavSticky() {
  if (window.pageYOffset >= aboutNavSticky) {
    aboutNavStick.classList.add("sticky");
    $('.masthead').addClass('no-shadow');
    $('body').addClass('sticky-extend');
  } else {
    aboutNavStick.classList.remove("sticky");
    $('.masthead').removeClass('no-shadow');
    $('body').removeClass('sticky-extend');
  }
}


// (function($) {
//
//   /**
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
//    */
//
//   $.fn.visible = function(partial) {
//
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
//
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//   };
//
// })(jQuery);
//
//
// $(window).scroll(function(event) {
//
//   $('#history-hub').each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       $('.about-subnav-bar li:first-child a').addClass("current");
//     } else {
//       $('.about-subnav-bar li:first-child a').removeClass("current");
//     }
//   });
//
//   $('#our-services').each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       $('.about-subnav-bar li:nth-child(2) a').addClass("current");
//     } else {
//       $('.about-subnav-bar li:nth-child(2) a').removeClass("current");
//     }
//   });
//
//   $('#what-we-give').each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       $('.about-subnav-bar li:nth-child(3) a').addClass("current");
//     } else {
//       $('.about-subnav-bar li:nth-child(3) a').removeClass("current");
//     }
//   });
//
//   $('#board-of-directors').each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       $('.about-subnav-bar li:nth-child(4) a').addClass("current");
//     } else {
//       $('.about-subnav-bar li:nth-child(4) a').removeClass("current");
//     }
//   });
//
// });
