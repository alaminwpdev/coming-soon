$(function () {
  "use strict";

  $(window).on("load", function () {
    // 1. preloader
    $("#preloader").fadeOut(1400);
    $("#preloader-status").delay(300).fadeOut("slow");

    // 2. hero scale IN
    $(".hero-bg").addClass("hero-bg-show");

    // 3. init animation
    $(initAnim);
  });

  // 4. init elements and borders
  $(initFadeInText);
  $(init);

  // 5. borders ON resize
  $(window).on("resize", function () {
    $(bordersResize);
  });

  // 6. panels, panel elements
  $(".open-menu-content, .main-navigation-button-close").on(
    "click",
    function () {
      if ($(".panel-left, .panel-right").hasClass("open")) {
        $(".panel-left, .panel-right").removeClass("open");
        $(".panel-left, .panel-right").addClass("close");
        $("h6, .titleOT, #navigation").removeClass("close");
        $("h6, .titleOT, #navigation").addClass("open");
        $("nav a").removeClass("active");
        $("#overlay").fadeOut(800, "easeInOutQuad");
        $(".panel-left-overlay").fadeOut(600, "easeInOutQuad");
      } else {
        $(".panel-left, .panel-right").removeClass("close");
        $(".panel-left, .panel-right").addClass("open");
        $("h6, .titleOT, #navigation").removeClass("open");
        $("h6, .titleOT, #navigation").addClass("close");
        $("nav a").addClass("active");
        $("#overlay").fadeIn(800, "easeInOutQuad");
        $(".panel-left-overlay").fadeIn(1200, "easeInOutQuad");
      }
    }
  );

  // 11. morphext
  $("#js-rotating").Morphext({
    animation: "pulse",
    separator: "|",
    speed: 4000,
    complete: function () {},
  });

  // 12. text animation
  function initFadeInText() {
    $(".text-animation").each(function (i) {
      $(this).addClass(".text-animation" + (i + 1));
    });
  }

  // 13. borders resize
  function bordersResize() {
    $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css(
      "width",
      "50%"
    );
    var widthFramework = $(".border-top-1").width();
    var widthTop = $(".center-space-top span").width();
    var widthBottom = $(".center-space-bottom span").width();
    var calculateTop = widthFramework - widthTop / 2 - 8;
    var calculateBottom = widthFramework - widthBottom / 2 - 8;
    $(".border-top-1").width(calculateTop);
    $(".border-top-2").width(calculateTop);
    $(".border-bottom-1").width(calculateBottom);
    $(".border-bottom-2").width(calculateBottom);
  }

  // 14. animations
  function initAnim() {
    $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css(
      "width",
      "50%"
    );
    $(".border-left, .border-right").css("height", "100%");
    var heightLaterals = $(".border-right").height();
    $(".border-left, .border-right").css("height", "0px");
    $(".border-left, .border-right").css("top", heightLaterals / 2 + "px");
    var widthFramework = $(".border-top-1").width();
    var widthTop = $(".center-space-top span").width();
    var widthBottom = $(".center-space-bottom span").width();
    var calculateTop = widthFramework - widthTop / 2 - 8;
    var calculateBottom = widthFramework - widthBottom / 2 - 8;
    $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css(
      "width",
      "0%"
    );
    $(".border-left, .border-right").animate(
      {
        height: heightLaterals + "px",
        top: "0px",
      },
      600,
      function () {
        $(".border-left, .border-right").css({
          height: "100%",
        });
        $(".border-top-1").animate(
          {
            width: calculateTop - 25 + "px",
          },
          600
        );
        $(".border-top-2").animate(
          {
            width: calculateTop - 25 + "px",
          },
          600
        );
        $(".border-bottom-1").animate(
          {
            width: calculateBottom - 25 + "px",
          },
          600
        );
        $(".border-bottom-2").animate(
          {
            width: calculateBottom - 25 + "px",
          },
          600
        );
        $(".center-space-top, .center-space-bottom, .titleOT, nav, h6")
          .stop(true, true)
          .delay(500)
          .animate(
            {
              opacity: 1,
            },
            3000
          );
        $("#wall-images-wrapper").stop(true, true).delay(500).animate(
          {
            opacity: 1,
          },
          600
        );
      }
    );
  }

  function init() {
    $(
      ".center-space-top, .center-space-bottom, .titleOT, nav, h6, #wall-images-wrapper"
    ).css("opacity", "0");
    $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css(
      "width",
      "0%"
    );
    $(".border-left, .border-right").css("height", "0px");
  }
});
