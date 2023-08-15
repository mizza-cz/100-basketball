// Light Gallery
$("#animated-thumbnail").lightGallery({
  thumbnail: true,
  getCaptionFromTitleOrAlt: true,
  selector: "a[style]",
});
// Image Transition
var scroll = "yes",
  Fscroll = scroll.replace(/(\r\n|\n|\r)/gm, " ");
"yes" === Fscroll &&
  ($(document).ready(function () {
    $("body").addClass("imgani");
  }),
  $(window).bind("load resize scroll", function () {
    var o = $(this).height();
    $("img").each(function () {
      var s = 0.1 * $(this).height() - o + $(this).offset().top;
      $(document).scrollTop() > s && $(this).addClass("anime");
    });
  }));
$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab("show");

  $("body").on("click", ".nav-tabs a", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab("show");
  });
});
