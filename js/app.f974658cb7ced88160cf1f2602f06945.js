(function() {
  // js/app.js
  $(function() {
    "use strict";
    $(".preloader").fadeOut(100);
    $(".main-header-area").sticky();
    ScrollUp.init(".scrollUp", {
      classes: {
        init: "scrollUp-init",
        show: "scrollUp-show",
        hide: "scrollUp-hide"
      }
    });
    var table = $(".highlight div table");
    $(table).each(function(i, t) {
      var pre = $(t).find("tbody tr td:first-child pre");
      $(pre).css({position: "absolute"});
      var lastPre = $(t).find("tbody tr td:last-child pre");
      $(lastPre).css({marginLeft: pre.width() + "px"});
    });
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows: false
    });
  });
})();
