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

    $("a[href*=\\#]").removeClass("active");
    $(this).addClass("active");
  });

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
