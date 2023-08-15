$(document).ready(function () {
  $("a[href*=\\#]").on("click", function (e) {
    e.preventDefault();

    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target;
        }
      );

    // Remove active class from all links and add it to the clicked link
    $("a[href*=\\#]").removeClass("active");
    $(this).addClass("active");
  });

  // Add active class to nav links based on scroll position
  $(window).on("scroll", function () {
    var scrollPosition = $(this).scrollTop();
    $("a[href*=\\#]").each(function () {
      var target = $(this).attr("href");
      var targetPosition = $(target).offset().top;
      if (
        targetPosition <= scrollPosition &&
        targetPosition + $(target).outerHeight() > scrollPosition
      ) {
        $("a[href*=\\#]").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});
