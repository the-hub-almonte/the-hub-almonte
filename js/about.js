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
