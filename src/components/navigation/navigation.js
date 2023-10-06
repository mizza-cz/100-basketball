// document.addEventListener("DOMContentLoaded", function () {
//   var links = document.querySelectorAll("a[href^='#']");

//   links.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       var targetId = link.getAttribute("href");
//       var target = document.querySelector(targetId);
//       if (!target) return;

//       smoothScrollTo(target.offsetTop, 100);

//       links.forEach(function (link) {
//         link.classList.remove("active");
//       });
//       link.classList.add("active");
//     });
//   });

//   function smoothScrollTo(to, duration) {
//     var start = window.scrollY || window.pageYOffset;
//     var change = to - start;
//     var currentTime = 0;
//     var increment = 20;

//     function animateScroll() {
//       currentTime += increment;
//       var val = Math.easeInOutQuad(currentTime, start, change, duration);
//       window.scrollTo(0, val);
//       if (currentTime < duration) {
//         requestAnimationFrame(animateScroll);
//       }
//     }

//     Math.easeInOutQuad = function (t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     };

//     animateScroll();
//   }

//   window.addEventListener("scroll", function () {
//     var scrollPosition = window.scrollY || window.pageYOffset;
//     links.forEach(function (link) {
//       var targetId = link.getAttribute("href");
//       var target = document.querySelector(targetId);
//       if (!target) return;

//       var targetPosition = target.offsetTop;
//       if (
//         targetPosition <= scrollPosition &&
//         targetPosition + target.offsetHeight > scrollPosition
//       ) {
//         links.forEach(function (link) {
//           link.classList.remove("active");
//         });
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });
//   });
// });
var sections = $(".timeline__date, .header"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  // Получите позицию верхней части элемента и учтите высоту навигации
  var targetScrollTop = $(id).offset().top - nav_height;

  $("html, body").animate(
    {
      scrollTop: targetScrollTop,
    },
    0
  );

  return false;
});
